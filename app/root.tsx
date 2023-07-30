import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useEffect } from "react";

import tailwind from "./styles/tailwind.css";

import logoWhite from "./assets/logo-white.svg";
import palette from "./styles/palette";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: tailwind,
  },
  {
    rel: "stylesheet",
    href: "/styles/main.css",
  },
  {
    rel: "stylesheet",
    href: "/styles/font-awesome-4.7.0/css/font-awesome.min.css",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicons/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/favicons/favicon-32x32.png",
    sizes: "32x32",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/favicons/favicon-16x16.png",
    sizes: "16x16",
  },
  // {
  //   rel: "manifest",
  //   href: "/favicons/manifest.json",
  // },
  {
    rel: "mask-icon",
    href: "/favicons/safari-pinned-tab.svg",
    color: "#49ffa6",
  },
  {
    rel: "shortcut icon",
    href: "/favicons/favicon.ico",
  },
  {
    rel: "preload",
    as: "image",
    href: logoWhite,
  },
  {
    rel: "preload",
    as: "image",
    href: "/images/jeremy-coffee-prototyping.jpg",
  },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const meta: V2_MetaFunction = () => {
  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    {
      property: "og:url",
      content: "https://chromatron.io/",
    },
    {
      property: "og:title",
      content: "WiFi Pixel Control with Chromatron",
    },
    {
      property: "og:description",
      content:
        "Chromatron is an open source pixel controller designed to make LED pixel projects easy and fun.",
    },
    {
      property: "og:image",
      content: "images/jeremy-coffee-prototyping.jpg",
    },
    {
      name: "msapplication-TileColor",
      content: palette.primary[500],
    },
    {
      name: "msapplication-TileImage",
      content: "favicons/mstile-144x144.png",
    },
    {
      name: "msapplication-config",
      content: "favicons/browserconfig.xml",
    },
    {
      name: "theme-color",
      content: palette.primary[500],
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@sapphireos",
    },
    {
      name: "twitter:title",
      content: "WiFi Pixel Control with Chromatron",
    },
    {
      name: "twitter:description",
      content:
        "Chromatron is an open source pixel controller designed to make LED pixel projects easy and fun.",
    },
    {
      name: "twitter:image",
      content: "images/jeremy-coffee-prototyping.jpg",
    },
  ];
};
export default function App() {
  useEffect(() => {
    try {
      window.Typekit.load({ async: !0 });
    } catch (a) {}
  }, []);
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script src="//use.typekit.net/pww1pws.js"></script>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
