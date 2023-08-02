// section.intro {
//   background-image: url('../images/photo-c-coil.jpg');
//   background-repeat: no-repeat;
//   background-position: center bottom;
//   // background-attachment: fixed;
//   background-size: 80%;
//   padding-bottom: 40%;

//   @media (min-width: $screen-sm) {
//     background-position: 60vw center;
//     background-size: contain;
//     padding-bottom: 50px;
//   }
// }

export const Intro = () => (
  <section className="bg-intro pb-[300px] md:pb-10 bg-no-repeat bg-middle md:bg-[60vw_bottom] bg-bottom">
    <div className="container px-4 tablet:px-4">
      <div className="md:w-[70%]">
        <h1 className="h2">LED Project Enabler</h1>
        <p className="lead">
          Chromatron is an open source pixel controller designed to make LED
          pixel projects easy and&nbsp;fun.
        </p>
      </div>

    </div>
  </section>
);
