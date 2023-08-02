import hwDiagramVertical from "./hw-diagram-vert.png";
import hwDiagramHorizontal from "./hw-diagram-horiz.png";

export function Hardware() {
  const alt =
    "A PCB diagram of a Chromatron hardware prototype illustrating the Wi-Fi graphics and script processor, the realtime I/O processor, a micro-USB port, and screw terminals for power and LED connections.";

  return (
    <section className="hardware tertiary">
      <div className="container px-4 tablet:px-4">
        <h1 className="h2">Hardware</h1>
        <p className="text-center">
          <img
            src={hwDiagramVertical}
            alt={alt}
            className="block sm:hidden my-0 mx-auto py-10 text-center"
            loading="lazy"
          />
          <img
            src={hwDiagramHorizontal}
            alt={alt}
            className="hidden sm:block my-0 mx-auto py-10 text-center"
            loading="lazy"
          />
        </p>
      </div>
    </section>
  );
}
