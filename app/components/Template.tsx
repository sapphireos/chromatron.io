import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Template({
  header = false,
  children,
}: {
  header?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <>
      {header && <Header />}
      <main style={{ minHeight: "90vh" }}>{children}</main>
      <Footer />
    </>
  );
}
