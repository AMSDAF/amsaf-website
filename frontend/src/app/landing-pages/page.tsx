import type { Metadata } from "next";
import { ServiceDetail } from "@/components/service-detail";
import { landingPagesService } from "@/config/services";

export const metadata: Metadata = {
  title: `${landingPagesService.label} | AMSAF`,
  description: landingPagesService.summary,
};

export default function LandingPagesPage() {
  return <ServiceDetail service={landingPagesService} />;
}
