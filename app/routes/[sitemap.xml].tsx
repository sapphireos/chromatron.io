const buildTime = new Date();

export const loader = () => {
  const content = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://chromatron.io/</loc>
    <lastmod>${buildTime}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://chromatron.io/privacy</loc>
    <lastmod>${buildTime}</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
    `;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
