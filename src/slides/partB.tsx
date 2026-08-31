import { motion } from "framer-motion";
import {
  Recycle,
  Broom,
  Warehouse,
  BadgeCheck,
  HeartHandshake,
  GraduationCap,
  School,
  MapPinned,
  Route,
  MonitorPlay,
  Camera,
  Accessibility,
  Palette,
  FileCheck2,
  SearchCheck,
} from "lucide-react";
import { FOTOS } from "../data/media";
import {
  stagger,
  item,
  Head,
  Figure,
  Stat,
  Cite,
  Chip,
  PhaseRibbon,
} from "../components/ui";
import { cn } from "../utils/cn";

/* ============================================================
   SLIDE 5 — A AÇÃO: COLETA SELETIVA E LIMPEZA URBANA
============================================================ */
export function S05() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="page-wash relative flex h-full flex-col overflow-y-auto overflow-x-hidden bg-night lg:overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-deepwater/18 blur-[110px]" />
      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-6 py-8 md:px-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:py-10">
        {/* coluna de fotos */}
        <div className="flex min-h-0 flex-col justify-center gap-4">
          <motion.div variants={item}>
            <Figure
              foto={FOTOS.coopTruck}
              num="6"
              ratio="aspect-[16/10]"
              xlHeight="lg:aspect-auto lg:h-[296px]"
              tint="blue"
            />
          </motion.div>
          <motion.div variants={item} className="hidden lg:block">
            <Figure
              foto={FOTOS.limpezaUrbana}
              num="7"
              ratio="aspect-[16/10]"
              xlHeight="lg:aspect-auto lg:h-[248px]"
              tint="blue"
            />
          </motion.div>
        </div>

        {/* coluna de conteúdo */}
        <div className="flex min-h-0 flex-col justify-center gap-6">
          <Head
            kicker="A ação"
            num="05"
            tag="Intervenção"
            tone="river"
            title={
              <>
                A AÇÃO: coleta seletiva{" "}
                <span className="text-fog">e limpeza urbana no DF</span>
              </>
            }
            lede="A virada começou quando a lei encontrou a cidade: cumprindo a Política Nacional de Resíduos Sólidos, o DF fechou o lixão e implantou um sistema moderno de manejo dos resíduos — agora com destinação ambientalmente adequada (BRASIL, 2010)."
          />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ActionItem
              icon={<Warehouse className="h-4 w-4" />}
              tom="river"
              titulo="Fechamento do lixão (2018)"
            >
              Após 26 anos, o Lixão da Estrutural foi desativado (19–20 jan.);
              os resíduos passaram ao aterro sanitário licenciado.
            </ActionItem>
            <ActionItem
              icon={<Recycle className="h-4 w-4" />}
              tom="leaf"
              titulo="Coleta seletiva implantada"
            >
              Caminhões e cooperativas passam a percorrer os bairros
              recolhendo recicláveis separados pela população.
            </ActionItem>
            <ActionItem
              icon={<Broom className="h-4 w-4" />}
              tom="river"
              titulo="Limpeza urbana permanente"
            >
              Mutirões de capina, varrição, retirada de entulho e lavagem —
              com alargamento das antigas ruas estreitas.
            </ActionItem>
            <ActionItem
              icon={<BadgeCheck className="h-4 w-4" />}
              tom="leaf"
              titulo="Galpões de triagem"
            >
              Sete galpões foram previstos para receber os catadores
              credenciados no processo de transição (SENADO FEDERAL, 2017).
            </ActionItem>
          </div>

          <motion.div variants={item} className="flex flex-wrap gap-2">
            <Chip tone="blue">Lei nº 12.305/2010</Chip>
            <Chip tone="green">Gestão compartilhada</Chip>
            <Chip tone="neutral">SLU · Administração Regional</Chip>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function ActionItem({
  icon,
  titulo,
  children,
  tom,
}: {
  icon: React.ReactNode;
  titulo: string;
  children: React.ReactNode;
  tom: "river" | "leaf";
}) {
  return (
    <motion.div
      variants={item}
      className="rounded-xl border border-fog/12 bg-coal/70 p-4 transition-colors hover:border-river/40"
    >
      <div
        className={cn(
          "mb-2 flex items-center gap-2",
          tom === "river" ? "text-sky" : "text-mint",
        )}
      >
        {icon}
        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em]">{titulo}</h3>
      </div>
      <p className="abnt-body text-[12px] text-fog">{children}</p>
    </motion.div>
  );
}

