import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Maximize2,
  Minimize2,
  Printer,
  X,
  GraduationCap,
  Keyboard,
  Download,
  Loader2,
  FileCheck,
  DownloadCloud,
  Check,
  Palette,
} from "lucide-react";
import { SLIDES } from "../slides";
import { FOTOS, PROJETO } from "../data/media";
import { ExportingContext } from "./ui";
import { cn } from "../utils/cn";

const TOTAL = SLIDES.length;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Temas do projeto — trocam a apresentação inteira ao vivo e valem para o download */
type Tema = "escuro" | "claro" | "aurora";

const TEMAS: {
  id: Tema;
  nome: string;
  sub: string;
  swatch: string;
  bg: string;
  paleta: { bg: string; fg: string; accent: string; mute: string };
}[] = [
  {
    id: "escuro",
    nome: "Noite",
    sub: "Escuro · projeção",
    swatch: "bg-[linear-gradient(135deg,#0a0d0b_0%,#1a211d_50%,#22c074_150%)]",
    bg: "#0a0d0b",
    paleta: { bg: "0A0D0B", fg: "F2F4EE", accent: "22C074", mute: "7D877F" },
  },
  {
    id: "claro",
    nome: "Papel",
    sub: "Claro · leitura ABNT",
    swatch: "bg-[linear-gradient(135deg,#ffffff_0%,#eef1ea_55%,#159c5e_165%)]",
    bg: "#eef1ea",
    paleta: { bg: "EEF1EA", fg: "0E1310", accent: "0C7245", mute: "5E6A61" },
  },
  {
    id: "aurora",
    nome: "Aurora",
    sub: "Clarinho · gradiente",
    swatch: "bg-[linear-gradient(135deg,#ffffff_0%,#dff2f4_45%,#8cdcc8_100%,#1272ad_170%)]",
    bg: "#eaf2f4",
    paleta: { bg: "EAF2F4", fg: "08171A", accent: "08745A", mute: "566A6C" },
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir >= 0 ? "13%" : "-13%",
    opacity: 0,
    scale: 0.985,
    filter: "blur(9px)",
  }),
  center: { x: "0%", opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: (dir: number) => ({
    x: dir >= 0 ? "-11%" : "11%",
    opacity: 0,
    scale: 0.985,
    filter: "blur(9px)",
  }),
};

const SECAO_TOM: Record<string, string> = {
  abertura: "bg-fog",
  problema: "bg-hazard",
  solucao: "bg-leaf",
  metodo: "bg-river",
  fecho: "bg-mint",
};

