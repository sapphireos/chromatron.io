import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header
      className="pt-16"
    >
      <div className="container px-4 tablet:px-4">
        <h1 className="h4">
          <Link to="/">
            <i className="fa fa-long-arrow-left"></i> Back to Chromatron
          </Link>
        </h1>
      </div>
    </header>
  );
}
