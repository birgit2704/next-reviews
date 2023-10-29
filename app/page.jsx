import React from "react";
import Link from "next/link";
import Heading from "./components/Heading";
import { getFeaturedReview } from "@/lib/review";

const Homepage = async () => {
  const { title, image, slug } = await getFeaturedReview();

  return (
    <>
      <Heading className="font-bold text-2xl pb-3">Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="border w-80 sm:w-full bg-white mb-2 rounded shadow hover:shadow-xl">
        <Link href={`/reviews/${slug}`} className="flex flex-col sm:flex-row">
          <img
            src={image}
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="text-center py-2 font-orbitron font-semibold sm:px-2">
            {title}
          </h2>
        </Link>
      </div>
    </>
  );
};

export default Homepage;
