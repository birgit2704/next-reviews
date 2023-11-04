import Image from "next/image";
import Link from "next/link";
import Heading from "../components/Heading";
import { getReviews, getSearchableReviews } from "@/lib/review";
import Paginationbar from "../components/Paginationbar";
import Searchbox from "../components/Searchbox";

export const metadata = {
  title: "Reviews",
};

const ReviewsPage = async ({ searchParams }) => {
  const page = parsePageParam(searchParams.page);
  const pageSize = 6;
  const { reviews, pageCount } = await getReviews(pageSize, page);
  const searchableReviews = await getSearchableReviews();
  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex justify-between pb-3 pr-12">
        <Paginationbar page={page} pageCount={pageCount} href="reviews/" />
        <Searchbox reviews={searchableReviews} />
      </div>
      <p>Here we'll list all the reviews</p>
      <ul className="flex flex-wrap flex-row gap-3">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="border w-80 bg-white mb-2 rounded shadow hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t mb-2"
                priority={index === 0}
              />
              <h2 className="text-center pb-2 font-orbitron font-semibold">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}

export default ReviewsPage;
