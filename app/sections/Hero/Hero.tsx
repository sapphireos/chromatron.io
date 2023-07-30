import logoWhite from "../../assets/logo-white.svg";

export function Hero() {
  return (
    <section className="hero inverse">
      <div className="container">
        <img height={80} width={54} src={logoWhite} alt="Chromatron" />
        <h1 className="h2">
          WiFi
          <br />
          Pixel
          <br />
          Controller
        </h1>
      </div>
    </section>
  );
}