/* ============================================================
   SLIDE 6 — IMPACTO SOCIAL
============================================================ */
export function S06() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="paper-grid relative flex h-full flex-col overflow-y-auto overflow-x-hidden bg-night lg:overflow-hidden"
    >
      <div className="pointer-events-none absolute -right-48 -top-32 h-[30rem] w-[30rem] rounded-full bg-pine/14 blur-[120px]" />
      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-6 py-8 md:px-10 lg:grid-cols-[1.08fr_1fr] lg:gap-12 lg:py-10">
        <div className="flex min-h-0 flex-col justify-center gap-6">
          <Head
            kicker="Impacto social"
            num="06"
            tag="Pessoas"
            tone="leaf"
            title={
              <>
                Da margem à profissão:{" "}
                <span className="text-fog">dignidade para carroceiros e catadores</span>
              </>
            }
            lede="Quem sobrevivia da catação informal foi organizado em cooperativas e associações credenciadas — com galpão, equipamento de proteção, renda formal e, sobretudo, reconhecimento. A carroça deu lugar ao caminhão; a marginalidade, ao registro profissional."
          />

          <motion.div variants={item} className="grid grid-cols-3 gap-4">
            <Stat
              value={7}
              label="galpões de triagem previstos na transição"
              note="destino planejado aos catadores organizados (SENADO, 2017)"
              tone="leaf"
            />
            <div className="flex flex-col gap-1.5">
              <span className="text-3xl font-bold tracking-tight text-mint md:text-4xl">
                CBO
                <br />
                5192-05
              </span>
              <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-fog">
                Catador de material reciclável: profissão reconhecida
              </p>
            </div>
            <Stat
              value={100}
              suffix="%"
              label="dos recicláveis coletados por quem morava da catação"
              tone="river"
            />
          </motion.div>

          <motion.div variants={item}>
            <Cite
              tone="green"
              fonte="Coleção ‘Catadores de Materiais Recicláveis’ (MUSEU DA PESSOA, 2017)"
            >
              A cooperativa mudou a perspectiva de vida: quem era visto como
              excluído passou a ser visto como sustentável — trabalhador
              ambiental.
            </Cite>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-2">
            <Chip tone="green">
              <HeartHandshake className="h-3 w-3" /> Cooperativismo
            </Chip>
            <Chip tone="green">EPI e galpões</Chip>
            <Chip tone="green">Renda formal</Chip>
            <Chip tone="blue">Fim gradual do trabalho infantil</Chip>
          </motion.div>
        </div>

        <div className="flex min-h-0 flex-col justify-center">
          <motion.div variants={item}>
            <Figure foto={FOTOS.catadores2017} num="8" ratio="aspect-[16/11]" tint="green" />
          </motion.div>
          <motion.p
            variants={item}
            className="abnt-body mt-4 rounded-lg border border-leaf/25 bg-leaf/8 p-4 text-[12px] text-bone/90"
          >
            <strong className="text-mint">Leitura do projeto:</strong> a
            dignidade profissional dos carroceiros e catadores é o coração do
            caso Estrutural — a mesma população que sustentava a cidade nos
            anos do lixão foi incluída como protagonista da solução.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}

