import type { ReactNode } from "react";

export default function ListItem({ children }: { children: ReactNode }) {
  return <li className="mb-4">{children}</li>;
}
