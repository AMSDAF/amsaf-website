import type { Metadata } from "next";
import { ServiceDetail } from "@/components/service-detail";
import { commercialWebsitesService } from "@/config/services";

export const metadata: Metadata = {
  title: `${commercialWebsitesService.label} | AMSAF`,
  description: commercialWebsitesService.summary,
};

export default function CommercialWebsitesPage() {
  return <ServiceDetail service={commercialWebsitesService} />;
}
