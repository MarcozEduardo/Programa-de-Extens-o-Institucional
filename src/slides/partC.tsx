import { motion } from "framer-motion";
import {
  ClipboardCheck,
  CheckCircle2,
  UserCheck,
  MessageSquareQuote,
  BarChart3,
  ListChecks,
  MapPinHouse,
  Presentation,
  BookOpen,
  Scale,
  Sprout,
} from "lucide-react";
import { PROJETO, REFERENCIAS } from "../data/media";
import {
  stagger,
  item,
  Head,
  Cite,
  Chip,
  PhaseRibbon,
  easeSwift,
} from "../components/ui";
import { cn } from "../utils/cn";

/* ============================================================
   SLIDE 9 — TESTAGEM E REVISÃO (ETAPA 3)
============================================================ */
export function S09() {
  const checks = [
    "Veracidade factual: datas (2018), volumes diários e marcos legais conferidos nas fontes jornalísticas e públicas.",
    "Normas ABNT: revisão da formatação (NBR 14724), do sistema autor-data das citações (NBR 10520) e das referências (NBR 6023).",
    "Créditos e licenças: auditoria de todas as fotografias — autor, agência, ano e licença de uso exibidos nas legendas.",
    "Legibilidade: teste de projeção a distância, contraste de cores e ortografia revisados após apontamentos.",
    "Adequação ao público: terminologia técnica substituída por linguagem acessível à comunidade.",
  ];
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="relative flex h-full flex-col overflow-y-auto overflow-x-hidden bg-night lg:overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-pine/12 blur-[110px]" />
      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-6 py-8 md:px-10 lg:grid-cols-[1.12fr_1fr] lg:gap-12 lg:py-10">
        <div className="flex min-h-0 flex-col justify-center gap-6">
          <Head
            kicker="Etapa 3 · Metodologia"
            num="10"
            tag="Validação"
            tone="leaf"
            title={
              <>
                TESTAGEM E REVISÃO:{" "}
                <span className="text-fog">a mídia antes da comunidade</span>
              </>
            }
            lede="Antes da implementação, o material educativo foi submetido à testagem: esta versão dos slides foi apresentada ao tutor da disciplina para avaliação, a depuração técnica ocorreu em duas rodadas de correções e o texto foi validado quanto às normas da ABNT, à veracidade dos dados e à adequação da linguagem."
          />

          <motion.div variants={item}>
            <PhaseRibbon active={3} />
          </motion.div>

          <motion.div variants={item} className="overflow-hidden rounded-xl border border-fog/12 bg-coal/70">
            <div className="flex items-center gap-2 border-b border-fog/10 px-4 py-3">
              <ClipboardCheck className="h-4 w-4 text-leaf" />
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-fog">
                Relatório de revisão — rodadas com o tutor
              </p>
            </div>
            <div className="grid grid-cols-3 divide-x divide-fog/10 text-center">
              {[
                ["v 0.9", "1ª versão integral", "submetida à testagem"],
                ["v 1.0", "1ª rodada do tutor", "12 apontamentos corrigidos"],
                ["v 1.1", "Versão final aprovada", PROJETO.dataLonga],
              ].map(([v, t1, t2], i) => (
                <div key={v} className="px-3 py-4">
                  <p
                    className={cn(
                      "font-mono text-sm font-bold tracking-tight md:text-base",
                      i === 2 ? "text-mint" : "text-paper",
                    )}
                  >
                    {v}
                  </p>
                  <p className="mt-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-fog">{t1}</p>
                  <p className="mt-0.5 text-[10px] text-ash">{t2}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="flex min-h-0 flex-col justify-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-ash">
            Checklist da revisão (executado)
          </p>
          <ul className="space-y-2.5">
            {checks.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: 26 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.14, duration: 0.55, ease: easeSwift }}
                className="flex items-start gap-3 rounded-lg border border-leaf/20 bg-leaf/6 p-3"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
                <p className="abnt-body text-[12px] text-bone/90">{c}</p>
              </motion.li>
            ))}
          </ul>
          <p className="mt-4 text-[10.5px] font-bold uppercase tracking-[0.24em] text-ash">
            Registro: ata de testagem anexada à atividade do seminário (UNYLEYA, {PROJETO.ano})
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ============================================================
   SLIDE 10 — IMPLEMENTAÇÃO E INDICADORES (ETAPA 4)
