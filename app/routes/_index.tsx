import { type V2_MetaFunction } from "@remix-run/node";

import Template from "~/components/Template";

import { Intro } from "../sections/Intro";
import { TechnicalDetails } from "../sections/TechnicalDetails";
import { OpenSource } from "../sections/OpenSource/OpenSource";
import { AboutUs } from "../sections/AboutUs";
// import { ApiExamples } from "../sections/ApiExamples";
import { Features } from "../sections/Features";
// import { CustomScripts } from "../sections/CustomScripts";
import { Hardware } from "../sections/Hardware/Hardware";
import { KickstarterVideo } from "../sections/KickstarterVideo";
import { Hero } from "../sections/Hero/Hero";

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
      {/* <ApiExamples /> */}
      {/* <CustomScripts /> */}
      <Hardware />
      <KickstarterVideo />
      <TechnicalDetails />
      <AboutUs />
      <OpenSource />
    </Template>
  );
}
