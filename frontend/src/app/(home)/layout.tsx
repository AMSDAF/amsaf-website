import type { ReactNode } from "react";
import { CommercialLayout } from "../public-layouts";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <CommercialLayout scaffold>{children}</CommercialLayout>;
}
