export function Features() {
  return (
    <section className="why-use tertiary">
      <div className="container">
        <h1 className="h2">Chromatron Features</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <ul className="media-list">
              <li className="media">
                <div className="media-left">
                  <i className="fa fa-lightbulb-o fa-3x" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">LED Pixel Drivers</h3>
                  <p>
                    Drive 300 pixels of a variety of types without additional
                    circuitry or firmware modifications. Chromatron currently
                    supports APA102, WS2811, WS2812, WS2801, SK6812, and analog
                    PWM pixel strips.
                  </p>
                </div>
              </li>
              <li className="media">
                <div className="media-left">
                  <i className="fa fa-sliders fa-3x" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Pixel Graphics Pipeline</h3>
                  <p>
                    Create high quality animation and fading effects with
                    per-pixel faders, robust dimming controls, and 16 bit
                    internal computations.
                  </p>
                </div>
              </li>
              <li className="media">
                <div className="media-left">
                  <i className="fa fa-wifi fa-3x" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">
                    Control &amp; program over WiFi
                  </h3>
                  <p>
                    Easily control and coordinate multiple devices wirelessly.
                  </p>
                </div>
              </li>
              <li className="media hidden">
                <div className="media-left">
                  <i className="fa fa-camera-retro fa-3x" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Real time pixel streaming</h3>
                  <p>
                    Already have a source of graphics content? FX script is an
                    entirely optional feature. <a href="#more">More...</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6">
            <ul className="media-list">
              <li className="media">
                <div className="media-left">
                  <i className="fa fa-bolt fa-3x" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">FX Scripting Engine</h3>
                  <p>
                    Chromatron's FX Script is a simple language designed
                    specifically for pixel graphics.
                  </p>
                </div>
              </li>
              <li className="media">
                <div className="media-left">
                  <i className="fa fa-terminal fa-3x" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">
                    Python &amp; Command Line APIs
                  </h3>
                  <p>
                    The Python library and CLI make it easy to integrate
                    Chromatron into other projects.
                  </p>
                </div>
              </li>
              <li className="media">
                <div className="media-left">
                  <i className="fa fa-gift fa-3x" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">And even more...</h3>
                  <p>
                    Real-time pixel streaming, simple hardware connections, and
                    much more.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
