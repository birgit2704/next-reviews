import React from "react";
import Link from "next/link";
import Heading from "./components/Heading";
import { getReviews } from "@/lib/review";
import Image from "next/image";

const Homepage = async () => {
  const { reviews } = await getReviews(3);

  return (
    <>
      <Heading className="font-bold text-2xl pb-3">Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <ul className="flex flex-col gap-3">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="border w-80 sm:w-full bg-white mb-2 rounded shadow hover:shadow-xl"
          >
            <Link
              href={`/reviews/${review.slug}`}
              className="flex flex-col sm:flex-row"
            >
              <Image
                src={review.image}
                alt=""
                width="320"
                height="180"
                priority={index === 0}
                className="rounded-t sm:rounded-l sm:rounded-r-none"
              />
              <div className="px-2 py-1 text-center sm:text-left">
                <h2 className="font-orbitron font-semibold">{review.title}</h2>
                <p className="hidden pt-2 sm:block">{review.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Homepage;
