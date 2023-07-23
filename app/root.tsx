import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useEffect } from "react";

export const links: LinksFunction = () => [
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
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  useEffect(() => {
    try {
      window.Typekit.load({ async: !0 });
    } catch (a) {}
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta property="og:url" content="http://chromatron.io/" />
        <meta
          property="og:title"
          content="WiFi Pixel Control with Chromatron"
        />
        <meta
          property="og:description"
          content="Chromatron is an open source pixel controller designed to make LED pixel projects easy and fun."
        />
        <meta
          property="og:image"
          content="images/jeremy-coffee-prototyping.jpg"
        />
        <meta name="msapplication-TileColor" content="#49ffa6" />
        <meta
          name="msapplication-TileImage"
          content="favicons/mstile-144x144.png"
        />
        <meta
          name="msapplication-config"
          content="favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
        <Meta />
        <Links />

        {/* legacy chromatron.io v1 scripts */}
        {/* <script src="https://use.fontawesome.com/dee7484932.js"></script> */}
        {/* <script src="scripts/vendor/modernizr.js"></script> */}
        <script src="https://use.typekit.net/pww1pws.js"></script>
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
