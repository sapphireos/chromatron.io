import { Link, useRouteLoaderData } from "@remix-run/react";

const SocialBug = ({ id = '', href = '#', iconClass = 'fa-star' }) => (
  <li key={`social-link${id}`}>
    <a rel="me" href={href} className="text-black">
      <span className={`fa ${iconClass} fa-2x`} />
    </a>
  </li>
)

export function Footer() {
  const { brand } = useRouteLoaderData('root');

  return (
    <footer className="main-footer primary">
      <div className="container px-4 tablet:px-4">
        <p className="mb-4">
          Copyright &copy;{" "}
          <span className="copyright-year">2023</span>{" "}
          {brand?.parentCompanyLegal} {"// "}
          <Link to="/privacy">Privacy Policy</Link>
        </p>
        {brand?.social && Array.isArray(brand.social) && (
          <ul className="flex flex-row space-x-4">
            {brand.social.map(({ id, href, iconClass }) => (
              <SocialBug key={`social-bug-${id}`} id={id} href={href} iconClass={iconClass} />
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
