import Heading from "@/app/components/Heading";
import ShareLinkButton from "@/app/components/ShareLinkButton";
import { getReview } from "@/lib/review";
import Image from "next/image";

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

const ReviewPage = async ({ params: { slug } }) => {
  const { title, date, image, body, subtitle } = await getReview(slug);
  return (
    <>
      <Heading>{title}</Heading>
      <p className="font-semibold pb-3">{subtitle}</p>
      <div className="flex gap-3 items-baseline">
        <p className="italic mb-2">{date}</p>
        <ShareLinkButton />
      </div>

      <Image
        src={image}
        alt=""
        width="640"
        height="360"
        className="rounded mb-2"
        priority
      />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
};

export default ReviewPage;
