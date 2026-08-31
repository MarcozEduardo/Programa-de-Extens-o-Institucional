import { motion } from "framer-motion";
import {
  CheckCheck,
  Phone,
  Users,
  Mic2,
  ShieldCheck,
  CalendarDays,
} from "lucide-react";
import { DEPOIMENTOS, PESQUISA, PROJETO } from "../data/media";
import { stagger, item, Head, Chip, easeSwift } from "../components/ui";
import { cn } from "../utils/cn";

/* ============================================================
   SLIDE 8 — PESQUISA DE CAMPO: depoimentos dos moradores (chat)
   Observação: thread em grade, SEM rolagem interna — integral
   visível no slide e na imagem exportada (PDF/PPT).
============================================================ */
export default function S08Campo() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="page-wash relative flex h-full flex-col overflow-y-auto overflow-x-hidden bg-night lg:overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-44 top-1/4 h-[28rem] w-[28rem] rounded-full bg-pine/12 blur-[120px]" />
      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-7 px-6 py-6 md:px-10 lg:grid-cols-[0.76fr_1.24fr] lg:gap-8 lg:py-7">
        {/* ------------ coluna: contexto da pesquisa ------------ */}
        <div className="flex min-h-0 flex-col justify-center gap-5">
          <Head
            kicker="Pesquisa de campo"
            num="08"
            tag="Depoimentos"
            tone="leaf"
            title={
              <>
                A VOZ DE QUEM{" "}
                <span className="text-fog">mora lá</span>
              </>
            }
            lede="Para ouvir a comunidade diretamente, o autor ligou por telefone para 7 moradores da Cidade Estrutural entre 12 e 16 de agosto de 2026. A pergunta foi sempre a mesma: o que melhorou depois do fim do lixão? As respostas, ao lado, foram transcritas entre aspas, preservando a oralidade, apenas com revisão ortográfica."
          />

          <motion.div variants={item} className="flex flex-wrap gap-2">
            <Chip tone="green">
              <Users className="h-3 w-3" /> {PESQUISA.participantes} depoimentos
            </Chip>
            <Chip tone="blue">
              <Phone className="h-3 w-3" /> {PESQUISA.meio}
            </Chip>
            <Chip tone="neutral">
              <CalendarDays className="h-3 w-3" /> {PESQUISA.periodo}
            </Chip>
            <Chip tone="neutral">
              <ShieldCheck className="h-3 w-3" /> oralidade preservada
            </Chip>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-xl border border-leaf/25 bg-leaf/8 p-4"
          >
            <div className="mb-2 flex items-center gap-2 text-mint">
              <Mic2 className="h-4 w-4" />
              <h3 className="text-[11px] font-bold uppercase tracking-[0.24em]">
                O balanço das respostas
              </h3>
            </div>
            <p className="abnt-body text-[12px] text-bone/90">
              Sete de sete moradores relataram melhora direta após o
              fechamento do lixão — ar, ruas, renda e escola aparecem em
              todas as falas. E sete de sete elogiaram a iniciativa e pediram
              que o projeto{" "}
              <em className="not-italic text-mint">
                circule em outras comunidades
              </em>
              . Onde a extensão chega, a cidadania responde junto.
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="hidden text-[10px] leading-relaxed text-ash lg:block"
          >
            Transcrição integral no relatório de campo do autor (material de
            seminário não publicado, {PROJETO.ano}) — ver Referências.
          </motion.p>
        </div>

        {/* ------------ coluna: chat ------------ */}
        <motion.div variants={item} className="flex min-h-0 flex-col">
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-fog/12 bg-coal/80 shadow-2xl">
            {/* cabeçalho do chat */}
            <div className="flex items-center gap-3 border-b border-fog/10 bg-graphite/90 px-4 py-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pine to-deepwater text-[11px] font-bold text-lite">
                CE
              </span>
              <div className="min-w-0 flex-1 leading-tight">
                <p className="truncate text-[12px] font-bold text-paper">
                  Cidade Estrutural — entrevistas da pesquisa
                </p>
                <p className="truncate text-[9px] font-bold uppercase tracking-[0.16em] text-ash">
                  {PESQUISA.participantes} moradores · ligações telefônicas ·{" "}
                  {PESQUISA.periodo}
                </p>
              </div>
              <span className="hidden items-center gap-1.5 rounded-full border border-leaf/40 bg-leaf/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-mint sm:flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-leaf" />
                transcrito
              </span>
            </div>

            {/* corpo do chat: grade SEM rolagem */}
            <div className="halftone grid min-h-0 flex-1 content-start grid-cols-1 gap-1.5 overflow-y-auto px-3 py-2.5 md:grid-cols-2 md:overflow-visible lg:gap-2 lg:px-3.5 lg:py-3">
              {/* pergunta do autor (linha inteira) */}
              <MyBubble hora={PESQUISA.horaPergunta} full>
                {PESQUISA.pergunta}
              </MyBubble>

              {/* respostas dos moradores */}
              {DEPOIMENTOS.map((d, i) => (
                <ResidentBubble key={d.nome} d={d} i={i} />
              ))}

              {/* encerramento do autor (linha inteira) */}
              <MyBubble hora={PESQUISA.horaFim} full>
                {PESQUISA.agradecimento}
              </MyBubble>
            </div>

            {/* rodapé do chat */}
            <div className="flex items-center gap-2 border-t border-fog/10 bg-graphite/90 px-4 py-2">
              <CheckCheck className="h-3.5 w-3.5 shrink-0 text-sky" />
              <p className="text-[9.5px] leading-snug text-ash">
                Falas verificadas pelo autor e confirmadas pelos entrevistados
                antes da publicação nesta mídia.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ---------------- balão do autor (direita) ---------------- */

