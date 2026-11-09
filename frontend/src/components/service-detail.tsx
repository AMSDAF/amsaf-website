import Link from "next/link";
import { ActionLink } from "@/components/action-link";
import {
  serviceMaintenanceNote,
  serviceProposalNote,
  services,
  type ServiceContent,
} from "@/config/services";
import { formatBrl } from "@/lib/format-brl";

export function ServiceDetail({ service }: { service: ServiceContent }) {
  return (
    <div className="site-container pt-6 sm:pt-8">
      <nav aria-label="Serviços">
        <ul className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap" role="list">
          {services.map(({ route, label }) => (
            <li key={route}>
              <Link
                aria-current={route === service.route ? "page" : undefined}
                className="flex min-h-11 items-center justify-center rounded-control border-b-2 border-transparent px-3 py-2 text-center text-nav text-content-muted transition-[color,background-color,border-color] duration-150 ease-[ease] hover:bg-surface hover:text-content active:bg-surface active:text-content aria-[current=page]:border-accent aria-[current=page]:bg-surface aria-[current=page]:text-content sm:px-4"
                href={route}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 grid gap-10 pb-section lg:mt-14 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-14">
        <div className="space-y-10 lg:space-y-14">
          <div>
            <p className="mb-3 font-mono text-label wrap-anywhere text-accent-text">
              {service.route}
            </p>
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
            <p className="mt-3 text-content-muted">{service.audience}</p>
          </section>

          <section aria-labelledby="service-scope">
            <h2
              className="max-w-[18ch] font-display text-title"
              id="service-scope"
            >
              O que está no escopo base
            </h2>
            <ul
              className="mt-4 divide-y divide-rule border-y border-rule"
              role="list"
            >
              {service.baseScope.map((item, index) => (
                <li className="flex items-baseline gap-3 py-3" key={item}>
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-mono text-label text-content-subtle"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
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
            <p className="mt-3 text-content-muted">{serviceProposalNote}</p>
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

          <div className="mt-5 border-t border-dashed border-rule pt-5 text-body-sm text-content-muted">
            <p className="font-semibold text-content">
              Manutenção opcional de{" "}
              {formatBrl(service.monthlyMaintenanceInCentavos)} por mês
            </p>
            <p className="mt-2">{serviceMaintenanceNote}</p>
          </div>

          <div className="mt-8 grid">
            <ActionLink {...service.contact} variant="contact" />
          </div>
        </section>
      </div>
    </div>
  );
}
