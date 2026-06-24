import { cn } from "@/lib/utils";
import { Container } from "./container";
import { TextAnimate } from "./text-animate";

/** A vertically padded page section with a centered content container. */
export function Section({
  id,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/** Small uppercase label that sits above a section heading. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <TextAnimate
      as="h2"
      by="word"
      animation="blurInUp"
      once
      className={cn(
        "mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
        className,
      )}
    >
      {children}
    </TextAnimate>
  );
}

export function SectionLede({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-4 text-lg text-muted-foreground text-pretty",
        className,
      )}
    >
      {children}
    </p>
  );
}
