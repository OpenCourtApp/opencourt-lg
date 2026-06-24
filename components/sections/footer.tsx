import { RiGithubFill } from "@remixicon/react";
import { Container } from "@/components/ui/container";
import { OpenCourtWordmark } from "@/components/oc-logo";
import { GITHUB_URL } from "@/lib/site";

const groups = [
  {
    title: "Produto",
    links: [
      { label: "Recursos", href: "#recursos" },
      { label: "Planos", href: "#planos" },
      { label: "Perguntas", href: "#faq" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "#" },
      { label: "Contato", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidade", href: "#" },
      { label: "Termos", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <OpenCourtWordmark />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground text-pretty">
              As quadras da sua escola ou clube, organizadas em um só lugar.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <RiGithubFill className="size-4" />
              </a>
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <p className="text-sm font-semibold">{g.title}</p>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} OpenCourt. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Feito para escolas e clubes.
          </p>
        </div>
      </Container>
    </footer>
  );
}
