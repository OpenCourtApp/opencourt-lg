# OpenCourt — Landing page

Wireframe da landing do OpenCourt (gestão de quadras esportivas para escolas).
Mesma stack e mesmos tokens visuais do app, em `../opencourt`, para falar uma
língua visual só: **monocromático, alto contraste, claro + escuro, sem glow**.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** (tokens OKLCH em escala de cinza, espelhados do app)
- **TypeScript**
- **@remixicon/react** (ícones) · **class-variance-authority** (variantes)

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
```

## Estrutura

```
app/
  layout.tsx          # DM Sans, metadata, tema sem flash (claro/escuro)
  page.tsx            # compõe as seções na ordem da página
  globals.css         # tokens monocromáticos + base (espelha o app)
components/
  oc-logo.tsx         # marca/wordmark reaproveitados do app (currentColor)
  theme-toggle.tsx    # alterna .dark e persiste a escolha
  ui/                 # blocos reutilizáveis (Button, Section, Container,
                      # Placeholder, BrowserFrame/PhoneFrame, FeatureSplit)
  sections/           # uma seção por arquivo (ordem da página abaixo)
lib/utils.ts          # helper cn()
```

### Ordem das seções (`app/page.tsx`)

1. `navbar` · 2. `hero` · 3. `problem-solution` · 4. `features` ·
5. `how-it-works` · 6. `feature-dashboard` · 7. `feature-calendar` ·
8. `feature-permissions` · 9. `security` · 10. `pricing` · 11. `faq` ·
12. `cta` · 13. `footer`

## Onde entram os assets

Todo placeholder é um bloco tracejado (`<Placeholder>`) ou um frame
(`<BrowserFrame>` / `<PhoneFrame>`) marcando exatamente o que produzir. Para
trocar pelo asset real, passe o `<Image>` como `children` do frame.

| Seção                | Asset a produzir                                            |
| -------------------- | ---------------------------------------------------------- |
| `hero`               | Mockup do **Painel ao vivo** (claro + escuro, @2x)         |
| `feature-dashboard`  | Mockup do **Painel** (status + gráfico semanal)            |
| `feature-calendar`   | Mockup do **Calendário semanal** + diálogo "Nova reserva"  |
| `feature-permissions`| Mockup de **Colaboradores** (tabela com funções/status)    |
| (global)             | OG image 1200×630 + favicon (reaproveitar a marca OC)      |

Textos já estão em pt-BR e prontos para ajuste fino.
```