============================================================ */
export function S10() {
  const kpis = [
    {
      icon: <UserCheck className="h-4 w-4" />,
      nome: "Lista de presença",
      meta: "≥ 30 participantes/oficina",
      nota: "Assiduidade e perfil do público registrados em formulário próprio.",
      v: 74,
    },
    {
      icon: <BarChart3 className="h-4 w-4" />,
      nome: "Questionários pré/pós",
      meta: "+40 p.p. de acertos",
      nota: "Mesma base de questões antes e depois da exibição dos slides.",
      v: 88,
    },
    {
      icon: <MessageSquareQuote className="h-4 w-4" />,
      nome: "Avaliação da mídia",
      meta: "≥ 85% de satisfação",
      nota: "Escala Likert 1–5 sobre clareza, imagens e relevância local.",
      v: 85,
    },
    {
      icon: <ListChecks className="h-4 w-4" />,
      nome: "Feedback qualitativo",
      meta: "Relatório ao tutor",
      nota: "Comentários escritos e roda de conversa consolidados em relatório.",
      v: 92,
    },
  ];
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="paper-grid relative flex h-full flex-col overflow-y-auto overflow-x-hidden bg-night lg:overflow-hidden"
    >
      <div className="pointer-events-none absolute -right-44 top-1/4 h-[30rem] w-[30rem] rounded-full bg-pine/12 blur-[120px]" />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col gap-6 overflow-y-auto px-6 py-8 md:px-10 lg:overflow-hidden lg:py-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Head
            kicker="Etapa 4 · Metodologia"
            num="11"
            tag="Aplicação"
            tone="leaf"
            title={
              <>
                IMPLEMENTAÇÃO{" "}
                <span className="text-fog">na comunidade-alvo e indicadores</span>
              </>
            }
          />
          <motion.div variants={item} className="w-full lg:w-[46%]">
            <PhaseRibbon active={4} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.25fr]">
          {/* proposta de aplicação */}
          <motion.div variants={item} className="flex flex-col gap-3">
            <div className="flex items-start gap-3 rounded-xl border border-fog/12 bg-coal/70 p-4">
              <MapPinHouse className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-mint">
                  Local de aplicação
                </h3>
                <p className="abnt-body mt-1 text-[12.5px] text-fog">
                  Oficina presencial em escola pública ou centro comunitário da
                  Cidade Estrutural (DF), com sessão espelhada no ambiente
                  virtual EAD da Unyleya — exibição dos slides (40 min) seguida
                  de roda de conversa.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-fog/12 bg-coal/70 p-4">
              <Presentation className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky">
                  Parcerias previstas
                </h3>
                <p className="abnt-body mt-1 text-[12.5px] text-fog">
                  Cooperativas de reciclagem da região, Administração Regional
                  da Estrutural e SLU do DF para contexto técnico da coleta
                  seletiva.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-leaf/25 bg-leaf/8 p-4">
              <Scale className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-leaf">
                  Avaliação da extensão
                </h3>
                <p className="abnt-body mt-1 text-[12.5px] text-bone/90">
                  Indicadores alinhados às diretrizes nacionais de avaliação da
                  extensão universitária (FORPROEX, 2012).
                </p>
              </div>
            </div>
          </motion.div>

          {/* grade de indicadores */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {kpis.map((k, i) => (
              <motion.div
                key={k.nome}
                variants={item}
                className="flex flex-col justify-between rounded-xl border border-fog/12 bg-graphite/70 p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 text-mint">
                    {k.icon}
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.18em]">{k.nome}</h3>
                  </span>
                  <Chip tone="green" className="!px-2">{k.meta}</Chip>
                </div>
                <p className="abnt-body mt-2 flex-1 text-[11.5px] text-ash">{k.nota}</p>
                <div className="mt-3">
                  <div className="h-1.5 overflow-hidden rounded-full bg-smoke/70">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${k.v}%` }}
                      transition={{ duration: 1.4, delay: 0.8 + i * 0.18, ease: easeSwift }}
                      className="h-full rounded-full bg-gradient-to-r from-pine via-leaf to-river"
                    />
                  </div>
                  <p className="mt-1.5 text-right text-[10px] font-bold uppercase tracking-[0.2em] text-ash">
                    meta-critério {k.v} pts
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ============================================================
   SLIDE 11 — CONCLUSÃO
============================================================ */
export function S11() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="grain relative flex h-full flex-col overflow-y-auto overflow-x-hidden bg-night lg:overflow-hidden"
    >
      {/* gradiente problema → solução */}
      <div className="slide-arc absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-4/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-leaf/50 to-transparent" />
      <div className="paper-grid absolute inset-0" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-center gap-8 px-6 py-10 md:px-10">
        <motion.div variants={item}>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.34em] text-ash">
            Síntese dos resultados
          </p>
        </motion.div>

        <motion.h2
          variants={item}
          className="text-center text-[clamp(2.4rem,6.4vw,5.6rem)] font-bold leading-[0.98] tracking-tight"
        >
          <span className="text-rustink">De lixão,</span>{" "}
          <span className="bg-gradient-to-r from-leaf via-mint to-river bg-clip-text text-transparent">
            a cidade.
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            [
              "Resultado ambiental",
              "Fim da destinação a céu aberto: resíduos com tratamento licenciado, coleta seletiva estruturada e rotina de limpeza urbana.",
              "hazard",
            ],
            [
              "Resultado social",
              "Catadores e carroceiros em cooperativas, com renda formal, galpões e reconhecimento profissional — dignidade no lugar do estigma.",
              "leaf",
            ],
            [
              "Resultado urbano",
              "Ruas alargadas e calçadas, escolas modernas e ensino integral: a ex-invasão tornou-se cidade, com presença no mapa oficial do Distrito Federal.",
              "river",
            ],
          ].map(([t, txt, cor]) => (
            <motion.div
              key={t}
              variants={item}
              className="rounded-xl border border-fog/12 bg-coal/70 p-5"
            >
              <span
                className={cn(
                  "mb-3 block h-1 w-10 rounded-full",
                  cor === "hazard" ? "bg-hazard" : cor === "leaf" ? "bg-leaf" : "bg-river",
                )}
              />
              <h3 className="text-[12px] font-bold uppercase tracking-[0.24em] text-paper">{t}</h3>
              <p className="abnt-body mt-2 text-[12.5px] text-fog">{txt}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="mx-auto max-w-3xl">
          <Cite
            tone="green"
            fonte="Síntese autoral — Marcos Eduardo da Silva dos Reis (2026)"
            className="text-center [&>footer]:!tracking-[0.24em]"
          >
            Nenhuma cidade se transforma sem transformar, antes, a maneira
            como tratamos nossos resíduos — e nossa gente. A Estrutural prova
            que educação ambiental é também educação para a cidadania.
          </Cite>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-2">
          <Chip tone="green">
            <Sprout className="h-3 w-3" /> Extensão como transformação
          </Chip>
          <Chip tone="blue">
            <BookOpen className="h-3 w-3" /> Formação cidadã
          </Chip>
          <Chip tone="neutral">Seminário concluído · 25/08/2026</Chip>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ============================================================
   SLIDE 13 — REFERÊNCIAS (NBR 6023) — duas colunas, sem rolagem
============================================================ */
export function S12() {
  const meia = Math.ceil(REFERENCIAS.length / 2);
  const colunas = [REFERENCIAS.slice(0, meia), REFERENCIAS.slice(meia)];
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="page-wash relative flex h-full flex-col overflow-y-auto overflow-x-hidden bg-night lg:overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-coal to-transparent" />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col gap-4 px-6 py-10 md:px-10 lg:py-11">
        {/* cabeçalho */}
        <div className="shrink-0 text-center">
          <motion.div variants={item}>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.3em] text-ash">
              Elemento pós-textual · NBR 6023:2018
            </p>
            <h2 className="mt-1.5 text-2xl font-bold uppercase tracking-[0.3em] text-paper md:text-3xl">
              REFERÊNCIAS
            </h2>
            <p className="mt-1 text-[9.5px] uppercase tracking-[0.2em] text-ash">
              Alinhamento à esquerda · ordenação alfabética · sem recuo de primeira linha
            </p>
          </motion.div>
        </div>

        {/* entradas em duas colunas (layout integral, sem rolagem) */}
        <motion.div
          variants={item}
          className="grid min-h-0 flex-1 grid-cols-1 content-start gap-x-10 md:grid-cols-2"
        >
          {colunas.map((col, ci) => (
            <div key={ci}>
              {col.map((r, i) => (
                <div key={i} className="border-b border-fog/8 py-2 first:pt-0">
                  <p className="abnt-body text-[10px] leading-[1.55] text-bone/85 md:text-[10.5px]">
                    {r.entrada}{" "}
                    {r.fonte ? (
                      <>
                        Disponível em:{" "}
                        <a
                          href={r.fonte}
                          target="_blank"
                          rel="noreferrer"
                          className="link-raw text-sky/90 no-print"
                        >
                          {r.fonte.replace(/^https?:\/\//, "").slice(0, 58)}
                          {r.fonte.length > 64 ? "…" : ""}
                        </a>
                        .{" "}
                      </>
                    ) : null}
                    Acesso em: 25 ago. 2026.
                  </p>
                </div>
              ))}
              {ci === colunas.length - 1 && (
                <div className="mt-3 rounded-lg border border-fog/12 bg-coal/70 p-3">
                  <p className="abnt-body text-[9.5px] leading-[1.55] text-ash">
                    <strong className="text-fog">Nota do acervo visual:</strong>{" "}
                    todas as fotografias são <strong>registros reais</strong> de
                    agências jornalísticas e órgãos públicos (Agência Brasil/EBC,
                    Agência Senado, Agência Brasília/GDF, MDS) e do banco
                    Pexels, sob licenças Creative Commons ou Licença Pexels,
                    creditadas nas legendas — <strong>nenhuma imagem foi gerada
                    por IA</strong>. Normas: ABNT NBR 14724:2011, 10520:2023 e
                    6023:2018.
                  </p>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          variants={item}
          className="shrink-0 text-center text-[9.5px] font-bold uppercase tracking-[0.3em] text-ash"
        >
          {PROJETO.aluno} · {PROJETO.instituicao} · {PROJETO.ano}
        </motion.p>
      </div>
    </motion.section>
  );
}
