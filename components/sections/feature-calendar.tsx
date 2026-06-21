import Image from "next/image";
import { Shot } from "@/components/ui/shot";
import { FeatureSplit } from "@/components/ui/feature-split";

export function FeatureCalendar() {
  return (
    <FeatureSplit
      reverse
      className="border-b border-border"
      eyebrow="Calendário & reservas"
      title="Reservar leva segundos. Ver tudo, um clique."
      lede="A visão semanal mostra todas as quadras com as suas reservas e as da equipe lado a lado. Achou um horário livre? Reserva ali mesmo."
      points={[
        "Visão semanal de todas as quadras",
        "Suas reservas e as dos colegas, distinguidas",
        "Nova reserva: quadra, dia e horário",
      ]}
      visual={
        <Shot>
          <Image
            src="/group-calendar.png"
            alt="Calendário semanal de reservas das quadras"
            width={5934}
            height={3381}
            unoptimized
            className="block h-auto w-full"
          />
        </Shot>
      }
    />
  );
}
