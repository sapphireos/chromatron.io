import osiLogoOutline from "./osi-logo-outline.svg";
import oshwLogoOutline from "./oshw-logo-outline.svg";

export function OpenSource() {
  return (
    <section className="open-source secondary">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <h1 className="h2">100% Open Source</h1>
            <p className="lead">
              All software and hardware will be released under OSI compatible
              licenses once the project hits the funding&nbsp;goal.
            </p>
          </div>
          <div className="col-xs-6 col-sm-2 text-center">
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
          <div className="col-xs-6 col-sm-2 text-center">
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
    </section>
  );
}
