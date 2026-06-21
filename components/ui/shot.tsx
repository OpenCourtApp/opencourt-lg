import { cn } from "@/lib/utils";

/**
 * Framed product shot: just clips a screenshot/video to rounded corners. The
 * assets already carry their own gradient backdrop, so no chrome, border or
 * shadow is added here.
 */
export function Shot({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl", className)}>{children}</div>
  );
}
