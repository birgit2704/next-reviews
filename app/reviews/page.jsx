import React from "react";
import Link from "next/link";
import Heading from "../components/Heading";
import { getReviews } from "@/lib/review";

const ReviewsPage = async () => {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <p>Here we'll list all the reviews</p>
      <ul className="flex flex-wrap flex-row gap-3">
        {reviews.map((review) => (
          <li
            key={review.slug}
            className="border w-80 bg-white mb-2 rounded shadow hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t mb-2"
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
