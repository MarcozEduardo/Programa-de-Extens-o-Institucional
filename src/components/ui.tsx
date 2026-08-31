import { createContext, useContext, useEffect, useRef, useState } from "react";
import { motion, animate } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Foto } from "../data/media";
import { ETAPAS } from "../data/media";
import { cn } from "../utils/cn";

/** contexto: quando verdadeiro, o app está gerando o PowerPoint/PDF — imagens passam a eager */
export const ExportingContext = createContext(false);

/* ---------------- presets de movimento ---------------- */

export const easeSwift = [0.22, 1, 0.36, 1] as const;

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.085, delayChildren: 0.3 } },
};

export const item = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: easeSwift },
  },
};

export const lineGrow = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: easeSwift, delay: 0.15 } },
};

/* ---------------- Kicker / cabeçalho de slide ---------------- */

export function Kicker({
  num,
  label,
  tag,
  tone = "leaf",
  className,
}: {
  num: string;
  label: string;
  tag?: string;
  tone?: "leaf" | "hazard" | "river" | "neutral";
  className?: string;
}) {
  const tones: Record<string, string> = {
    leaf: "text-leaf border-leaf/35",
    hazard: "text-hazard border-hazard/40",
    river: "text-river border-river/40",
    neutral: "text-fog border-fog/30",
  };
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span
        className={cn(
          "shrink-0 border px-2.5 py-1 font-arial text-[11px] font-bold tracking-[0.3em]",
          tones[tone],
        )}
      >
        {num}
      </span>
      <span className="text-[11px] font-bold uppercase tracking-[0.34em] text-fog">
        {label}
      </span>
      <motion.span
        variants={lineGrow}
        className="hidden h-px flex-1 origin-left bg-gradient-to-r from-smoke to-transparent md:block"
      />
      {tag && (
        <span className="hidden text-[10px] font-bold uppercase tracking-[0.3em] text-ash md:block">
          {tag}
        </span>
      )}
    </div>
  );
}

/* ---------------- Figura com legenda ABNT (NBR 14724) ---------------- */

export function Figure({
  foto,
  num,
  className,
  ratio = "aspect-[4/3]",
  xlHeight,
  captionClass,
  tint,
}: {
  foto: Foto;
  num: string;
  className?: string;
  ratio?: string;
  /** altura fixa em telas grandes (ex.: "lg:aspect-auto lg:h-[296px]") */
  xlHeight?: string;
  captionClass?: string;
  tint?: "warm" | "green" | "blue" | "none";
}) {
  const [loaded, setLoaded] = useState(false);
  const exporting = useContext(ExportingContext);
  const tints: Record<string, string> = {
    warm: "bg-gradient-to-tr from-hazard/25 via-transparent to-transparent mix-blend-multiply",
    green: "bg-gradient-to-tr from-pine/25 via-transparent to-transparent mix-blend-multiply",
    blue: "bg-gradient-to-tr from-deepwater/30 via-transparent to-transparent mix-blend-multiply",
    none: "",
  };
  return (
    <figure className={cn("group/fig", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-[10px] border border-fog/15 bg-coal",
          ratio,
          xlHeight,
        )}
      >
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-smoke/60 via-graphite to-smoke/40" />
        )}
        <motion.img
          src={foto.src}
          alt={foto.alt}
          loading={exporting ? "eager" : "lazy"}
          crossOrigin="anonymous"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setLoaded(true)}
          initial={{ scale: 1.08, opacity: 0.65 }}
          animate={{ scale: loaded ? 1 : 1.08, opacity: loaded ? 1 : 0.65 }}
          transition={{ duration: 2.4, ease: easeSwift }}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover/fig:scale-[1.045]",
            !loaded && "opacity-0",
          )}
        />
        {tint && tint !== "none" && (
          <div className={cn("pointer-events-none absolute inset-0", tints[tint])} />
        )}
        <div className="pointer-events-none absolute inset-0 rounded-[10px] ring-1 ring-inset ring-white/10" />
        <span className="pointer-events-none absolute left-3 top-3 rounded-sm bg-night/70 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.26em] text-bone/90 backdrop-blur-sm">
          Foto real · {foto.ano}
        </span>
      </div>
      <figcaption
        className={cn(
          "mt-2 flex items-start gap-2 text-[10.5px] leading-[1.55] text-ash",
          captionClass,
        )}
      >
        <span className="mt-px h-3 w-px shrink-0 bg-fog/25" />
        <p>
          <strong className="font-bold text-fog">Figura {num}</strong>
          {" – "}
          {foto.descricao}.{" "}
          <strong className="font-bold">Fonte:</strong> {foto.autor}/{foto.agencia} (
          {foto.ano}). Licença {foto.licenca}.{" "}
          <a
            href={foto.fonte}
            target="_blank"
            rel="noreferrer"
            className="link-raw inline-flex items-center gap-0.5 whitespace-nowrap font-bold text-fog/90 no-print"
          >
            ver acervo <ArrowUpRight className="h-3 w-3" />
          </a>
        </p>
      </figcaption>
    </figure>
  );
}