export default function Deck() {
  const [[index, dir], setIndex] = useState<[number, number]>([0, 0]);
  const [overview, setOverview] = useState(false);
  const [printMode, setPrintMode] = useState(false);
  const [fs, setFs] = useState(false);
  const [hint, setHint] = useState(true);
  const [exportPpt, setExportPpt] = useState(false);
  const [pptProgress, setPptProgress] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [tema, setTema] = useState<Tema>(
    () => (localStorage.getItem("tema-projeto") as Tema) || "escuro",
  );
  const [themeOpen, setThemeOpen] = useState(false);
  const temaAtual = TEMAS.find((t) => t.id === tema) ?? TEMAS[0];

  /* aplica o tema no documento inteiro e memoriza a escolha */
  useEffect(() => {
    document.documentElement.dataset.theme = tema;
    document.documentElement.style.colorScheme = tema === "escuro" ? "dark" : "light";
    localStorage.setItem("tema-projeto", tema);
  }, [tema]);
  const lock = useRef(0);
  const touchX = useRef<number | null>(null);
  const exportRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (n: number, d?: number) => {
      const now = Date.now();
      if (now - lock.current < 480) return;
      lock.current = now;
      const target = Math.min(Math.max(n, 0), TOTAL - 1);
      setIndex(([prev]) => (target === prev ? [prev, 0] : [target, d ?? (target > prev ? 1 : -1)]));
    },
    [],
  );

  const next = useCallback(() => go(index + 1, 1), [go, index]);
  const prev = useCallback(() => go(index - 1, -1), [go, index]);

  /* ------- pré-carrega o acervo fotográfico real em segundo plano ------- */
  useEffect(() => {
    const t = setTimeout(() => {
      Object.values(FOTOS).forEach((f) => {
        const im = new Image();
        im.src = f.src;
      });
    }, 1400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setHint(false), 9000);
    return () => clearTimeout(t);
  }, []);

  /* ------- teclado ------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (printMode) {
        if (e.key === "Escape") setPrintMode(false);
        return;
      }
      if (e.key === "Escape") return setOverview(false);
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown" || e.key === "ArrowDown") {
        e.preventDefault();
        overview ? setOverview(false) : next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key === "ArrowUp") {
        e.preventDefault();
        overview ? setOverview(false) : prev();
      } else if (e.key === "Home") go(0);
      else if (e.key === "End") go(TOTAL - 1);
      else if (e.key.toLowerCase() === "o" || e.key.toLowerCase() === "g") setOverview((v) => !v);
      else if (e.key.toLowerCase() === "f") toggleFs();
      else if (e.key.toLowerCase() === "p") setPrintMode(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go, overview, printMode]);

  /* ------- roda do mouse ------- */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (overview || printMode || window.innerWidth < 1024) return;
      if (Math.abs(e.deltaY) < 26) return;
      e.deltaY > 0 ? next() : prev();
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [next, prev, overview, printMode]);

  /* ------- toque ------- */
  useEffect(() => {
    const down = (e: PointerEvent) => (touchX.current = e.clientX);
    const up = (e: PointerEvent) => {
      if (touchX.current == null) return;
      const dx = e.clientX - touchX.current;
      touchX.current = null;
      if (Math.abs(dx) < 56 || overview || printMode) return;
      dx < 0 ? next() : prev();
    };
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, [next, prev, overview, printMode]);

  /* ------- tela cheia ------- */
  const toggleFs = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  };
  useEffect(() => {
    const onFs = () => setFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  /* ------- modo impressão ------- */
  useEffect(() => {
    if (!printMode) return;
    const t = setTimeout(() => window.print(), 2600);
    const after = () => setPrintMode(false);
    window.addEventListener("afterprint", after);
    return () => {
      clearTimeout(t);
      window.removeEventListener("afterprint", after);
    };
  }, [printMode]);

  /* ------- exportação para PowerPoint (.pptx) ------- */
  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4600);
  }, []);

  const exportPptx = async () => {
    if (exportPpt) return;
    setThemeOpen(false);
    setExportPpt(true);
    setPptProgress(0);

    const nomeArquivo = `Educando_para_a_Cidadania_Marcos_Eduardo_tema-${temaAtual.nome}_2026.pptx`;
    const paleta = { ...temaAtual.paleta, foot: temaAtual.paleta.mute };
    await sleep(600); // monta o quadro oculto com o tema escolhido

    const frame = exportRef.current;
    const blobs = new Map<string, string>();
    const trocadas: { img: HTMLImageElement; orig: string }[] = [];

    try {
      /* 1) BAIXAR AS FOTOS REAIS para o cache local do projeto e injetar no quadro */
      const imgs = frame ? Array.from(frame.querySelectorAll("img")) : [];
      await Promise.all(
        imgs.map(async (img) => {
          const src = img.currentSrc || img.src;
          if (!src || /^(data:|blob:)/.test(src)) return;
          try {
            if (!blobs.has(src)) {
              const res = await fetch(src, { mode: "cors", cache: "force-cache" });
              if (!res.ok) return;
              blobs.set(src, URL.createObjectURL(await res.blob()));
            }
            trocadas.push({ img, orig: src });
            img.src = blobs.get(src)!;
          } catch {
            /* mantém a URL remota; a rasterização tenta por conta própria */
          }
        }),
      );

      /* 2) aguarda todas as imagens ficarem prontas (sem falsos negativos) */
      await Promise.all(
        imgs.map(
          (img) =>
            new Promise<void>((res) => {
              if (img.complete && img.naturalWidth > 0) return res();
              const done = () => res();
              img.addEventListener("load", done, { once: true });
              img.addEventListener("error", done, { once: true });
              setTimeout(done, 6500);
            }),
        ),
      );
      if (document.fonts?.ready) await document.fonts.ready;
      await sleep(3100); // encerra animações (chat, contadores e barras)

      const PptxGenJS = (await import("pptxgenjs")).default;
      const { toPng } = await import("html-to-image");

      const makePpt = () => {
        const pptx = new PptxGenJS();
        pptx.defineLayout({ name: "WIDE", width: 13.333, height: 7.5 });
        pptx.layout = "WIDE";
        pptx.author = PROJETO.aluno;
        pptx.company = PROJETO.instituicao;
        pptx.title = `${PROJETO.titulo} — Transformação do Lixão da Estrutural (DF)`;
        return pptx;
      };

      const foot = (s: { addText: (t: string, o?: object) => void }, i: number) => {
        s.addText(`${PROJETO.aluno} · ${PROJETO.instituicao} — Curso de ${PROJETO.curso}`, {
          x: 0.45, y: 7.08, w: 9.6, h: 0.3, fontSize: 8.5, color: paleta.foot, fontFace: "Arial", align: "left",
        });
        s.addText(`${String(i + 1).padStart(2, "0")} / ${TOTAL}`, {
          x: 11.9, y: 7.08, w: 1.1, h: 0.3, fontSize: 8.5, color: paleta.foot, fontFace: "Arial", align: "right",
        });
      };

      let pptx = makePpt();
      try {
        const boxes = Array.from(
          frame?.querySelectorAll<HTMLElement>("[data-slide-box]") ?? [],
        );
        if (!boxes.length) throw new Error("quadro de exportação vazio");
        for (let i = 0; i < boxes.length; i++) {
          const data = await toPng(boxes[i], {
            pixelRatio: 1.6,
            backgroundColor: temaAtual.bg,
            fetchRequestInit: { mode: "cors" } as RequestInit,
          });
          const s = pptx.addSlide();
          s.addImage({ data, x: 0, y: 0, w: 13.333, h: 7.5 });
          foot(s, i);
          setPptProgress(i + 1);
        }
      } catch {
        /* plano B: deck textual leve (sempre gera o arquivo) */
        pptx = makePpt();
        SLIDES.forEach((m, i) => {
          const s = pptx.addSlide();
          s.background = { color: paleta.bg };
          s.addText(m.numero, {
            x: 0.5, y: 1.2, w: 2, h: 0.6, fontSize: 16, color: paleta.accent, fontFace: "Arial", bold: true,
          });
          s.addText(m.titulo, {
            x: 0.5, y: 2.3, w: 12.3, h: 1.8, fontSize: 40, color: paleta.fg, fontFace: "Arial",
            bold: true, align: "center", valign: "middle",
          });
          s.addText("Conteúdo integral disponível na versão interativa e na exportação em PDF.", {
            x: 0.5, y: 4.4, w: 12.3, h: 0.5, fontSize: 12, color: paleta.mute, fontFace: "Arial", align: "center",
          });
          foot(s, i);
        });
      }

      await pptx.writeFile({ fileName: nomeArquivo });
      showToast(`PowerPoint (.pptx) baixado no tema “${temaAtual.nome}”!`);
    } catch {
      showToast("Não foi possível gerar o PowerPoint agora. Tente novamente.");
    } finally {
      trocadas.forEach(({ img, orig }) => {
        img.src = orig;
      });
      blobs.forEach((u) => URL.revokeObjectURL(u));
      setExportPpt(false);
      setPptProgress(0);
    }
  };

  const meta = SLIDES[index];
  const progress = (index + 1) / TOTAL;

  return (
    <ExportingContext.Provider value={exportPpt}>
    <div className="relative h-full w-full overflow-hidden bg-night">
      {/* barra de progresso */}
      <div className="no-print absolute inset-x-0 top-0 z-50 h-[3px] bg-smoke/40">
        <motion.div
          className="h-full origin-left bg-[linear-gradient(90deg,#ef4b3f_0%,#f59e0b_35%,#3aa6e8_70%,#22c074_100%)]"
          initial={false}
          animate={{ scaleX: progress }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      {/* ------------------ chrome superior ------------------ */}
      <header className="no-print absolute inset-x-0 top-0 z-40 flex h-12 items-center justify-between border-b border-fog/10 bg-night/80 px-4 backdrop-blur-md md:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-leaf to-deepwater">
            <GraduationCap className="h-4 w-4 text-night" strokeWidth={2.2} />
          </span>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[10.5px] font-bold uppercase tracking-[0.26em] text-paper">
              {PROJETO.titulo}
            </p>
            <p className="truncate text-[9px] font-bold uppercase tracking-[0.2em] text-ash">
              {PROJETO.programa} · {PROJETO.instituicao} (EAD)
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-2.5 md:flex">
          <span className={cn("h-1.5 w-1.5 rounded-full", SECAO_TOM[meta.secao])} />
          <p className="text-[10.5px] font-bold uppercase tracking-[0.3em] text-fog">
            {meta.numero} · {meta.titulo}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden text-[9px] font-bold uppercase tracking-[0.22em] text-ash xl:block">
            ABNT · NBR 14724 / 10520 / 6023
          </span>

          {/* troca rápida de tema — reflete na hora e vale para o download */}
          <div className="flex items-center gap-1 rounded-md border border-fog/15 bg-coal/70 p-1">
            <Palette className="ml-1 h-3.5 w-3.5 text-fog" />
            {TEMAS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTema(t.id)}
                title={`Tema ${t.nome} — ${t.sub}`}
                aria-label={`Aplicar tema ${t.nome}`}
                aria-pressed={tema === t.id}
                className={cn(
                  "chrome-btn focus-ring h-5 w-5 rounded-full border transition-all",
                  t.swatch,
                  tema === t.id
                    ? "scale-110 border-leaf ring-2 ring-leaf/45"
                    : "border-fog/25 opacity-70 hover:opacity-100",
                )}
              />
            ))}
            <button
              onClick={() => setThemeOpen(true)}
              className="chrome-btn focus-ring ml-0.5 rounded px-1.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-fog hover:text-paper"
              title="Ver todos os temas"
            >
              Tema
            </button>
          </div>
        </div>
      </header>

      {/* ------------------ palco de slides ------------------ */}
      <main className="absolute inset-0 pb-[54px] pt-12">
        <AnimatePresence custom={dir} mode="popLayout" initial={false}>
          <motion.div
            key={index}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
            className="absolute inset-x-0 bottom-[54px] top-12"
            role="group"
            aria-roledescription="slide"
            aria-label={`${meta.numero} de ${TOTAL}: ${meta.titulo}`}
          >
            <meta.component />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* setas laterais */}
      <button
        className="chrome-btn focus-ring no-print absolute left-3 top-1/2 z-40 hidden -translate-y-1/2 rounded-full border border-fog/15 bg-night/70 p-2.5 text-fog backdrop-blur hover:border-leaf/50 hover:text-mint md:block"
        onClick={prev}
        disabled={index === 0}
        aria-label="Slide anterior"
        style={{ opacity: index === 0 ? 0.25 : 1 }}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        className="chrome-btn focus-ring no-print absolute right-3 top-1/2 z-40 hidden -translate-y-1/2 rounded-full border border-fog/15 bg-night/70 p-2.5 text-fog backdrop-blur hover:border-leaf/50 hover:text-mint md:block"
        onClick={next}
        disabled={index === TOTAL - 1}
        aria-label="Próximo slide"
        style={{ opacity: index === TOTAL - 1 ? 0.25 : 1 }}
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* ------------------ chrome inferior ------------------ */}
      <footer className="no-print absolute inset-x-0 bottom-0 z-40 flex h-[54px] items-center justify-between border-t border-fog/10 bg-night/85 px-4 backdrop-blur-md md:px-6">
        <p className="max-w-44 truncate text-[9.5px] font-bold uppercase tracking-[0.14em] text-ash sm:max-w-none md:text-[10px]">
          Marcos Eduardo da Silva dos Reis — p. {String(index + 1).padStart(2, "0")}/{TOTAL}
        </p>

        <nav className="flex items-center gap-1.5" aria-label="Navegação por slides">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              title={`${s.numero} — ${s.titulo}`}
              aria-label={`Ir para o slide ${s.numero}: ${s.titulo}`}
              aria-current={i === index}
              className={cn(
                "focus-ring h-1.5 rounded-full transition-all duration-300",
                i === index
                  ? "w-7 bg-gradient-to-r from-leaf to-river"
                  : "w-1.5 bg-fog/25 hover:bg-fog/60",
              )}
            />
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <AnimatePresence>
            {hint && (
              <motion.span
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="mr-1 hidden items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-ash xl:flex"
              >
                <Keyboard className="h-3.5 w-3.5" /> setas navegam · O grade · F tela cheia
              </motion.span>
            )}
          </AnimatePresence>
          <button
            className="chrome-btn focus-ring rounded-md border border-fog/15 bg-coal/70 p-2 text-fog hover:border-river/50 hover:text-sky"
            onClick={() => setOverview(true)}
            title="Grade de slides (O)"
            aria-label="Abrir grade de slides"
          >
            <LayoutGrid className="h-3.5 w-3.5" />
          </button>
          <button
            className="chrome-btn focus-ring rounded-md border border-fog/15 bg-coal/70 p-2 text-fog hover:border-ember/50 hover:text-[#ffd9a0]"
            onClick={() => setPrintMode(true)}
            title="Exportar em PDF / imprimir (A4 paisagem)"
            aria-label="Exportar em PDF ou imprimir"
          >
            <Printer className="h-3.5 w-3.5" />
          </button>
          <button
            className="chrome-btn focus-ring flex items-center gap-1.5 rounded-md border border-river/45 bg-river/12 px-2.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-sky hover:bg-river/20"
            onClick={() => setThemeOpen(true)}
            disabled={exportPpt}
            title="Baixar apresentação em PowerPoint (.pptx) — 3 temas disponíveis"
            aria-label="Baixar apresentação em PowerPoint"
          >
            {exportPpt ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Download className="h-3.5 w-3.5" />
            )}
            <span className="hidden md:inline">{exportPpt ? "Gerando…" : "PPT"}</span>
          </button>
          <button
            className="chrome-btn focus-ring rounded-md border border-fog/15 bg-coal/70 p-2 text-fog hover:border-leaf/50 hover:text-mint"
            onClick={toggleFs}
            title="Tela cheia (F)"
            aria-label="Alternar tela cheia"
          >
            {fs ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
          </button>
          <button
            className="chrome-btn focus-ring ml-1 flex items-center gap-1.5 rounded-md border border-leaf/40 bg-leaf/15 px-2.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-mint hover:bg-leaf/25 sm:px-3"
            onClick={next}
            disabled={index === TOTAL - 1}
            style={{ opacity: index === TOTAL - 1 ? 0.35 : 1 }}
            title="Próximo slide"
          >
            <span className="hidden sm:inline">Avançar</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </footer>

      {/* anúncio acessível */}
      <div aria-live="polite" className="sr-only">
        Slide {index + 1} de {TOTAL}: {meta.titulo}
      </div>

      {/* ------------------ grade de slides ------------------ */}
      <AnimatePresence>
        {overview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="no-print absolute inset-0 z-[60] overflow-y-auto bg-night/96 p-6 backdrop-blur-xl md:p-10"
          >
            <div className="mx-auto max-w-6xl">
              <div className="mb-6 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-ash">
                    Índice da apresentação
                  </p>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-paper md:text-3xl">
                    Grade de slides{" "}
                    <span className="text-fog">— {TOTAL} seções</span>
                  </h2>
                </div>
                <button
                  className="chrome-btn focus-ring rounded-md border border-fog/20 p-2.5 text-fog hover:border-hazard/60 hover:text-[#ffb3ac]"
                  onClick={() => setOverview(false)}
                  aria-label="Fechar grade"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {SLIDES.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setOverview(false);
                      go(i);
                    }}
                    className={cn(
                      "focus-ring group relative overflow-hidden rounded-xl border p-4 text-left transition-all",
                      i === index
                        ? "border-leaf/60 bg-leaf/10"
                        : "border-fog/12 bg-coal/70 hover:border-river/50",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute left-0 top-0 h-full w-[3px]",
                        SECAO_TOM[s.secao],
                        "opacity-70",
                      )}
                    />
                    <p className="text-[26px] font-bold tracking-tight text-fog/40 transition-colors group-hover:text-fog/70">
                      {s.numero}
                    </p>
                    <p className="mt-6 text-[11px] font-bold uppercase leading-snug tracking-[0.16em] text-bone/90">
                      {s.titulo}
                    </p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-ash">
                      {s.secao}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------ modo impressão / PDF ------------------ */}
      <AnimatePresence>
        {printMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="print-sheet absolute inset-0 z-[70] overflow-y-auto bg-coal/95 backdrop-blur"
          >
            <div className="no-print sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-fog/10 bg-night/95 px-5 py-4 backdrop-blur">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-ash">
                  Exportação acadêmica
                </p>
                <p className="text-sm font-bold text-paper">
                  Salvando como PDF — A4 paisagem · 1 slide por página
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="chrome-btn focus-ring rounded-md border border-leaf/45 bg-leaf/15 px-3.5 py-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-mint hover:bg-leaf/25"
                  onClick={() => window.print()}
                >
                  Reimprimir
                </button>
                <button
                  className="chrome-btn focus-ring rounded-md border border-fog/20 p-2 text-fog hover:text-paper"
                  onClick={() => setPrintMode(false)}
                  aria-label="Voltar à apresentação"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="print-stack space-y-6 p-6 md:p-8">
              {SLIDES.map((s) => (
                <div
                  key={s.id}
                  className="print-slide relative mx-auto w-full max-w-5xl overflow-hidden rounded-lg bg-night shadow-2xl"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <s.component />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------ seletor de tema do PowerPoint ------------------ */}
      <AnimatePresence>
        {themeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="no-print absolute inset-0 z-[78] flex items-center justify-center bg-night/85 p-4 backdrop-blur-md"
            onClick={() => setThemeOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-2xl rounded-2xl border border-fog/15 bg-coal p-5 shadow-2xl md:p-6"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Escolher tema do PowerPoint"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ash">
                    Tema do projeto
                  </p>
                  <h3 className="mt-1 text-lg font-bold tracking-tight text-paper md:text-xl">
                    Escolha o visual da apresentação
                  </h3>
                  <p className="abnt-body mt-1 max-w-lg text-[11.5px] text-ash">
                    A troca é aplicada na hora, em toda a apresentação. O tema
                    que estiver na tela é exatamente o que sai no PowerPoint e
                    no PDF.
                  </p>
                </div>
                <button
                  className="chrome-btn focus-ring rounded-md border border-fog/20 p-2 text-fog hover:text-paper"
                  onClick={() => setThemeOpen(false)}
                  aria-label="Fechar"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {TEMAS.map((t) => {
                  const ativo = tema === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTema(t.id)}
                      className={cn(
                        "focus-ring group relative rounded-xl border p-3 text-left transition-all duration-200",
                        ativo
                          ? "border-leaf/60 bg-leaf/10"
                          : "border-fog/12 bg-graphite/60 hover:border-river/50",
                      )}
                      aria-pressed={ativo}
                    >
                      <span
                        className={cn(
                          "block h-16 overflow-hidden rounded-lg border border-fog/10",
                          t.swatch,
                        )}
                      >
                        <span className="mt-2 ml-2 block h-1.5 w-3/5 rounded-full bg-black/15" />
                        <span className="mt-1 ml-2 block h-1 w-2/5 rounded-full bg-black/10" />
                      </span>
                      <span className="mt-2.5 flex items-center justify-between gap-2">
                        <span className="block text-[11.5px] font-bold text-paper">
                          {t.nome}
                        </span>
                        {ativo && (
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf text-ink">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                        )}
                      </span>
                      <p className="mt-0.5 text-[10px] leading-snug text-ash">{t.sub}</p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-xl border border-river/25 bg-river/8 p-3.5">
                <DownloadCloud className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                <p className="abnt-body text-[11px] text-bone/90">
                  As {Object.keys(FOTOS).length} fotos reais mantêm as cores
                  originais em qualquer tema e são{" "}
                  <strong>baixadas para o cache local</strong> antes de
                  converter — o .pptx sai completo, sem depender de internet.
                </p>
              </div>

              <div className="mt-5 flex flex-col items-stretch justify-end gap-2 sm:flex-row sm:items-center">
                <button
                  className="chrome-btn focus-ring rounded-md border border-fog/20 px-4 py-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-fog hover:text-paper"
                  onClick={() => setThemeOpen(false)}
                >
                  Só aplicar no site
                </button>
                <button
                  className="chrome-btn focus-ring flex items-center justify-center gap-2 rounded-md border border-leaf/50 bg-gradient-to-r from-pine to-deepwater px-4 py-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-lite hover:brightness-110"
                  onClick={exportPptx}
                  disabled={exportPpt}
                >
                  {exportPpt ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Download className="h-3.5 w-3.5" />
                  )}
                  Baixar .pptx no tema {temaAtual.nome}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------ progresso do PowerPoint / toast ------------------ */}
      <AnimatePresence>
        {exportPpt && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="no-print absolute bottom-[72px] left-1/2 z-[80] flex -translate-x-1/2 items-center gap-3 rounded-full border border-river/45 bg-night/92 px-5 py-3 shadow-2xl backdrop-blur"
            role="status"
          >
            <Loader2 className="h-4 w-4 animate-spin text-sky" />
            <p className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.18em] text-bone">
              Gerando PowerPoint (.pptx){" "}
              <span className="text-sky">
                {pptProgress > 0 ? `${pptProgress}/${TOTAL}` : "montando slides…"}
              </span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && !exportPpt && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="no-print absolute bottom-[72px] left-1/2 z-[80] flex -translate-x-1/2 items-center gap-3 rounded-full border border-leaf/50 bg-night/92 px-5 py-3 shadow-2xl backdrop-blur"
            role="status"
          >
            <FileCheck className="h-4 w-4 text-mint" />
            <p className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.14em] text-bone">
              {toast}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------ quadro oculto para rasterizar os slides ------------------ */}
      {exportPpt && (
        <div
          ref={exportRef}
          aria-hidden
          className="no-print pointer-events-none fixed left-[-26000px] top-0"
        >
          {SLIDES.map((s) => (
            <div
              key={s.id}
              data-slide-box
              style={{
                width: 1280,
                height: 720,
                position: "relative",
                overflow: "hidden",
                background: temaAtual.bg,
              }}
            >
              <s.component />
            </div>
          ))}
        </div>
      )}
    </div>
    </ExportingContext.Provider>
  );
}
