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
import { json } from "@remix-run/node";

import { brand } from './utils'
import tailwind from "./tailwind.css";

export async function loader() {
  return json({ brand });
}

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: tailwind,
  },
  // {
  //   rel: "stylesheet",
  //   href: "/styles/main.css",
  // },
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
    href: "/images/jeremy-coffee-prototyping.jpg",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "preconnect",
    href: "https://www.google.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "preconnect",
    href: "https://use.typekit.net",
    crossOrigin: "anonymous",
  },
  {
    rel: "preconnect",
    href: "https://p.typekit.net",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://use.typekit.net/pww1pws.css",
  },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const meta: V2_MetaFunction = () => {
  return [
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
      content: "/images/jeremy-coffee-prototyping.jpg",
    },
    {
      name: "msapplication-TileImage",
      content: "/favicons/mstile-144x144.png",
    },
    {
      name: "msapplication-config",
      content: "/favicons/browserconfig.xml",
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
      content: "/images/jeremy-coffee-prototyping.jpg",
    },
  ];
};
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col h-screen justify-between">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
