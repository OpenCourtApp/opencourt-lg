import { RiArrowDownSLine } from "@remixicon/react";
import {
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/ui/section";

const faqs = [
  {
    q: "Precisa instalar alguma coisa?",
    a: "Não. O OpenCourt roda no navegador. Você cria a escola e já começa a usar — sem download, sem instalação.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. A interface se adapta ao celular, então a equipe pode consultar a agenda e reservar de onde estiver.",
  },
  {
    q: "Quantas quadras posso cadastrar?",
    a: "Quantas a escola tiver. Você cadastra cada quadra e organiza todas em um só lugar.",
  },
  {
    q: "Como minha equipe entra?",
    a: "Você envia um convite por link e já escolhe a função da pessoa — Gestor, Professor ou Representante.",
  },
  {
    q: "Posso gerenciar mais de uma escola?",
    a: "Sim. É possível alternar entre escolas, ideal para redes e coordenações que cuidam de mais de uma unidade.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Cada escola é um espaço isolado, com proteção no nível do banco de dados: uma escola nunca acessa os dados de outra.",
  },
];

export function Faq() {
  return (
    <Section id="faq" className="border-b border-border">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Perguntas frequentes</Eyebrow>
        <SectionHeading>Tudo que costumam perguntar.</SectionHeading>
      </div>

      <div className="mx-auto mt-12 max-w-2xl divide-y divide-border border-y border-border">
        {faqs.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-medium [&::-webkit-details-marker]:hidden">
              {f.q}
              <RiArrowDownSLine className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 max-w-prose text-sm text-muted-foreground text-pretty">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
