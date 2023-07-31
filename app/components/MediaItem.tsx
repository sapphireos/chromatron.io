export const MediaItem = ({
  title = "",
  children = <></>,
  icon = "lightbulb-o",
}) => (
  <li className="media">
    <div className="media-left ">
      <i className={`fa fa-${icon} fa-3x text-gray-300 text-center w-[72px]`} />
    </div>
    <div className="media-body">
      <h3 className="media-heading mb-8">
        {title}
      </h3>
      {children}
    </div>
  </li>
);
