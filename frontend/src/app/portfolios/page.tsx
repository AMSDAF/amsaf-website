import type { Metadata } from "next";
import { ServiceDetail } from "@/components/service-detail";
import { portfoliosService } from "@/config/services";

export const metadata: Metadata = {
  title: `${portfoliosService.label} | AMSAF`,
  description: portfoliosService.summary,
};

export default function PortfoliosPage() {
  return <ServiceDetail service={portfoliosService} />;
}
