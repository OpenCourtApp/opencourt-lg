"use client";

import {
  Activity,
  CalendarDays,
  CalendarPlus,
  LandPlot,
  Mail,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion, type Variants } from "motion/react";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import {
  bounce,
  pop,
  pulse,
  send,
  tilt,
  wiggle,
} from "@/components/ui/icon-animations";
import {
  Eyebrow,
  Section,
  SectionHeading,
  SectionLede,
} from "@/components/ui/section";

type Feature = {
  icon: LucideIcon;
  anim: Variants;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: Activity,
    anim: pulse,
    title: "Painel ao vivo",
    desc: "Veja quem está em quadra agora e a ocupação do dia, em tempo real.",
  },
  {
    icon: CalendarDays,
    anim: tilt,
    title: "Calendário semanal",
    desc: "Todas as reservas das suas quadras numa visão só.",
  },
  {
    icon: CalendarPlus,
    anim: pop,
    title: "Reserva em segundos",
    desc: "Escolha a quadra, o dia e o horário — pronto.",
  },
  {
    icon: LandPlot,
    anim: bounce,
    title: "Gestão de quadras",
    desc: "Cadastre, renomeie e organize todos os seus espaços esportivos.",
  },
  {
    icon: Users,
    anim: wiggle,
    title: "Equipe com permissões",
    desc: "Gestor, Professor e Representante, cada um no seu papel.",
  },
  {
    icon: Mail,
    anim: send,
    title: "Avisos por email",
    desc: "Notificação a cada nova reserva ou alteração.",
  },
];

export function Features() {
  return (
    <Section id="recursos">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Recursos</Eyebrow>
        <SectionHeading>
          Tudo que escolas e clubes precisam pra gerir as quadras.
        </SectionHeading>
        <SectionLede>
          Do agendamento do dia a dia ao controle de quem pode o quê.
        </SectionLede>
      </div>

      {/* Single block with internal dividers; the animated glow rides only the
          outer ring (p-px), the opaque inner grid covers everything else. */}
      <div className="glow-border mt-12 rounded-2xl p-px">
        <div className="relative z-10 grid gap-px overflow-hidden rounded-[13px] bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial="rest"
              whileHover="hover"
              className="bg-card p-6"
            >
              <div className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background">
                <AnimatedIcon icon={f.icon} variants={f.anim} className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
