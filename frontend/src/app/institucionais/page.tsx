import type { Metadata } from "next";
import { ServiceDetail } from "@/components/service-detail";
import { institutionalWebsitesService } from "@/config/services";

export const metadata: Metadata = {
  title: `${institutionalWebsitesService.label} | AMSAF`,
  description: institutionalWebsitesService.summary,
};

export default function InstitutionalWebsitesPage() {
  return <ServiceDetail service={institutionalWebsitesService} />;
}
