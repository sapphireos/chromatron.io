import type { ReactNode } from "react";
import Divider from "~/sections/Divider";

export default function FeatureList({
  title = "",
  children,
  ...props
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="row" {...props}>
        <div className="col-xs-12 col-sm-4 col-md-3">
          <h3>{title}</h3>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-7">{children}</div>
      </div>
      <Divider />
    </>
  );
}
