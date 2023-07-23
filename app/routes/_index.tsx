import type { V2_MetaFunction } from "@remix-run/node";
import { useEffect } from "react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Chromatron — WiFi Pixel Controller" },
    {
      name: "description",
      content:
        "Chromatron is an open source WiFi enabled pixel controller designed to make LED pixel projects easy and fun.",
    },
  ];
};

export default function Index() {
  useEffect(() => {
    try {
      window.Typekit.load({ async: !0 });
    } catch (a) {}
  }, []);
  return (
    <div>
      {/* legacy chromatron.io v1 scripts */}
      {/* <script src="https://use.fontawesome.com/dee7484932.js"></script> */}
      {/* <script src="scripts/vendor/modernizr.js"></script> */}
      <script src="https://use.typekit.net/pww1pws.js"></script>

      <section className="hero inverse">
        <div className="container">
          <img
            height={80}
            width={54}
            src="images/logo-white.svg"
            alt="Chromatron"
          />
          <h1 className="h2">
            WiFi
            <br />
            Pixel
            <br />
            Controller
          </h1>
          {/* <div id="mc_embed_signup">
            <form
              action="//sapphireos.us2.list-manage.com/subscribe/post?u=4cc3e5c8a348c836b21e5cfbb&id=b0152474aa"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="form-inline validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <div id="mce-responses" className="form-group clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="mc-field-group form-group form-group-lg">
                  <label className="sr-only" htmlFor="mce-EMAIL">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email form-control"
                    placeholder="Email"
                    id="mce-EMAIL"
                  />
                </div>
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden
                >
                  <input
                    type="text"
                    name="b_4cc3e5c8a348c836b21e5cfbb_b0152474aa"
                    tabIndex={-1}
                  />
                </div>
                <input
                  type="submit"
                  defaultValue="Get Updates"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button btn btn-secondary btn-lg btn-block"
                />
              </div>
            </form>
          </div> */}
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8">
              <h1 className="h2">LED Project Enabler</h1>
              <p className="lead">
                Chromatron is an open source pixel controller designed to make
                LED pixel projects easy and&nbsp;fun.
              </p>
            </div>
          </div>
        </div>
      </section>
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
                      Drive 300 pixels of a
                      <a
                        href="#tooltip"
                        title="Chromatron currently supports APA102, WS2811, WS2812, WS2801, SK6812, and analog PWM pixel strips."
                        data-toggle="tooltip"
                      >
                        variety of types
                      </a>
                      without additional circuitry or firmware modifications.
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
                      Real-time pixel streaming, simple hardware connections,
                      and much more.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="goal hidden">
        <div className="container">
          <h1 className="h2">Goal</h1>
          <p>
            This Kickstarter is to raise money to build the first production run
            of Chromatron hardware. The majority of the timeline will be used
            for coordinating hardware production, building hardware test
            systems, creating documentation and tutorial content, and of course
            bug fixes for any issues that crop up.
          </p>
          <p>
            The project itself has been under heavy development since August
            2016, and most major technical aspects are very usable. The hardware
            itself has undergone five revisions, and over a dozen hand built
            examples are running 24/7.
          </p>
        </div>
      </section>
      <section className="api-examples">
        <div className="container">
          <h1 className="h2">API Examples</h1>
          <p className="lead">
            Discover, configure, and control devices over WiFi with our Python
            library and Command Line Interface tools:
          </p>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h3>Python</h3>
              <pre>
                {"              "}
                <code className="language-python">
                  {"\n"}from chromatron import *{"\n"}
                  {"\n"}# Discover devices in living room{"\n"}group =
                  DeviceGroup('living_room'){"\n"}
                  {"\n"}# Load rainbow effect script{"\n"}
                  group.load_vm('rainbow.fx'){"\n"}
                  {"\n"}# Set master dimmer to 50%{"\n"}group.dimmer = 0.5{"\n"}
                  {"              "}
                </code>
                {"\n"}
                {"            "}
              </pre>
            </div>
            <div className="col-xs-12 col-sm-6">
              <h3>Command Line</h3>
              <pre>
                {"              "}
                <code className="language-bash">
                  {"\n"}# Install Python library{"\n"}pip install chromatron
                  {"\n"}
                  {"\n"}# Discover devices in living room{"\n"}chromatron
                  --query living_room discover{"\n"}
                  {"\n"}# Load rainbow FX script to previous group{"\n"}
                  chromatron vm load rainbow.fx{"\n"}
                  {"\n"}# Set master dimmer to 50%{"\n"}chromatron dimmer master
                  0.5{"\n"}
                  {"              "}
                </code>
                {"\n"}
                {"            "}
              </pre>
            </div>
          </div>
        </div>
      </section>
      <section className="custom-scripts">
        <div className="container">
          <h1 className="h2">Live code with FX Script</h1>
          <p className="lead">
            FX Script is a hybrid language based on Python syntax running on a
            custom designed virtual machine that makes it easy to generate
            graphics directly on hardware. FX can compile and load in real-time
            to get instant visual feedback.
          </p>
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <pre>
                {"              "}
                <code className="language-python">
                  {"\n"}# this script generates a rolling rainbow pattern{"\n"}
                  {"\n"}# declare a global variable for current hue{"\n"}
                  current_hue = Number(){"\n"}
                  {"\n"}# init - runs once when script is loaded{"\n"}def
                  init():{"\n"}
                  {"    "}# set pixels to full colors (maximum saturation){"\n"}
                  {"    "}pixels.sat = 1.0{"\n"}
                  {"\n"}
                  {"    "}# set to maximum brightness{"\n"}
                  {"    "}pixels.val = 1.0{"\n"}
                  {"\n"}
                  {"\n"}# runs periodically, frame rate is configurable{"\n"}def
                  loop():{"\n"}
                  {"    "}# increment the base hue so the rainbow pattern{"\n"}
                  {"    "}# shifts across the pixels{"\n"}
                  {"    "}current_hue += 0.005{"\n"}
                  {"\n"}
                  {"    "}# declare a local variable{"\n"}
                  {"    "}a = Number(){"\n"}
                  {"    "}a = current_hue{"\n"}
                  {"\n"}
                  {"    "}# loop over all pixels in array{"\n"}
                  {"    "}for i in pix_count():{"\n"}
                  {"        "}pixels[i].hue = a{"\n"}
                  {"\n"}
                  {"        "}# shift color for next iteration{"\n"}
                  {"        "}a += 1.0 / pix_count()
                </code>
                {"\n"}
                {"            "}
              </pre>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="embed-responsive embed-responsive-9by16">
                <iframe
                  title="FX Script demo"
                  src="https://www.youtube-nocookie.com/embed/bv1z3aF-_1o?rel=0&showinfo=0"
                  // frameBorder={0}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hardware tertiary">
        <div className="container">
          <h1 className="h2">Hardware</h1>
          <p className="text-center">
            <img
              src="images/hw-diagram-vert.png"
              alt="Chromatron hardware prototype."
              className="img-responsive visible-xs"
            />
            <img
              src="images/hw-diagram-horiz.png"
              alt="Chromatron hardware prototype."
              className="img-responsive hidden-xs"
            />
          </p>
        </div>
      </section>
      <section className="video inverse">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="Chromatron Kickstarter video"
            src="https://www.youtube-nocookie.com/embed/TyCFVRvAzqU?rel=0&showinfo=0"
            // frameBorder={0}
            allowFullScreen
          />
        </div>
      </section>
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
                Runs the real time OS, handles raw pixel data output, USB,
                auxiliary IO, and the user file system.
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
                Handles WiFi communications, scripting engine VM, pixel faders,
                and HSV to RGB colorspace conversion. Connected to the real time
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
                  1.25 x 2 inches (the USB overhangs by another 0.1 inches or
                  so)
                </li>
              </ul>
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <img
                    className="img-responsive"
                    src="images/hw-dimens-top.png"
                    alt="side dimensions"
                  />
                </div>
                <div className="col-xs-12 col-sm-6">
                  <img
                    className="img-responsive"
                    src="images/hw-dimens-side.png"
                    alt="side dimensions"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us tertiary">
        <div className="container">
          <h1 className="h2">About Us</h1>
          <p className="lead">
            Sapphire Open Systems is an Austin, TX based startup whose mission
            is to enable hobbyists, makers, and professionals to connect
            anything to everything and promote open source as a better way to
            make&nbsp;electronics.
          </p>
        </div>
      </section>
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
                className="img-responsive"
                src="images/osi-logo-outline.svg"
                alt="Open Source Initiative logo"
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
                className="img-responsive"
                src="images/oshw-logo-outline.svg"
                alt="Open Source Hardware logo"
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
              <a
                rel="me"
                href="https://www.youtube.com/user/SapphireOpenSystems"
              >
                <i className="fa fa-youtube-play fa-2x" />
              </a>
            </li>
          </ul>
        </div>
      </footer>

      {/* legacy scripts from chromatrion.io v1 */}
      {/* <script src="scripts/vendor.js"></script> */}
      {/* <script src="scripts/plugins.js"></script> */}
      {/* <script src="scripts/main.js"></script> */}
    </div>
  );
}
