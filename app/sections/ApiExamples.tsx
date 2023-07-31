import Code from "~/components/CodeBlock";

export function ApiExamples() {
  return (
    <section className="api-examples">
      <div className="container">
        <h1 className="h2">API Examples</h1>
        <p className="lead">
          Discover, configure, and control devices over WiFi with our Python
          library and Command Line Interface tools:
        </p>
        <div className="row">
          <div className="col-xs-12 col-sm-6 mb-10">
            <h3>Python</h3>
            <Code
              language="python"
              text={`from chromatron import *

# Discover devices in living room
group = DeviceGroup('living_room')

# Load rainbow effect script
group.load_vm('rainbow.fx')

# Set master dimmer to 50%
group.dimmer = 0.5`}
            />
          </div>
          <div className="col-xs-12 col-sm-6 mb-10">
            <h3>Command Line</h3>
            <Code
              language="bash"
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
  );
}
