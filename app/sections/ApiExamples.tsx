import Code from "~/components/CodeBlock";

export function ApiExamples() {
  return (
    <section className="api-examples">
      <div className="container px-4 tablet:px-4">
        <h1 className="h2">API Examples</h1>
        <p className="lead">
          Discover, configure, and control devices over WiFi with our Python
          library and Command Line Interface tools:
        </p>
        <div className="md:flex md:flex-row md:justify-stretch md:space-x-8">
          <div className="md:basis-1/2 mb-10">
            <h3>Python</h3>
            <Code
              className="h-full w-full"
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
          <div className="md:basis-1/2 mb-10">
            <h3>Command Line</h3>
            <Code
              className="h-full w-full"
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
