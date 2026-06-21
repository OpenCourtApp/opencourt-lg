import { RiCheckLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { APP_URL } from "@/lib/site";
import {
  Eyebrow,
  Section,
  SectionHeading,
  SectionLede,
} from "@/components/ui/section";

const plans = [
  {
    name: "Grátis",
    price: "R$ 0",
    cadence: "para sempre",
    desc: "Para uma escola começar a se organizar hoje.",
    features: [
      "1 escola",
      "Quadras ilimitadas",
      "Painel ao vivo e calendário",
      "Convites para a equipe",
      "Login com Google",
    ],
    cta: "Começar grátis",
    href: "https://opencourtapp.vercel.app/register",
    variant: "secondary" as const,
    featured: false,
  },
  {
    name: "Escola",
    price: "Sob consulta",
    cadence: "por escola",
    desc: "Para redes e escolas que precisam de mais.",
    features: [
      "Tudo do plano Grátis",
      "Colaboradores ilimitados",
      "Múltiplas escolas",
      "Avisos por email",
      "Suporte prioritário",
    ],
    cta: "Falar com a gente",
    href: APP_URL,
    variant: "primary" as const,
    featured: true,
  },
];

export function Pricing() {
  return (
    <Section id="planos" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Planos</Eyebrow>
        <SectionHeading>Comece de graça. Cresça quando precisar.</SectionHeading>
        <SectionLede>
          Sem cartão para testar. Em beta, o plano Grátis cobre tudo que a
          maioria das escolas precisa.
        </SectionLede>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
        {plans.map((p) => (
          <div
            key={p.name}
            className={cn(
              "flex flex-col rounded-xl border bg-card p-6",
              p.featured ? "border-foreground/20 ring-1 ring-foreground/10" : "border-border",
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{p.name}</h3>
              {p.featured ? (
                <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                  Recomendado
                </span>
              ) : null}
            </div>
            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="text-3xl font-semibold tracking-tight">
                {p.price}
              </span>
              <span className="text-sm text-muted-foreground">{p.cadence}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <RiCheckLine className="mt-0.5 size-4 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button href={p.href} variant={p.variant} className="mt-6 w-full">
              {p.cta}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