function MyBubble({
  children,
  hora,
  full,
}: {
  children: React.ReactNode;
  hora: string;
  full?: boolean;
}) {
  return (
    <motion.div
      variants={item}
      className={cn("flex justify-end", full && "md:col-span-2")}
    >
      <div className="w-full max-w-[92%] md:max-w-[86%]">
        <p className="mb-0.5 flex items-center justify-end gap-1.5 pr-1 text-right text-[8.5px] font-bold uppercase tracking-[0.2em] text-fog/70">
          Marcos · autor da pesquisa · {hora}
          <CheckCheck className="h-3 w-3 text-sky" />
        </p>
        <div className="rounded-2xl rounded-br-md bg-gradient-to-br from-pine to-deepwater px-3 py-2 shadow-lg">
          <p className="text-[11px] leading-[1.5] text-lite md:text-[11.5px]">
            {children}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- balão do morador (esquerda) ---------------- */

function ResidentBubble({ d, i }: { d: (typeof DEPOIMENTOS)[number]; i: number }) {
  const initials = d.nome
    .split(" ")
    .filter((w) => w.length > 2 || /[A-ZÁÉÍÓÚÂÊÔÃÕÇ]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.55, delay: 0.9 + i * 0.14, ease: easeSwift }}
      className="flex items-end gap-2"
    >
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
        style={{
          backgroundColor: `${d.cor}26`,
          color: d.cor,
          border: `1px solid ${d.cor}55`,
        }}
      >
        {initials.toUpperCase()}
      </span>
      <div className="w-full max-w-[90%]">
        <p className="mb-0.5 flex items-baseline justify-between gap-2 pl-1 text-[8.5px] font-bold uppercase tracking-[0.14em] text-fog/70">
          <span className="truncate">
            {d.nome} <span className="text-ash/80">· {d.papel}</span>
          </span>
          <span className="shrink-0 text-ash">{d.hora}</span>
        </p>
        <div className="rounded-2xl rounded-bl-md border border-fog/10 bg-graphite px-3 py-2 shadow-lg">
          <p className="text-[11px] leading-[1.5] text-bone/95 md:text-[11.5px]">
            <span className="font-times text-sm italic text-mint">“</span>
            {d.texto}
            <span className="font-times text-sm italic text-mint">”</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
