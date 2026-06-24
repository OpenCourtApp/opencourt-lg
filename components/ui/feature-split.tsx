import { RiCheckLine } from "@remixicon/react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Eyebrow } from "./section";
import { TextAnimate } from "./text-animate";

/** Text + product-visual row used by the feature highlight sections. */
export function FeatureSplit({
  id,
  eyebrow,
  title,
  lede,
  points,
  visual,
  reverse = false,
  className,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  lede: string;
  points?: string[];
  visual: React.ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <Container
        className={cn(
          "grid max-w-7xl items-center gap-10 lg:gap-12",
          reverse
            ? "lg:grid-cols-[2.7fr_1fr]"
            : "lg:grid-cols-[1fr_1.8fr]",
        )}
      >
        <div className={cn(reverse && "lg:order-2")}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <TextAnimate
            as="h2"
            by="word"
            animation="blurInUp"
            once
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {title}
          </TextAnimate>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            {lede}
          </p>
          {points?.length ? (
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <RiCheckLine className="mt-0.5 size-4 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className={cn(reverse && "lg:order-1")}>{visual}</div>
      </Container>
    </section>
  );
}
