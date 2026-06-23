import { RiCheckLine } from "@remixicon/react";
import {
  Eyebrow,
  Section,
  SectionHeading,
  SectionLede,
} from "@/components/ui/section";

const pairs = [
  {
    pain: "Grupo de WhatsApp pra marcar horário",
    fix: "Tudo num calendário só",
  },
  {
    pain: "Planilha que ninguém mantém atualizada",
    fix: "Sempre atualizado, em tempo real",
  },
  {
    pain: "Quadra reservada em dobro no mesmo horário",
    fix: "Reserva sem conflito de horário",
  },
  {
    pain: "Ninguém sabe o que está livre agora",
    fix: "Ocupação visível pra equipe toda",
  },
];

export function ProblemSolution() {
  return (
    <Section id="problema" className="border-b border-border">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>O problema</Eyebrow>
        <SectionHeading>Do WhatsApp e da planilha para um lugar só.</SectionHeading>
        <SectionLede>
          Quando a agenda das quadras vive em vários lugares, o horário some, a
          reserva some — e sobra conflito. O OpenCourt troca isso por ordem.
        </SectionLede>
      </div>

      <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border">
        <div className="grid grid-cols-2 border-b border-border bg-muted/40 text-xs font-semibold tracking-wider uppercase">
          <div className="px-4 py-3 text-muted-foreground sm:px-8">Hoje</div>
          <div className="border-l border-border px-4 py-3 sm:px-8">
            Com o OpenCourt
          </div>
        </div>
        <div className="divide-y divide-border">
          {pairs.map(({ pain, fix }) => (
            <div key={pain} className="grid grid-cols-2 items-center">
              <div className="px-4 py-4 text-sm text-muted-foreground line-through decoration-muted-foreground/40 sm:px-8">
                {pain}
              </div>
              <div className="flex items-start gap-3 border-l border-border px-4 py-4 text-sm font-medium sm:px-8">
                <RiCheckLine className="mt-0.5 size-4 shrink-0 text-success" />
                <span>{fix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
