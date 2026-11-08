import Link from "next/link";
import {
  serviceMaintenanceNote,
  serviceProposalNote,
  services,
  type ServiceContent,
} from "@/config/services";

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function ServiceDetail({ service }: { service: ServiceContent }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
      <nav aria-label="Serviços">
        <ul className="flex flex-wrap gap-2">
          {services.map(({ route, label }) => (
            <li key={route}>
              <Link
                aria-current={route === service.route ? "page" : undefined}
                className="inline-flex rounded-full border border-border px-4 py-2 text-sm text-content hover:bg-surface aria-[current=page]:border-content aria-[current=page]:bg-content aria-[current=page]:font-semibold aria-[current=page]:text-canvas"
                href={route}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid gap-8 py-10 sm:py-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {service.label}
            </h1>
            <p className="mt-4 text-lg leading-8 text-content-muted">
              {service.summary}
            </p>
          </div>

          <section aria-labelledby="service-audience">
            <h2 className="text-xl font-semibold" id="service-audience">
              Ideal para
            </h2>
            <p className="mt-2 leading-7 text-content-muted">
              {service.audience}
            </p>
          </section>

          <section aria-labelledby="service-scope">
            <h2 className="text-xl font-semibold" id="service-scope">
              O que está no escopo base
            </h2>
            <ul className="mt-3 divide-y divide-border border-y border-border">
              {service.baseScope.map((item) => (
                <li className="py-3 leading-7 text-content-muted" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            {service.scopeNote && (
              <p className="mt-3 leading-7 text-content-muted">
                {service.scopeNote}
              </p>
            )}
          </section>

          <section aria-labelledby="service-customization">
            <h2 className="text-xl font-semibold" id="service-customization">
              Precisa de algo a mais?
            </h2>
            <p className="mt-2 leading-7 text-content-muted">
              {serviceProposalNote}
            </p>
          </section>
        </div>

        <section
          aria-labelledby="service-price"
          className="rounded-xl border border-border bg-surface p-5 sm:p-6"
        >
          <h2 className="text-base font-semibold" id="service-price">
            A partir de
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight">
            {brl.format(service.startingPriceInCentavos / 100)}
          </p>

          <div className="mt-5 border-t border-border pt-5 text-sm leading-6 text-content-muted">
            <p className="font-semibold text-content">
              Manutenção opcional de{" "}
              {brl.format(service.monthlyMaintenanceInCentavos / 100)} por mês
            </p>
            <p className="mt-2">{serviceMaintenanceNote}</p>
          </div>

          <a
            className="mt-5 inline-flex w-full justify-center rounded-sm border border-content bg-content px-4 py-3 text-center text-sm font-medium text-canvas hover:bg-content-muted"
            href={service.contact.href}
          >
            {service.contact.label}
          </a>
        </section>
      </div>
    </div>
  );
}
