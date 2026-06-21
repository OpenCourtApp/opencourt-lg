import { RiCheckLine, RiCloseLine } from "@remixicon/react";
import {
  Eyebrow,
  Section,
  SectionHeading,
  SectionLede,
} from "@/components/ui/section";

const before = [
  "Grupo de WhatsApp pra marcar horário",
  "Planilha que ninguém mantém atualizada",
  "Quadra reservada em dobro no mesmo horário",
  "Ninguém sabe o que está livre agora",
];

const after = [
  "Tudo num calendário só, sempre atualizado",
  "Reserva em segundos, sem conflito",
  "Ocupação da escola visível em tempo real",
  "Cada professor com o seu acesso",
];

export function ProblemSolution() {
  return (
    <Section className="border-b border-border">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>O problema</Eyebrow>
        <SectionHeading>
          WhatsApp e planilha não dão conta das suas quadras.
        </SectionHeading>
        <SectionLede>
          Quando a agenda vive em vários lugares, o horário some, a reserva some
          — e sobra conflito. O OpenCourt junta tudo num lugar só.
        </SectionLede>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="text-sm font-semibold text-muted-foreground">Hoje</p>
          <ul className="mt-4 space-y-3">
            {before.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <RiCloseLine className="mt-0.5 size-4 shrink-0 text-destructive" />
                <span className="text-muted-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-foreground/15 bg-card p-6">
          <p className="text-sm font-semibold">Com o OpenCourt</p>
          <ul className="mt-4 space-y-3">
            {after.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <RiCheckLine className="mt-0.5 size-4 shrink-0 text-success" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
