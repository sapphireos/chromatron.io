import palette from "../styles/palette";

export const MediaItem = ({
  title = "",
  children = <></>,
  icon = "lightbulb-o",
}) => (
  <li className="media">
    <div className="media-left">
      <i
        className={`fa fa-${icon} fa-3x`}
        style={{
          color: palette.gray[300],
          textAlign: "center",
          width: "72",
        }}
      />
    </div>
    <div className="media-body">
      <h3 className="media-heading" style={{ marginBottom: "0.2em" }}>
        {title}
      </h3>
      <p>{children}</p>
    </div>
  </li>
);
