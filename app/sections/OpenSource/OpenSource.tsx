import osiLogoOutline from "./osi-logo-outline.svg";
import oshwLogoOutline from "./oshw-logo-outline.svg";

export function OpenSource() {
  return (
    <section className="open-source secondary">
      <div className="container px-4 md:px-4">
        <div className="flex flex-col md:flex-row md:space-x-4 justify-between items-center">
          <div className="md:basis-3/4">
            <h1 className="h2">100% Open Source</h1>
            <p className="lead">
              All software and hardware will be released under OSI compatible
              licenses once the project hits the funding goal.
            </p>
          </div>
          <div className="flex space-x-4 justify-between items-center">
            <div className="basis-1/2 text-center">
              <img
                height={180}
                width={172}
                className="img-responsive mx-auto"
                src={osiLogoOutline}
                alt="Open Source Initiative logo"
                loading="lazy"
              />
              <h4>
                Open Source
                <br />
                Initiative
              </h4>
            </div>
            <div className="basis-1/2 text-center">
              <img
                height={180}
                width={172}
                className="img-responsive mx-auto"
                src={oshwLogoOutline}
                alt="Open Source Hardware logo"
                loading="lazy"
              />
              <h4>
                Open Source
                <br />
                Hardware
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
