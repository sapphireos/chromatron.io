import type { V2_MetaFunction } from "@remix-run/node";

import { Intro } from "../pages/Intro";
// import { Kickstarter } from "../pages/Kickstarter";
import { TechnicalDetails } from "../pages/TechnicalDetails";
import { OpenSource } from "../pages/OpenSource";
import { AboutUs } from "../pages/AboutUs";
import { ApiExamples } from "../pages/ApiExamples";
import { Features } from "../pages/Features";
import { CustomScripts } from "../pages/CustomScripts";
import { Hardware } from "../pages/Hardware";
import { KickstarterVideo } from "../pages/KickstarterVideo";
import { Hero } from "../pages/Hero";
import Template from "~/components/Template";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Chromatron — WiFi Pixel Controller" },
    {
      name: "description",
      content:
        "Chromatron is an open source WiFi enabled pixel controller designed to make LED pixel projects easy and fun.",
    },
  ];
};

export default function Index() {
  return (
    <Template>
      <Hero />
      <Intro />
      <Features />
      {/* <Kickstarter /> */}
      <ApiExamples />
      <CustomScripts />
      <Hardware />
      <KickstarterVideo />
      <TechnicalDetails />
      <AboutUs />
      <OpenSource />
    </Template>
  );
}
