import hwDiagramVertical from "./hw-diagram-vert.png";
import hwDiagramHorizontal from "./hw-diagram-horiz.png";

export function Hardware() {
  const alt =
    "A PCB diagram of a Chromatron hardware prototype illustrating the Wi-Fi graphics and script processor, the realtime I/O processor, a micro-USB port, and screw terminals for power and LED connections.";

  const imgStyle = {
    margin: "0 auto",
    padding: "1em 0",
  };
  return (
    <section className="hardware tertiary">
      <div className="container">
        <h1 className="h2">Hardware</h1>
        <p className="text-center">
          <img
            src={hwDiagramVertical}
            alt={alt}
            className="img-responsive visible-xs"
            loading="lazy"
            style={imgStyle}
          />
          <img
            src={hwDiagramHorizontal}
            alt={alt}
            className="img-responsive hidden-xs"
            loading="lazy"
            style={imgStyle}
          />
        </p>
      </div>
    </section>
  );
}