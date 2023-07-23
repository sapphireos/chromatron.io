export function Footer() {
  return (
    <footer className="main-footer primary">
      <div className="container">
        <p>
          Copyright &copy;{" "}
          <span className="copyright-year">{new Date().getFullYear()}</span>{" "}
          Sapphire Open Systems, LLC //{" "}
          <a href="privacy.html">Privacy Policy</a>
        </p>
        <ul className="list-inline">
          <li>
            <a rel="me" href="https://github.com/sapphireos/">
              <i className="fa fa-github fa-2x" />
            </a>
          </li>
          <li>
            <a rel="me" href="https://www.facebook.com/sapphirechromatron/">
              <i className="fa fa-facebook-official fa-2x" />
            </a>
          </li>
          <li>
            <a rel="me" href="https://twitter.com/sapphireos">
              <i className="fa fa-twitter fa-2x" />
            </a>
          </li>
          <li>
            <a rel="me" href="https://www.youtube.com/user/SapphireOpenSystems">
              <i className="fa fa-youtube-play fa-2x" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
