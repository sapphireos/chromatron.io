import { Link } from "@remix-run/react";

import { brand } from "~/utils";

export function Footer() {
  return (
    <footer className="main-footer primary">
      <div className="container">
        <p className="mb-4">
          Copyright &copy;{" "}
          <span className="copyright-year">2023</span>{" "}
          {brand.parentCompanyLegal} {"// "}
          <Link to="/privacy">Privacy Policy</Link>
        </p>
        <ul className="flex flex-row space-x-4">
          {brand.social.map(({ id, href, iconClass }) => (
            <li key={`social-link${id}`}>
              <a rel="me" href={href}>
                <i className={`fa ${iconClass} fa-2x`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
