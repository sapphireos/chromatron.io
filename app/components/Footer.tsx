import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

import { brand } from "~/utils";

export function Footer() {
  const [copyrightYear, setCopyrightYear] = useState(2023);

  useEffect(() => {
    const year = new Date().getFullYear();
    setCopyrightYear(year);
  }, []);

  return (
    <footer className="main-footer primary">
      <div className="container">
        <p>
          Copyright &copy;{" "}
          <span className="copyright-year">{copyrightYear}</span>{" "}
          {brand.parentCompanyLegal} {"// "}
          <Link to="/privacy">Privacy Policy</Link>
        </p>
        <ul className="list-inline">
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
