import {
  Eyebrow,
  Section,
  SectionHeading,
  SectionLede,
} from "@/components/ui/section";

const steps = [
  {
    n: "01",
    title: "Crie sua escola",
    desc: "Entre com o Google ou email e crie o espaço da sua escola em um minuto.",
  },
  {
    n: "02",
    title: "Cadastre suas quadras",
    desc: "Adicione cada quadra e convide professores e representantes.",
  },
  {
    n: "03",
    title: "Comece a reservar",
    desc: "A equipe agenda os horários e todo mundo vê a agenda atualizada.",
  },
];

export function HowItWorks() {
  return (
    <Section id="como-funciona" className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Como funciona</Eyebrow>
        <SectionHeading>
          Da inscrição à primeira reserva, no mesmo dia.
        </SectionHeading>
        <SectionLede>
          Sem instalação e sem treinamento. Se você usa um calendário, já sabe
          usar o OpenCourt.
        </SectionLede>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="rounded-xl border border-border bg-card p-6"
          >
            <span className="text-sm font-semibold text-muted-foreground">
              {s.n}
            </span>
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
