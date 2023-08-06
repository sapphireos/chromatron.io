import type { ReactNode } from "react";

export default function FeatureList({
  title = "",
  children,
  ...props
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="md:flex md:flex-row pt-10 first:pt-0" {...props}>
      <div className="md:basis-1/4 flex-none">
        <h3>{title}</h3>
      </div>
      <div className="md:basis-3/4">{children}</div>
    </div>
  );
}
