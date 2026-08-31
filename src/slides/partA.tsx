import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarRange,
  Target,
  ClipboardList,
  Users,
} from "lucide-react";
import { FOTOS, PROJETO } from "../data/media";
import {
  stagger,
  item,
  Head,
  Figure,
  Stat,
  Cite,
  Chip,
  PhaseRibbon,
  easeSwift,
} from "../components/ui";
import { cn } from "../utils/cn";

/* ============================================================
   SLIDE 1 — CAPA (ABNT NBR 14724)
============================================================ */
export function S01() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="grain relative flex h-full flex-col overflow-hidden"
    >
      {/* fundo: fotografia real do lixão em baixa opacidade */}
      <div className="absolute inset-0">
        <img
          src={FOTOS.lixaoAerea.src}
          alt=""
          aria-hidden
          crossOrigin="anonymous"
          className="h-full w-full scale-[1.06] object-cover opacity-[0.16] [filter:saturate(0.5)_contrast(1.1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/94 to-night/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-night/80" />
      </div>

      {/* margem ABNT: régua 3 cm (esquerda) */}
      <div className="margin-rule absolute bottom-0 left-6 top-0 hidden w-px bg-fog/10 lg:block" />
      <p className="absolute left-2 top-1/2 hidden -rotate-90 text-[9px] font-bold uppercase tracking-[0.4em] text-ash/70 lg:block">
        NBR 14724
      </p>
      <p className="absolute right-6 top-1/2 hidden rotate-90 text-[9px] font-bold uppercase tracking-[0.4em] text-ash/60 xl:block">
        NBR 10520 · NBR 6023
      </p>

      <div className="paper-grid absolute inset-0" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col px-6 md:px-10">
        {/* cabeçalho institucional — centro (capa ABNT) */}
        <motion.div variants={item} className="pt-10 text-center md:pt-14">
          <p className="text-[13px] font-bold uppercase tracking-[0.5em] text-paper">
            {PROJETO.instituicao}
          </p>
          <p className="mt-2 text-[10.5px] font-bold uppercase tracking-[0.3em] text-ash">
            {PROJETO.modalidade} · Curso de {PROJETO.curso}
          </p>
        </motion.div>

        {/* bloco central */}
        <div className="flex flex-1 flex-col items-center justify-center py-8 text-center">
          <motion.div variants={item} className="mb-6 flex flex-wrap items-center justify-center gap-2">
            <Chip tone="green">{PROJETO.programa}</Chip>
            <Chip tone="neutral">Seminário de Extensão · Aula 06</Chip>
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-5xl text-[clamp(2.3rem,6vw,5.2rem)] font-bold leading-[0.98] tracking-tight text-paper"
          >
            EDUCANDO
            <br />
            PARA A{" "}
            <span className="bg-gradient-to-r from-leaf via-mint to-river bg-clip-text text-transparent">
              CIDADANIA
            </span>
          </motion.h1>

          <motion.div variants={item} className="mt-6 h-[3px] w-40 rounded-full bg-gradient-to-r from-hazard via-ember to-leaf" />

          <motion.p
            variants={item}
            className="abnt-body mt-6 max-w-3xl text-sm text-fog md:text-base"
          >
            {PROJETO.subtitulo}.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-bone md:text-base"
          >
            {PROJETO.aluno}
          </motion.p>
        </div>

        {/* rodapé institucional — Brasília, data (capa ABNT) */}
        <motion.div variants={item} className="pb-8 md:pb-10">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-fog/12 pt-5 md:flex-row">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-fog">
              {PROJETO.cidade} · {PROJETO.ano}
            </p>
            <div className="flex items-center gap-3">
              <span className="rounded-sm border border-ember/40 bg-ember/10 px-3 py-1.5 text-[11px] font-bold tracking-[0.2em] text-amberink">
                DATA: {PROJETO.data}
              </span>
              <span className="hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-ash md:flex">
                Início da apresentação
                <ArrowRight className="h-3.5 w-3.5 text-leaf" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ============================================================
   SLIDE 2 — GESTÃO DO PROJETO (BRIEFING) — ETAPA 1
