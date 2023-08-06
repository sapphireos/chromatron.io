import { MediaItem } from "~/components/MediaItem";

export function Features() {
  return (
    <section className="why-use tertiary">
      <div className="container px-4 tablet:px-4">
        <h1 className="h2">Chromatron Features</h1>
        <div className="md:flex md:space-x-4">
          <div className="flex-1">
            <ul className="media-list">
              <MediaItem icon="lightbulb-o" title="LED Pixel Drivers">
                <p>
                  Drive 300 pixels of a variety of types without additional
                  circuitry or firmware modifications. Chromatron currently
                  supports APA102, WS2811, WS2812, WS2801, SK6812, and analog
                  PWM pixel strips.
                </p>
              </MediaItem>
              <MediaItem icon="sliders" title="Pixel Graphics Pipeline">
                <p>
                  Create high quality animation and fading effects with
                  per-pixel faders, robust dimming controls, and 16 bit internal
                  computations.
                </p>
              </MediaItem>
              <MediaItem icon="wifi" title="Control & program over WiFi">
                <p>
                  Easily control and coordinate multiple devices wirelessly.
                </p>
              </MediaItem>
              {/* <MediaItem icon="camera-retro" title="Real time pixel streaming">
                <p>
                  Already have a source of graphics content? FX script is an
                  entirely optional feature.
                </p>
              </MediaItem> */}
            </ul>
          </div>
          <div className="flex-1">
            <ul className="media-list">
              <MediaItem icon="bolt" title="FX Scripting Engine">
                <p>
                  Chromatron's FX Script is a simple language designed
                  specifically for pixel graphics.
                </p>
              </MediaItem>
              <MediaItem icon="terminal" title="Python & Command Line APIs">
                <p>
                  The Python library and CLI make it easy to integrate
                  Chromatron into other projects.
                </p>
              </MediaItem>
              <MediaItem icon="gift" title="And even more...">
                <p>
                  Real-time pixel streaming, simple hardware connections, and
                  much more.
                </p>
              </MediaItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
