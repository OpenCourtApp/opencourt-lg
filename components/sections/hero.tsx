import { RiArrowRightLine, RiGoogleFill } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Shot } from "@/components/ui/shot";


export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden border-b border-border">
      {/* Court photo — the hero's focal background (full color, fully visible). */}
      <div
        aria-hidden
        style={{ backgroundImage: "url('/court-bg.png')" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      />
      {/* Light dark veil at the very top only — just enough for the white
          headline; clears by the middle so the photo stays bright and airy. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent"
      />
      {/* Fade the bottom into the page background for a seamless transition. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent"
      />

      <div className="relative py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-3 py-1 text-xs text-white backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
                <span className="relative inline-flex size-2 rounded-full bg-white" />
              </span>
              Gestão de quadras para escolas
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              As quadras da sua escola, sob controle.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg text-white/85 text-pretty">
              Reservas, calendário e ocupação em um só lugar. Sem planilha, sem
              papel, sem conflito de horário.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="https://opencourtapp.vercel.app/register" size="lg" className="w-full sm:w-auto">
                Criar minha escola
                <RiArrowRightLine className="size-4" />
              </Button>
              <Button
                href="#painel"
                variant="secondary"
                size="lg"
                className="w-full border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 sm:w-auto"
              >
                Ver demonstração
              </Button>
            </div>

            <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/80">
              <RiGoogleFill className="size-4" />
              Grátis para começar · login com Google
            </p>
          </div>
        </Container>

        <div className="mx-auto mt-16 w-full max-w-7xl px-6">
          {/* Subtle glass frame around the demo video: a translucent border + a
              faint blurred ring. Not liquid-glass — just a frame. */}
          <div className="rounded-[1.75rem] border border-white/30 bg-white/15 p-2 shadow-xl shadow-black/10 backdrop-blur-md sm:p-3">
            <Shot className="rounded-2xl">
              <video
                className="block h-auto w-full"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Demonstração do OpenCourt em uso"
              >
                <source src="/hero-demo.mp4" type="video/mp4" />
              </video>
            </Shot>
          </div>
        </div>
      </div>
    </section>
  );
}
