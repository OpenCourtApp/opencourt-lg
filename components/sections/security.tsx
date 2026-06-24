"use client";

import { Building2, KeyRound, Lock, type LucideIcon } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { raise, shake, spin } from "@/components/ui/icon-animations";
import {
  Eyebrow,
  Section,
  SectionHeading,
  SectionLede,
} from "@/components/ui/section";

type Item = {
  icon: LucideIcon;
  anim: Variants;
  title: string;
  desc: string;
};

const items: Item[] = [
  {
    icon: Building2,
    anim: raise,
    title: "Isolamento por organização",
    desc: "Proteção no nível do banco de dados: uma organização nunca enxerga os dados de outra.",
  },
  {
    icon: Lock,
    anim: shake,
    title: "Acesso por função",
    desc: "Cada pessoa vê e faz apenas o que o papel dela permite.",
  },
  {
    icon: KeyRound,
    anim: spin,
    title: "Login com Google",
    desc: "Entrada segura, sem mais uma senha pra gerenciar.",
  },
];

export function Security() {
  return (
    <Section className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Segurança & privacidade</Eyebrow>
        <SectionHeading>Cada organização, um espaço isolado.</SectionHeading>
        <SectionLede>
          Dados de escola pedem cuidado. Por isso o isolamento é garantido no
          nível mais profundo — o banco de dados — e não só na tela.
        </SectionLede>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {items.map((i) => (
          <motion.div
            key={i.title}
            initial="rest"
            whileHover="hover"
            className="rounded-xl border border-border bg-card p-6"
          >
            <AnimatedIcon icon={i.icon} variants={i.anim} className="size-6" />
            <h3 className="mt-4 font-semibold">{i.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{i.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
