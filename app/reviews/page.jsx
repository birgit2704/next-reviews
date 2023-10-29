import React from "react";
import Link from "next/link";
import Heading from "../components/Heading";
import { getReviews } from "@/lib/review";

const ReviewsPage = async () => {
  const reviews = await getReviews();
  console.log(reviews);

  return (
    <>
      <Heading>Reviews</Heading>
      <p>Here we'll list all the reviews</p>
      <ul className="flex flex-col gap-3">
        <li className="border w-80 bg-white mb-2 rounded shadow hover:shadow-xl">
          <Link href="/reviews/stardew-valley">
            <img
              src="/images/stardew-valley.jpg"
              alt=""
              width="320"
              height="180"
              className="rounded-t mb-2"
            />
            <h2 className="text-center pb-2 font-orbitron font-semibold">
              Stardew Valley
            </h2>
          </Link>
        </li>

        <li className="border w-80 bg-white mb-2 rounded shadow hover:shadow-xl">
          <Link href="/reviews/hollow-knight">
            <img
              src="/images/hollow-knight.jpg"
              alt=""
              width="320"
              height="180"
              className="rounded-t mb-2"
            />
            <h2 className="text-center pb-2 font-orbitron font-semibold">
              Hollow Knight
            </h2>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ReviewsPage;
