import logoWhite from "../../assets/logo-white.svg";

// section.hero {
//   background-image: url('../images/jeremy-coffee-prototyping.jpg');
//   background-position: center center;
//   background-size: cover;

//   padding: 100px 0;

//   h1, .h1,
//   h2, .h2,
//   h3, .h3,
//   h4, .h4 { margin-bottom: 1em; }

//   @media (min-width: $screen-md-min) {
//     .mc-field-group input { width: 320px; }
//   }
// }

export function Hero() {
  return (
    <section
      className={`hero inverse bg-hero bg-center bg-cover py-[100px] px-0`}
    >
      <div className="container">
        <img height={80} width={54} src={logoWhite} alt="Chromatron" />
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
