import React from "react";
import Heading from "../components/Heading";

export const metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <>
      <Heading>About</Heading>
      <p className="text-xl">
        This app was created following the Udemy course{" "}
        <span className="font-bold italic">Next.js by Example </span>by{" "}
        <span className="font-extrabold">Mirko Nasato</span>.
      </p>
      <p className="text-xl">Thank you, Mirko for this excellent course!</p>
    </>
  );
};

export default AboutPage;
