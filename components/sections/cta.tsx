import { RiArrowRightLine, RiGoogleFill } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";


export function FinalCta() {
  return (
    <section id="cta" className="py-24 sm:py-32">

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Comece a organizar suas quadras hoje.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground text-pretty">
            Crie a escola, cadastre as quadras e faça a primeira reserva em
            poucos minutos.
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
              className="w-full sm:w-auto"
            >
              Ver demonstração
            </Button>
          </div>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <RiGoogleFill className="size-4" />
            Grátis para começar · login com Google
          </p>
        </div>
      </Container>
    </section>
  );
}
