import Image from "next/image";
import Link from "next/link";
import Heading from "../components/Heading";
import { getReviews } from "@/lib/review";

export const metadata = {
  title: "Reviews",
};

const ReviewsPage = async () => {
  const reviews = await getReviews(6);

  return (
    <>
      <Heading>Reviews</Heading>
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

export default ReviewsPage;
