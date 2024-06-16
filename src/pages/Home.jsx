import React from "react";
import HomeLayouts from "../layouts/HomeLayouts";
import Hero from "../components/organisems/Hero";
import Product from "../components/molecules/Product";
import Chosee from "../components/organisems/Chosee";
import Help from "../components/molecules/Help";
import Popular from "../components/molecules/Popular";
import Blog from "../components/organisems/Blog";

export default function Home() {
  return (
    <>
      <HomeLayouts>
        <Hero
          title="Modern Interior"
          subtitle="Design Studio"
          description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
        />
        <Product />
        <Chosee />
        <Help />
        <Popular />
        <Blog />
      </HomeLayouts>
    </>
  );
}
