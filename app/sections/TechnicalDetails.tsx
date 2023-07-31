import HwDimensSide from "~/assets/HwDimensSide";
import HwDimensTop from "~/assets/HwDimensTop";
import FeatureList from "~/components/FeatureList";
import ListItem from "~/components/ListItem";

export const TechnicalDetails = () => (
  <section className="technical-details">
    <div className="container">
      <h1 className="h2">Technical Specs</h1>

      <FeatureList title="I/O Processor">
        <ul className="list-unstyled">
          <ListItem>Atmel AVR XMega128A4U</ListItem>
          <ListItem>32 MHz</ListItem>
          <ListItem>8K SRAM</ListItem>
          <ListItem>128K Flash</ListItem>
        </ul>
        <p>
          Runs the real time OS, handles raw pixel data output, USB, auxiliary
          IO, and the user file system.
        </p>
      </FeatureList>

      <FeatureList title="WiFi/Graphics processor">
        <ul className="list-unstyled">
          <ListItem>Espressif ESP8266</ListItem>
          <ListItem>160 MHz</ListItem>
          <ListItem>64K RAM</ListItem>
        </ul>
        <p>
          Handles WiFi communications, scripting engine VM, pixel faders, and
          HSV to RGB colorspace conversion. Connected to the real time processor
          via 4 MHz UART bridge.
        </p>
      </FeatureList>

      <FeatureList title="I/O">
        <ul className="list-unstyled">
          <ListItem>4x PWM outputs, 3 amps each</ListItem>
          <ListItem>
            1x Pixel clock + data output with built in level shifters,
            multiplexed with 2 of the PWM channels
          </ListItem>
          <ListItem>2x power and ground connections</ListItem>
          <ListItem>Micro USB port</ListItem>
          <ListItem>2x expansion IO headers for future use</ListItem>
        </ul>
      </FeatureList>

      <FeatureList title="Dimensions">
        <ul className="list-unstyled">
          <ListItem>
            1.25 x 2 inches (the USB overhangs by another 0.1 inches or so)
          </ListItem>
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
                loading="lazy"
                style={{ margin: 1em 0 }}
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
                loading="lazy"
                style={{ margin: 1em 0 }}
              /> */}
            <HwDimensSide className="img-responsive" />
          </div>
        </div>
      </FeatureList>
    </div>
  </section>
);
