import type { V2_MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import { Intro } from "../pages/Intro";
// import { Kickstarter } from "../pages/Kickstarter";
import { TechnicalDetails } from "../pages/TechnicalDetails";
import { Footer } from "../pages/Footer";
import { OpenSource } from "../pages/OpenSource";
import { AboutUs } from "../pages/AboutUs";
import { ApiExamples } from "../pages/ApiExamples";
import { Features } from "../pages/Features";
import { CustomScripts } from "../pages/CustomScripts";
import { Hardware } from "../pages/Hardware";
import { KickstarterVideo } from "../pages/KickstarterVideo";
import { Hero } from "../pages/Hero";

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
  useEffect(() => {
    try {
      window.Typekit.load({ async: !0 });
    } catch (a) {}
  }, []);

  return (
    <div>
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
      <Footer />

      {/* legacy scripts from chromatrion.io v1 */}
      {/* <script src="scripts/vendor.js"></script> */}
      {/* <script src="scripts/plugins.js"></script> */}
      {/* <script src="scripts/main.js"></script> */}
    </div>
  );
}
