import React from "react";
import Hero from "../Hero";
import Collection from "../Collection";
import Special from "../Special";
import Banner from "../Banner";
import Blogs from "../Blogs";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Collection />
      <Special />
      <Banner />
      <Blogs />

      <Footer />
    </>
  );
}
