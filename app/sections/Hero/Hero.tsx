import Logo from "~/assets/LogoWhite";

export function Hero() {
  return (
    <section
      className={`hero inverse bg-hero bg-center bg-cover py-[100px] px-0`}
    >
      <div className="container px-4 tablet:px-4 text-white">
        <Logo height={80} width={54} />
        <h1 className="h2 mb-5">
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
