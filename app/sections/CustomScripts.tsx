import Code from "~/components/CodeBlock";

export function CustomScripts() {
  return (
    <section className="custom-scripts">
      <div className="container">
        <h1 className="h2">Live code with FX Script</h1>
        <p className="lead">
          FX Script is a hybrid language based on Python syntax running on a
          custom designed virtual machine that makes it easy to generate
          graphics directly on hardware. FX can compile and load in real-time to
          get instant visual feedback.
        </p>
        <div className="row">
          <div className="col-xs-12 col-md-8 mb-10">
            <Code
              language="python"
              text={`# this script generates a rolling rainbow pattern

# declare a global variable for current hue
current_hue = Number()

# init - runs once when script is loaded
def init():
    # set pixels to full colors (maximum saturation)
    pixels.sat = 1.0

    # set to maximum brightness
    pixels.val = 1.0


# runs periodically, frame rate is configurable
def loop():
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
        a += 1.0 / pix_count()`}
            />
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="embed-responsive embed-responsive-9by16">
              <iframe
                title="FX Script demo"
                src="https://www.youtube-nocookie.com/embed/bv1z3aF-_1o?rel=0&showinfo=0"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
