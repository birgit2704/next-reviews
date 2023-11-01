import React from "react";
import Heading from "./components/Heading";

const notFound = () => {
  return (
    <>
      <Heading>Not Found</Heading>
      <p>Oops, the page you requested only exists in a parallel universe</p>
    </>
  );
};

export default notFound;
