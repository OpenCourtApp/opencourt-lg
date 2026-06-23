import { FeatureBleed } from "@/components/ui/feature-bleed";

export function FeatureDashboard() {
  return (
    <FeatureBleed
      id="painel"
      eyebrow="Painel ao vivo"
      title="Saiba o que está acontecendo agora."
      lede="Em quadra agora, reservas de hoje, horários livres e uso da semana — atualizado em tempo real, assim que alguém reserva."
      points={[
        "“Em quadra agora”, com o tempo correndo ao vivo",
        "Reservas de hoje e horários ainda livres",
        "Gráfico de ocupação da semana",
      ]}
      src="/group-dashboard.png"
      alt="Painel do OpenCourt com ocupação das quadras ao vivo"
      priority
    />
  );
}
