import { marked } from "marked";
import qs from "qs";

const CMS_URL = "http://localhost:1337";

export async function getFeaturedReview() {
  const reviews = await getReviews();
  const featuredReview = reviews[0];

  return featuredReview;
}

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function getSlugs() {
  const { data } = await fetchReviews({
    fields: ["slug"],
    sort: ["publishedAt: desc"],
    pagination: { pageSize: 100 },
  });
  return data.map((item) => item.attributes.slug);
}

export async function getReview(slug) {
  const { data } = await fetchReviews({
    filters: { slug: { $eq: slug } },
    fields: ["slug", "title", "subtitle", "publishedAt", "body"],
    populate: { image: { fields: ["url"] } },
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 1, withCount: false },
  });
  const item = data[0];

  return {
    ...toReview(item),
    body: marked(item.attributes.body),
  };
}

export async function getReviews() {
  const { data } = await fetchReviews({
    fields: ["slug", "title", "subtitle", "publishedAt"],
    populate: { image: { fields: ["url"] } },
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 6 },
  });

  return data.map(toReview);
}

async function fetchReviews(parameters) {
  const url =
    `${CMS_URL}/api/reviews?` +
    qs.stringify(parameters, { encodeValuesOnly: true });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  return await response.json();
}

function toReview(item) {
  const { attributes } = item;
  return {
    slug: attributes.slug,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: CMS_URL + attributes.image.data.attributes.url,
  };
}
