import Image from "next/image";
import { RiCheckLine } from "@remixicon/react";
import { Eyebrow } from "./section";

/**
 * Text on the left, product screenshot on the right. On desktop the screenshot
 * is pinned to the section, sitting in the right half (clear of the text), with
 * generous breathing room at the top — it bleeds off the right edge and is cut
 * at the bottom separation line (a "zoom into the app"). Contained on mobile.
 */
export function FeatureBleed({
  id,
  eyebrow,
  title,
  lede,
  points,
  src,
  alt,
  priority = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  lede: string;
  points?: string[];
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <section
      id={id}
      className="relative overflow-hidden border-b border-border lg:h-[34rem]"
    >
      <div className="mx-auto grid h-full max-w-6xl items-center gap-x-10 px-6 lg:grid-cols-2">
        <div className="py-16 lg:py-0">
          <div className="max-w-md">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {title}
            </h2>
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
        </div>

        <div className="relative pb-16 lg:static lg:pb-0">
          {/* Mobile: contained, full screenshot. */}
          <Image
            src={src}
            alt={alt}
            width={5934}
            height={3381}
            unoptimized
            priority={priority}
            className="w-full rounded-xl lg:hidden"
          />
          {/* Desktop: pinned in the right half, bleeds right, cut at the bottom line. */}
          <div className="hidden lg:absolute lg:top-16 lg:bottom-0 lg:left-[52%] lg:block lg:w-[62vw]">
            <Image
              src={src}
              alt={alt}
              fill
              unoptimized
              priority={priority}
              sizes="62vw"
              className="rounded-tl-xl object-cover object-left-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
