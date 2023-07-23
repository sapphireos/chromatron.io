import type { V2_MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import CodeBlock from "~/components/CodeBlock";

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
                      Drive 300 pixels of a variety of types without additional
                      circuitry or firmware modifications. Chromatron currently
                      supports APA102, WS2811, WS2812, WS2801, SK6812, and
                      analog PWM pixel strips.
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
              <CodeBlock
                language="python"
                text={`from chromatron import *

# Discover devices in living room
group =
DeviceGroup('living_room')

# Load rainbow effect script
group.load_vm('rainbow.fx')

# Set master dimmer to 50%
group.dimmer = 0.5
                  `}
              />
            </div>
            <div className="col-xs-12 col-sm-6">
              <h3>Command Line</h3>
              <CodeBlock
                language="shell"
                text={`# Install Python library
pip install chromatron

# Discover devices in living room
chromatron --query living_room discover

# Load rainbow FX script to previous group
chromatron vm load rainbow.fx

# Set master dimmer to 50%
chromatron dimmer master 0.5`}
              />
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
              <CodeBlock
                language="python"
                text={`# this script generates a rolling rainbow pattern
# declare a global variable for current hue
current_hue = Number()
# init - runs once when script is loadeddef
init():
  # set pixels to full colors (maximum saturation)
  pixels.sat = 1.0

  # set to maximum brightness
  pixels.val = 1.0

# runs periodically, frame rate is configurabledef
loop():
  # increment the base hue so the rainbow pattern
  # shifts across the pixels
  current_hue += 0.005

  # declare a local variable
  a = Number()
  a = current_hue

  # loop over all pixels in array
  for i in pix_count():
    pixels[i].hue = a

    # shift color for next iteration
    a += 1.0 / pix_count()
                `}
              />
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
