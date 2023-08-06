export const MediaItem = ({
  title = "",
  children = <></>,
  icon = "lightbulb-o",
}) => (
  <li className="media flex mb-2 space-x-4">
    <div className="media-left w-[72px]">
      <span className={`fa fa-${icon} fa-3x text-gray-300 text-center w-[72px]`} />
    </div>
    <div className="media-body">
      <h3 className="media-heading mb-1">
        {title}
      </h3>
      {children}
    </div>
  </li>
);