/* ============================================================
   SLIDE 7 — IMPACTO URBANO
============================================================ */
export function S07() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="page-wash relative flex h-full flex-col overflow-y-auto overflow-x-hidden bg-night lg:overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-deepwater/18 blur-[110px]" />
      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-6 py-8 md:px-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:py-10">
        <div className="flex min-h-0 flex-col justify-center gap-6">
          <Head
            kicker="Impacto urbano"
            num="07"
            tag="Cidade"
            tone="river"
            title={
              <>
                Ruas alargadas, escolas modernas:{" "}
                <span className="text-fog">a prova de que funcionou</span>
              </>
            }
            lede="Onde havia lixo e carroça, hoje há infraestrutura: vias alargadas e pavimentadas, escolas públicas modernizadas e unidades de ensino em período integral. A ex-invasão entrou para o mapa oficial da capital — resultado direto da desativação acompanhada de investimento urbano."
          />

          <motion.div variants={item} className="space-y-3">
            {[
              {
                icon: <Route className="h-4 w-4" />,
                t: "Ruas antes desenhadas para carroças ganham alargamento, calçamento e acesso a viaturas (AGÊNCIA BRASÍLIA, 2015).",
              },
              {
                icon: <School className="h-4 w-4" />,
                t: "Escola Classe 02 em período integral já atendia alunos com 4 refeições diárias (MINISTÉRIO DO DESENVOLVIMENTO SOCIAL, 2014).",
              },
              {
                icon: <GraduationCap className="h-4 w-4" />,
                t: "Novas unidades escolares modernas passam a compor a infraestrutura educacional da região, consolidando a transformação.",
              },
            ].map(({ icon, t }) => (
              <div
                key={t}
                className="flex items-start gap-3 rounded-lg border border-fog/10 bg-coal/60 p-3.5"
              >
                <span className="mt-0.5 text-sky">{icon}</span>
                <p className="abnt-body text-[12.5px] text-fog">{t}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-2">
            <Chip tone="blue">
              <MapPinned className="h-3 w-3" /> Cidade regularizada
            </Chip>
            <Chip tone="blue">Infraestrutura educacional</Chip>
            <Chip tone="green">Urbanismo participativo</Chip>
          </motion.div>
        </div>

        <div className="flex min-h-0 flex-col justify-center gap-4">
          <motion.div variants={item}>
            <Figure
              foto={FOTOS.escolaEC02}
              num="9"
              ratio="aspect-[16/10]"
              xlHeight="lg:aspect-auto lg:h-[318px]"
              tint="blue"
            />
          </motion.div>
          <motion.div variants={item} className="hidden lg:block">
            <Figure
              foto={FOTOS.escolaEC02refeicao}
              num="10"
              ratio="aspect-[16/10]"
              xlHeight="lg:aspect-auto lg:h-[216px]"
              tint="green"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

/* ============================================================
   SLIDE 8 — DESENVOLVIMENTO (ETAPA 2): O MATERIAL EDUCATIVO
============================================================ */
export function S08() {
  const decis = [
    {
      icon: <MonitorPlay className="h-4 w-4" />,
      titulo: "Formato da mídia",
      txt: "Apresentação expositiva digital em 13 slides (16:9), projetável em oficinas comunitárias e navegável no EAD, com versões exportáveis em PDF e PowerPoint (.pptx).",
      tom: "blue",
    },
    {
      icon: <Camera className="h-4 w-4" />,
      titulo: "Compromisso fotográfico",
      txt: "Proibição absoluta de imagens geradas por IA: apenas fotografias reais — arquivo jornalístico/do GDF — com autor, agência, ano e licença.",
      tom: "green",
    },
    {
      icon: <Palette className="h-4 w-4" />,
      titulo: "Paleta narrativa",
      txt: "Contraste semântico: cinzas, vermelhos e âmbar no bloco do problema; verde e azul (tom esperança) no bloco da solução.",
      tom: "blue",
    },
    {
      icon: <FileCheck2 className="h-4 w-4" />,
      titulo: "Rigor normativo",
      txt: "Citações em sistema autor-data (NBR 10520), figuras com legenda e fonte (NBR 14724) e referências na NBR 6023.",
      tom: "green",
    },
    {
      icon: <Accessibility className="h-4 w-4" />,
      titulo: "Acessibilidade",
      txt: "Contraste AA, tipografia de leitura à distância, texto alternativo nas imagens e navegação completa por teclado.",
      tom: "blue",
    },
    {
      icon: <SearchCheck className="h-4 w-4" />,
      titulo: "Verificação factual",
      txt: "Datas, volumes e marcos legais checados em veículos jornalísticos (G1), órgãos públicos (SLU/GDF) e fontes legislativas.",
      tom: "green",
    },
  ] as const;

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="paper-grid relative flex h-full flex-col overflow-y-auto overflow-x-hidden bg-night lg:overflow-hidden"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[26rem] w-[26rem] rounded-full bg-deepwater/14 blur-[110px]" />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col gap-6 px-6 py-8 md:px-10 lg:py-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Head
            kicker="Etapa 2 · Metodologia"
            num="09"
            tag="Construção"
            tone="river"
            title={
              <>
                DESENVOLVIMENTO:{" "}
                <span className="text-fog">a produção do material educativo digital</span>
              </>
            }
          />
          <motion.div variants={item} className="w-full lg:w-[46%]">
            <PhaseRibbon active={2} />
          </motion.div>
        </div>

        <motion.p variants={item} className="abnt-body max-w-3xl text-sm text-fog">
          A mídia escolhida foi o slide digital: barato, replicável e de alta
          capilaridade em oficinas comunitárias. Cada decisão de projeto
          obedeceu a um critério educativo-tecnológico explícito:
        </motion.p>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {decis.map((d, i) => (
            <motion.div
              key={d.titulo}
              variants={item}
              custom={i}
              className="group rounded-xl border border-fog/12 bg-graphite/70 p-4 transition-colors hover:border-river/40 md:p-5"
            >
              <div
                className={cn(
                  "mb-2.5 flex items-center gap-2",
                  d.tom === "blue" ? "text-sky" : "text-mint",
                )}
              >
                {d.icon}
                <h3 className="text-[11px] font-bold uppercase tracking-[0.22em]">{d.titulo}</h3>
              </div>
              <p className="abnt-body text-[12px] text-fog">{d.txt}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={item}
          className="flex items-center gap-3 rounded-xl border border-river/25 bg-river/8 p-4"
        >
          <span className="hidden h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-river to-leaf sm:block" />
          <p className="abnt-body text-[12.5px] text-bone/90">
            <strong className="text-sky">Produto resultante:</strong> esta
            própria apresentação — um instrumento de extensão universitária
            que une narrativa visual verificável, rigor acadêmico e linguagem
            acessível à comunidade da Cidade Estrutural.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
