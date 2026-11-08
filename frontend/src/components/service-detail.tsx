import Link from "next/link";
import {
  serviceMaintenanceNote,
  serviceProposalNote,
  services,
  type ServiceContent,
} from "@/config/services";
import { formatBrl } from "@/lib/format-brl";

export function ServiceDetail({ service }: { service: ServiceContent }) {
  return (
    <div className="site-container py-6 sm:py-8">
      <nav aria-label="Serviços">
        <ul className="flex flex-wrap gap-2">
          {services.map(({ route, label }) => (
            <li key={route}>
              <Link
                aria-current={route === service.route ? "page" : undefined}
                className="inline-flex min-h-11 items-center rounded-control border border-border-strong px-4 text-nav text-content hover:bg-surface aria-[current=page]:border-inverse aria-[current=page]:bg-inverse aria-[current=page]:text-on-inverse"
                href={route}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid gap-8 py-section lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-12">
        <div className="space-y-8">
          <div>
            <h1 className="max-w-[18ch] font-display text-display-lg">
              {service.label}
            </h1>
            <p className="mt-4 max-w-[38ch] text-lede text-content-muted lg:mt-6">
              {service.summary}
            </p>
          </div>

          <section aria-labelledby="service-audience">
            <h2
              className="max-w-[18ch] font-display text-title"
              id="service-audience"
            >
              Ideal para
            </h2>
            <p className="mt-2 text-content-muted">{service.audience}</p>
          </section>

          <section aria-labelledby="service-scope">
            <h2
              className="max-w-[18ch] font-display text-title"
              id="service-scope"
            >
              O que está no escopo base
            </h2>
            <ul className="mt-3 divide-y divide-rule border-y border-rule">
              {service.baseScope.map((item) => (
                <li className="py-3 text-content-muted" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            {service.scopeNote && (
              <p className="mt-3 text-content-muted">{service.scopeNote}</p>
            )}
          </section>

          <section aria-labelledby="service-customization">
            <h2
              className="max-w-[18ch] font-display text-title"
              id="service-customization"
            >
              Precisa de algo a mais?
            </h2>
            <p className="mt-2 text-content-muted">{serviceProposalNote}</p>
          </section>
        </div>

        <section
          aria-labelledby="service-price"
          className="rounded-card border border-border bg-surface p-5 sm:p-6"
        >
          <h2 className="text-body-sm text-content-muted" id="service-price">
            A partir de
          </h2>
          <p className="mt-2 font-display text-price proportional-nums">
            {formatBrl(service.startingPriceInCentavos)}
          </p>

          <div className="mt-5 border-t border-rule pt-5 text-body-sm text-content-muted">
            <p className="font-semibold text-content">
              Manutenção opcional de{" "}
              {formatBrl(service.monthlyMaintenanceInCentavos)} por mês
            </p>
            <p className="mt-2">{serviceMaintenanceNote}</p>
          </div>

          <a
            className="mt-5 w-full justify-center text-center action-target border border-inverse bg-inverse px-4 text-on-inverse hover:bg-inverse-hover active:bg-inverse-active"
            href={service.contact.href}
          >
            {service.contact.label}
          </a>
        </section>
      </div>
    </div>
  );
}
