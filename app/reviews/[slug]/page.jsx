import Heading from "@/app/components/Heading";
import ShareLinkButton from "@/app/components/ShareLinkButton";
import { getReview } from "@/lib/review";
import Image from "next/image";
import { notFound } from "next/navigation";

// export async function generateStaticParams() {
//   const slugs = await getSlugs();
//   return slugs.map((slug) => ({ slug }));
// }

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  return {
    title: review.title,
  };
}

export const dynamic = "force-dynamic";

const ReviewPage = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="font-semibold pb-3">{review.subtitle}</p>
      <div className="flex gap-3 items-baseline">
        <p className="italic mb-2">{review.date}</p>
        <ShareLinkButton />
      </div>

      <Image
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="rounded mb-2"
        priority
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
};

export default ReviewPage;