============================================================ */
export function S02() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="paper-grid relative flex h-full flex-col overflow-y-auto overflow-x-hidden bg-night lg:overflow-hidden"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-pine/12 blur-[110px]" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-8 px-6 py-6 md:px-10 lg:min-h-0 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-8">
        {/* coluna esquerda */}
        <div className="flex min-h-0 flex-col justify-between gap-6">
          <Head
            kicker="Etapa 1 · Metodologia"
            num="02"
            tag="Gestão"
            tone="leaf"
            title={
              <>
                GESTÃO DO PROJETO{" "}
                <span className="text-fog">— escopo, metas e cronograma</span>
              </>
            }
            lede="O briefing define o tema central do projeto de extensão: a transformação do Lixão da Estrutural, a instalação de comunidades informais em torno dele e a reconstrução da cidade a partir da coleta seletiva, das cooperativas e da infraestrutura urbana."
          />

          <motion.div variants={item}>
            <PhaseRibbon active={1} />
          </motion.div>

          <motion.div variants={item} className="hidden lg:block">
            <Cite
              tone="green"
              fonte="Fórum de Pró-Reitores de Extensão (FORPROEX, 2012)"
            >
              Extensão é processo educativo, cultural e científico articulado ao
              ensino e à pesquisa, viabilizando a relação transformadora entre
              universidade e sociedade.
            </Cite>
          </motion.div>
        </div>

        {/* coluna direita: cartões do briefing */}
        <div className="grid min-h-0 grid-cols-1 gap-3.5 sm:grid-cols-2">
          <BriefCard
            icon={<ClipboardList className="h-4 w-4" />}
            titulo="Escopo"
          >
            Mapeamento documental do Lixão da Estrutural (DF): 26 anos de
            operação a céu aberto, fechamento em 2018 e reconstrução
            urbano-ambiental da Cidade Estrutural.
          </BriefCard>
          <BriefCard icon={<Target className="h-4 w-4" />} titulo="Objetivo geral">
            Produzir material educativo digital que sensibilize moradores para
            a cidadania ambiental: descarte correto, valorização da coleta
            seletiva e dos catadores.
          </BriefCard>
          <BriefCard icon={<Users className="h-4 w-4" />} titulo="Público-alvo">
            Comunidade da Cidade Estrutural — destaque para ex-carroceiros,
            catadores de materiais recicláveis e estudantes das escolas
            públicas locais.
          </BriefCard>
          <BriefCard icon={<BookOpenCheck className="h-4 w-4" />} titulo="Metas">
            1. Diagnóstico com fontes verificáveis; 2. Narrativa visual com
            100% de fotografias reais licenciadas; 3. Instrumentos de
            avaliação (questionários e lista de presença).
          </BriefCard>
        </div>
      </div>

      {/* cronograma */}
      <motion.div
        variants={item}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 md:px-10 md:pb-10"
      >
        <div className="rounded-xl border border-fog/12 bg-coal/70 p-4 md:p-5">
          <div className="mb-3 flex items-center gap-2">
            <CalendarRange className="h-4 w-4 text-leaf" />
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-fog">
              Cronograma do projeto · Ago — Nov 2026
            </p>
          </div>
          <div className="relative">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, ease: easeSwift, delay: 0.9 }}
              className="absolute left-0 right-0 top-[13px] hidden h-px origin-left bg-gradient-to-r from-leaf/60 via-river/50 to-fog/30 md:block"
            />
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ["AGO", "Pesquisa e levantamento histórico fotográfico do acervo real"],
                ["SET", "Desenvolvimento da mídia educativa (slides) e revisão normativa"],
                ["OUT", "Testagem com tutor e colegas; correções e ajustes finais"],
                ["NOV", "Implementação na comunidade + coleta de indicadores"],
              ].map(([mes, tarefa], i) => (
                <div key={mes} className="relative flex gap-3 md:block">
                  <span
                    className={cn(
                      "z-10 mt-[4px] block h-[11px] w-[11px] shrink-0 rounded-full border-2 bg-night md:mb-3",
                      i < 2 ? "border-leaf" : i === 2 ? "border-river" : "border-fog/50",
                    )}
                  />
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.3em] text-paper">{mes}/2026</p>
                    <p className="abnt-body mt-1 text-[11px] leading-snug text-ash">{tarefa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function BriefCard({
  icon,
  titulo,
  children,
}: {
  icon: React.ReactNode;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={item}
      className="group rounded-xl border border-fog/12 bg-graphite/70 p-4 transition-colors hover:border-leaf/35 md:p-5"
    >
      <div className="mb-2.5 flex items-center gap-2 text-leaf">
        {icon}
        <h3 className="text-[11px] font-bold uppercase tracking-[0.26em] text-mint">
          {titulo}
        </h3>
      </div>
      <p className="abnt-body text-[12.5px] text-fog">{children}</p>
    </motion.div>
  );
}

/* ============================================================
   SLIDE 3 — O PROBLEMA: O LIXÃO E A POLUIÇÃO
============================================================ */
export function S03() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="page-wash relative flex h-full flex-col overflow-y-auto overflow-x-hidden bg-night lg:overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-48 top-1/3 h-[30rem] w-[30rem] rounded-full bg-hazard/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-56 w-full bg-gradient-to-b from-hazard/6 to-transparent" />

      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-6 py-8 md:px-10 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:py-10">
        <div className="flex min-h-0 flex-col justify-center gap-6">
          <Head
            kicker="O problema"
            num="03"
            tag="Diagnóstico"
            tone="hazard"
            title={
              <>
                O LIXÃO DA ESTRUTURAL{" "}
                <span className="text-fog">e a poluição a céu aberto</span>
              </>
            }
            lede="Instalado a poucos quilômetros do centro de Brasília, o aterro controlado da Estrutural degradou-se até tornar-se um lixão — o maior a céu aberto da América Latina — recebendo resíduos de todo o Distrito Federal."
          />

          <motion.div variants={item} className="grid grid-cols-3 gap-4 md:gap-6">
            <Stat value={26} suffix=" anos" tone="hazard" label="de operação a céu aberto (1991–2018)" />
            <Stat value={2.5} suffix=" mil t" tone="ember" label="de lixo despejado por dia" note="volume médio estimado no auge" decimals={1} />
            <div className="flex flex-col gap-1.5">
              <span className="text-2xl font-bold tracking-tight text-hazard md:text-3xl">
                nº 1
                <br />
                da AL
              </span>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-fog">
                maior lixão a céu aberto da América Latina
              </p>
            </div>
          </motion.div>

          <motion.ul variants={item} className="abnt-body space-y-2 text-[13px] text-fog">
            {[
              "Chorume contaminando solo, lençol freático e cursos d'água do entorno.",
              "Queimadas espontâneas e fumaça tóxica sobre as casas da comunidade.",
              "Proliferação de urubus e vetores associados a riscos sanitários.",
              "Trabalho informal e infantil na catação, sem qualquer proteção.",
            ].map((t) => (
              <li key={t} className="flex gap-2.5">
                <span className="mt-[7px] block h-1.5 w-1.5 shrink-0 rotate-45 bg-hazard/80" />
                {t}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="hidden xl:block">
            <Cite
              tone="red"
              fonte="G1 Distrito Federal — série jornalística sobre o fechamento (G1, 2018)"
            >
              Maior lixão a céu aberto da América Latina, a Estrutural operou
              por 26 anos e chegou a receber cerca de 2,5 mil toneladas de
              lixo por dia.
            </Cite>
          </motion.div>
        </div>

        <div className="grid min-h-0 grid-cols-1 content-start gap-4">
          <motion.div variants={item} className="min-h-0">
            <Figure
              foto={FOTOS.lixaoCatadores}
              num="1"
              ratio="aspect-[16/10]"
              xlHeight="lg:aspect-auto lg:h-[298px]"
              tint="warm"
            />
          </motion.div>
          <motion.div variants={item} className="hidden min-h-0 lg:block">
            <div className="grid grid-cols-2 gap-4">
              <Figure
                foto={FOTOS.esgotoAberto}
                num="2"
                ratio="aspect-[16/10]"
                xlHeight="lg:aspect-auto lg:h-[186px]"
              />
              <Figure
                foto={FOTOS.urubus}
                num="3"
                ratio="aspect-[16/10]"
                xlHeight="lg:aspect-auto lg:h-[186px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

/* ============================================================
   SLIDE 4 — CONTEXTO HISTÓRICO: A CIDADE DAS CARROÇAS
============================================================ */
export function S04() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="relative flex h-full flex-col overflow-y-auto overflow-x-hidden bg-night lg:overflow-hidden"
    >
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-ember/8 blur-[110px]" />
      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-6 py-8 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-10">
        <div className="flex min-h-0 flex-col justify-center gap-6">
          <Head
            kicker="Contexto histórico"
            num="04"
            tag="Origem"
            tone="neutral"
            title={
              <>
                Nascida como ocupação,{" "}
                <span className="text-fog">desenhada para carroças</span>
              </>
            }
            lede="No início dos anos 1990, trabalhadores ligados ao lixão ocuparam os terrenos vizinhos e a Cidade Estrutural nasceu como invasão. Sem plano urbano, suas ruas surgiram pequenas e estreitas — dimensionadas apenas para a passagem das carroças e dos carroceiros que transportavam entulho e recicláveis."
          />

          {/* linha do tempo */}
          <motion.ol variants={item} className="relative space-y-0">
            {[
              ["1991", "Origem da ocupação junto ao lixão recém-instalado; casas de madeira e lona."],
              ["1990–00", "Consolidação: ruas estreitas traçadas para carroças; renda da catação e do fretamento."],
              ["2010", "PNRS (Lei nº 12.305/2010) determina o fim de todos os lixões a céu aberto do país."],
              ["2015", "Alargamento de ruas estreitas e limpeza urbana pelo GDF (Agência Brasília, 2015)."],
              ["2018", "Encerramento do Lixão da Estrutural em 19–20 de janeiro, após 26 anos (G1, 2018)."],
            ].map(([ano, texto], i) => (
              <li key={ano} className="relative flex gap-4 pb-4 last:pb-0">
                {i < 4 && (
                  <motion.span
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 + i * 0.18, ease: easeSwift }}
                    className="absolute left-[27px] top-7 h-[calc(100%-18px)] w-px origin-top bg-gradient-to-b from-ember/60 to-fog/20"
                  />
                )}
                <span className="flex h-7 w-[54px] shrink-0 items-center justify-center rounded-sm border border-ember/45 bg-ember/10 text-[11px] font-bold tracking-widest text-amberink">
                  {ano}
                </span>
                <p className="abnt-body pt-1 text-[12.5px] text-fog">{texto}</p>
              </li>
            ))}
          </motion.ol>
        </div>

        <div className="flex min-h-0 flex-col justify-center gap-4">
          <motion.div variants={item}>
            <Figure
              foto={FOTOS.carretaPB}
              num="4"
              ratio="aspect-[16/10]"
              xlHeight="lg:aspect-auto lg:h-[324px]"
            />
          </motion.div>
          <motion.div variants={item} className="hidden lg:block">
            <Figure
              foto={FOTOS.ruaEstreita}
              num="5"
              ratio="aspect-[16/10]"
              xlHeight="lg:aspect-auto lg:h-[210px]"
              tint="warm"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
