import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header
      style={{
        paddingTop: "3rem",
      }}
    >
      <div className="container">
        <h1 className="h4">
          <Link to="/">
            <i className="fa fa-long-arrow-left"></i> Back to Chromatron
          </Link>
        </h1>
      </div>
    </header>
  );
}