/* ---------------- Estatística animada ---------------- */

export function Counter({
  to,
  decimals = 0,
  duration = 1.8,
  delay = 0.35,
  prefix = "",
  suffix = "",
  className,
}: {
  to: number;
  decimals?: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const [val, setVal] = useState(0);
  const raf = useRef<ReturnType<typeof animate> | null>(null);
  useEffect(() => {
    raf.current = animate(0, to, {
      duration,
      delay,
      ease: easeSwift,
      onUpdate: (v) => setVal(v),
    });
    return () => raf.current?.stop();
  }, [to, duration, delay]);
  return (
    <span className={className}>
      {prefix}
      {val.toLocaleString("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export function Stat({
  value,
  suffix,
  label,
  note,
  decimals = 0,
  tone = "paper",
  className,
}: {
  value: number;
  suffix?: string;
  label: string;
  note?: string;
  decimals?: number;
  tone?: "paper" | "hazard" | "leaf" | "river" | "ember";
  className?: string;
}) {
  const tones: Record<string, string> = {
    paper: "text-paper",
    hazard: "text-hazard",
    leaf: "text-leaf",
    river: "text-river",
    ember: "text-ember",
  };
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className={cn("flex items-baseline gap-1 font-bold", tones[tone])}>
        <Counter to={value} decimals={decimals} className="text-4xl tracking-tight md:text-5xl" />
        {suffix && <span className="text-lg font-bold">{suffix}</span>}
      </div>
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-fog">{label}</p>
      {note && <p className="abnt-body text-xs text-ash">{note}</p>}
    </div>
  );
}

/* ---------------- Citação (NBR 10520 — sistema autor-data) ---------------- */

export function Cite({
  children,
  fonte,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  fonte: string;
  tone?: "neutral" | "green" | "red";
  className?: string;
}) {
  const border: Record<string, string> = {
    neutral: "border-fog/30",
    green: "border-leaf/50",
    red: "border-hazard/50",
  };
  return (
    <blockquote
      className={cn(
        "relative border-l-2 py-1 pl-5 pr-2",
        border[tone],
        className,
      )}
    >
      <p className="font-times text-[15px] italic leading-[1.65] text-bone/90 md:text-base">
        {children}
      </p>
      <footer className="mt-2 text-[10px] font-bold uppercase tracking-[0.28em] text-ash">
        {fonte}
      </footer>
    </blockquote>
  );
}

/* ---------------- Chips ---------------- */

export function Chip({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "green" | "blue" | "red" | "amber";
  className?: string;
}) {
  const tones: Record<string, string> = {
    neutral: "border-fog/20 bg-fog/5 text-fog",
    green: "border-leaf/35 bg-leaf/10 text-mint",
    blue: "border-river/35 bg-river/10 text-sky",
    red: "border-hazard/35 bg-hazard/10 text-redink",
    amber: "border-ember/35 bg-ember/10 text-amberink",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ---------------- Faixa das 4 etapas (Aula 6) ---------------- */

export function PhaseRibbon({ active, className }: { active: 1 | 2 | 3 | 4; className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-2 md:grid-cols-4", className)}>
      {ETAPAS.map((e) => {
        const isActive = e.n === active;
        const done = e.n < active;
        return (
          <div
            key={e.n}
            className={cn(
              "relative overflow-hidden rounded-md border px-3 py-2.5 transition-colors",
              isActive
                ? "border-leaf/55 bg-leaf/12"
                : done
                  ? "border-fog/20 bg-fog/6 opacity-80"
                  : "border-fog/10 bg-coal/60 opacity-45",
            )}
          >
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                  isActive
                    ? "bg-leaf text-ink"
                    : done
                      ? "bg-fog/25 text-paper"
                      : "bg-smoke text-ash",
                )}
              >
                {e.n}
              </span>
              <span
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.12em]",
                  isActive ? "text-mint" : "text-fog",
                )}
              >
                {e.rotulo}
              </span>
            </div>
            <p className={cn("mt-1 hidden text-[10px] leading-snug md:block", isActive ? "text-mint/80" : "text-ash")}>
              {e.nota}
            </p>
            {isActive && (
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-leaf to-river" />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- Título de slide padrão ---------------- */

export function Head({
  kicker,
  num,
  tag,
  tone = "leaf",
  title,
  lede,
}: {
  kicker: string;
  num: string;
  tag?: string;
  tone?: "leaf" | "hazard" | "river" | "neutral";
  title: React.ReactNode;
  lede?: React.ReactNode;
}) {
  return (
    <div>
      <Kicker num={num} label={kicker} tag={tag} tone={tone} />
      <motion.h2
        variants={item}
        className="mt-5 max-w-5xl text-[clamp(1.7rem,3.4vw,3rem)] font-bold leading-[1.06] tracking-tight text-paper"
      >
        {title}
      </motion.h2>
      {lede && (
        <motion.p
          variants={item}
          className="abnt-body mt-4 max-w-2xl text-sm text-fog md:text-[15px]"
        >
          {lede}
        </motion.p>
      )}
    </div>
  );
}
