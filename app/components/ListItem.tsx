import type { ReactNode } from "react";

export default function ListItem({ children }: { children: ReactNode }) {
  return <li style={{ marginBottom: "1em" }}>{children}</li>;
}
