import HwDimensSide from "~/assets/HwDimensSide";
import HwDimensTop from "~/assets/HwDimensTop";

export const TechnicalDetails = () => (
  <section className="technical-details">
    <div className="container">
      <h1 className="h2">Technical Specs</h1>
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-3">
          <h3>I/O Processor</h3>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-7">
          <ul className="list-unstyled">
            <li>Atmel AVR XMega128A4U</li>
            <li>32 MHz</li>
            <li>8K SRAM</li>
            <li>128K Flash</li>
          </ul>
          <p>
            Runs the real time OS, handles raw pixel data output, USB, auxiliary
            IO, and the user file system.
          </p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-3">
          <h3>WiFi/Graphics processor</h3>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-7">
          <ul className="list-unstyled">
            <li>Espressif ESP8266</li>
            <li>160 MHz</li>
            <li>64K RAM</li>
          </ul>
          <p>
            Handles WiFi communications, scripting engine VM, pixel faders, and
            HSV to RGB colorspace conversion. Connected to the real time
            processor via 4 MHz UART bridge.
          </p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-3">
          <h3>I/O</h3>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-7">
          <ul className="list-unstyled">
            <li>4x PWM outputs, 3 amps each</li>
            <li>
              1x Pixel clock + data output with built in level shifters,
              multiplexed with 2 of the PWM channels
            </li>
            <li>2x power and ground connections</li>
            <li>Micro USB port</li>
            <li>2x expansion IO headers for future use</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-3">
          <h3>Dimensions</h3>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-7">
          <ul className="list-unstyled">
            <li>
              1.25 x 2 inches (the USB overhangs by another 0.1 inches or so)
            </li>
          </ul>
          <div className="row">
            <div
              className="col-xs-12 col-sm-6"
              style={{ paddingTop: "16px", paddingBottom: "16px" }}
            >
              {/* <img
                className="img-responsive"
                src="images/hw-dimens-top.png"
                alt="side dimensions"
              /> */}
              <HwDimensTop className="img-responsive" />
            </div>
            <div
              className="col-xs-12 col-sm-6"
              style={{ paddingTop: "16px", paddingBottom: "16px" }}
            >
              {/* <img
                className="img-responsive"
                src="images/hw-dimens-side.png"
                alt="side dimensions"
              /> */}
              <HwDimensSide className="img-responsive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
