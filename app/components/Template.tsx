import { Footer } from "~/pages/Footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main style={{ minHeight: "90vh" }}>{children}</main>
      <Footer />

      {/* legacy scripts from chromatrion.io v1 */}
      {/* <script src="scripts/vendor.js"></script> */}
      {/* <script src="scripts/plugins.js"></script> */}
      {/* <script src="scripts/main.js"></script> */}
    </>
  );
}
