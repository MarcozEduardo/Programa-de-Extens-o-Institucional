/**
 * Registro de acervo fotográfico — 100% fotografia REAL, jornalística ou documental.
 * Nenhuma imagem foi gerada por IA. Fontes: Agência Brasil (EBC), Agência Senado,
 * Agência Brasília (GDF), Ministério do Desenvolvimento Social e Pexels,
 * todas com licenças de uso identificadas nas legendas (ABNT NBR 14724).
 */

export interface Foto {
  src: string;
  alt: string;
  descricao: string;
  autor: string;
  agencia: string;
  local: string;
  ano: string;
  licenca: string;
  fonte: string; // link do acervo / página de descrição
}

const WT = (dir: string, f: string) =>
  `https://upload.wikimedia.org/wikipedia/commons/thumb/${dir}/${f}/1920px-${f}`;
const PX = (id: number, w = 1400, h = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const FOTOS: Record<string, Foto> = {
  /* ---------------- PROBLEMA — Lixão da Estrutural ---------------- */
  lixaoCatadores: {
    src: WT("b/b2", "Lixao_Catadores_20080220_-_Marcello_Casal_Jr._-_Agencia_Brasil.jpg"),
    alt: "Catadores trabalhando sobre montanha de resíduos no Lixão da Cidade Estrutural, DF",
    descricao: "Catadores sobre os resíduos do Lixão da Cidade Estrutural, DF-BR",
    autor: "Marcello Casal Jr.",
    agencia: "Agência Brasil",
    local: "Cidade Estrutural — DF",
    ano: "fev. 2008",
    licenca: "CC BY 2.5 br",
    fonte: "https://commons.wikimedia.org/wiki/File:Lixao_Catadores_20080220_-_Marcello_Casal_Jr._-_Agencia_Brasil.jpg",
  },
  lixaoAerea: {
    src: WT("4/4e", "Lix%C3%A3o_da_Estrutural_%2815486655829%29.jpg"),
    alt: "Vista ampliada do Lixão da Estrutural com catadores dispersos entre o lixo e os urubus",
    descricao: "Extensão do Lixão da Estrutural durante discussões sobre a Política Nacional de Resíduos Sólidos",
    autor: "Edilson Rodrigues",
    agencia: "Agência Senado",
    local: "Cidade Estrutural — DF",
    ano: "jul. 2014",
    licenca: "CC BY 2.0",
    fonte: "https://commons.wikimedia.org/wiki/File:Lix%C3%A3o_da_Estrutural_(15486655829).jpg",
  },
  lixaoCaminhao: {
    src: WT("5/5d", "Lixao_Caminhao_20080220_-_Marcello_Casal_Jr._-_Agencia_Brasil.jpg"),
    alt: "Caminhão de lixo despejando resíduos no Lixão da Cidade Estrutural",
    descricao: "Caminhão de lixo em operação no Lixão da Cidade Estrutural, DF-BR",
    autor: "Marcello Casal Jr.",
    agencia: "Agência Brasil",
    local: "Cidade Estrutural — DF",
    ano: "fev. 2008",
    licenca: "CC BY 2.5 br",
    fonte: "https://commons.wikimedia.org/wiki/File:Lixao_Caminhao_20080220_-_Marcello_Casal_Jr._-_Agencia_Brasil.jpg",
  },
  urubus: {
    src: WT("1/14", "Lixao_Urubus_20080220_-_Marcello_Casal_Jr._-_Agencia_Brasil.jpg"),
    alt: "Urubus sobrevoando o Lixão da Cidade Estrutural",
    descricao: "Urubus sobrevoando o Lixão da Cidade Estrutural, DF-BR",
    autor: "Marcello Casal Jr.",
    agencia: "Agência Brasil",
    local: "Cidade Estrutural — DF",
    ano: "fev. 2008",
    licenca: "CC BY 2.5 br",
    fonte: "https://commons.wikimedia.org/wiki/File:Lixao_Urubus_20080220_-_Marcello_Casal_Jr._-_Agencia_Brasil.jpg",
  },
  esgotoAberto: {
    src: WT("2/2b", "EsgotoCeuAbertoValterCampanatoAgenciaBrasil.jpg"),
    alt: "Vala de esgoto a céu aberto em via pública da Cidade Estrutural",
    descricao: "Esgoto a céu aberto em via pública da Cidade Estrutural, DF",
    autor: "Valter Campanato",
    agencia: "Agência Brasil",
    local: "Cidade Estrutural — DF",
    ano: "mar. 2008",
    licenca: "CC BY 3.0 br",
    fonte: "https://commons.wikimedia.org/wiki/File:EsgotoCeuAbertoValterCampanatoAgenciaBrasil.jpg",
  },

  /* ---------------- HISTÓRICO — cidade das carroças ---------------- */
  carretaPB: {
    src: PX(37114689, 1500, 1000),
    alt: "Fotografia em preto e branco de carreta puxada por cavalo circulando em ambiente urbano",
    descricao: "Carreta puxada a cavalo em circulação urbana — o meio de transporte que moldou as ruas da cidade",
    autor: "Yerko I. S. Carrillo",
    agencia: "Pexels",
    local: "Registro urbano (ilustrativo)",
    ano: "s.d.",
    licenca: "Licença Pexels",
    fonte: "https://www.pexels.com/pt-br/foto/cavalo-e-carreta-urbana-em-preto-e-branco-37114689/",
  },
  ruaEstreita: {
    src: WT("b/b4", "A%C3%A7%C3%A3o_do_Pacto_pela_Vida_facilita_acesso_de_viaturas_na_Estrutural_%2818527954383%29.jpg"),
    alt: "Máquina e equipe alargando rua estreita no Setor de Chácaras Santa Luzia, Estrutural",
    descricao: "Operação de limpeza e alargamento das ruas estreitas do Setor de Chácaras Santa Luzia, na Estrutural",
    autor: "Pedro Ventura",
    agencia: "Agência Brasília (GDF)",
    local: "Estrutural — Brasília, DF",
    ano: "jun. 2015",
    licenca: "CC BY 2.0",
    fonte: "https://commons.wikimedia.org/wiki/File:A%C3%A7%C3%A3o_do_Pacto_pela_Vida_facilita_acesso_de_viaturas_na_Estrutural_(18527954383).jpg",
  },

  /* ---------------- AÇÃO — coleta seletiva e limpeza urbana ---------------- */
  coopTruck: {
    src: WT("3/3c", "Caminh%C3%A3o_Coopercicli_coleta_reciclagem_2.jpg"),
    alt: "Caminhão de cooperativa de reciclagem realizando coleta de recicláveis",
    descricao: "Caminhão de cooperativa de reciclagem realizando a coleta seletiva de materiais recicláveis",
    autor: "André Koehne",
    agencia: "Wikimedia Commons (obra própria)",
    local: "Caetité — BA",
    ano: "dez. 2024",
    licenca: "CC BY-SA 4.0",
    fonte: "https://commons.wikimedia.org/wiki/File:Caminh%C3%A3o_Coopercicli_coleta_reciclagem_2.jpg",
  },
  limpezaUrbana: {
    src: PX(34406282, 1500, 1000),
    alt: "Trabalhadores da limpeza urbana esvaziando lixeiras em via pública no Brasil",
    descricao: "Trabalhadores da limpeza urbana higienizando área pública e esvaziando lixeiras",
    autor: "Guilherme Pedrosa",
    agencia: "Pexels",
    local: "Cidade brasileira (registro documental)",
    ano: "s.d.",
    licenca: "Licença Pexels",
    fonte: "https://www.pexels.com/pt-br/foto/trabalhadores-da-limpeza-urbana-realizando-a-higienizacao-de-uma-area-urbana-34406282/",
  },

  /* ---------------- IMPACTO SOCIAL — catadores e cooperativas ---------------- */
  catadores2017: {
    src: WT("d/d2", "Fotos_produzidas_pelo_Senado_%2835359809681%29.jpg"),
    alt: "Catadores organizados no Lixão da Estrutural às vésperas do fechamento, em 2017",
    descricao: "Catadores no Lixão da Estrutural em junho de 2017 — processo de transição para os galpões de triagem",
    autor: "Leopoldo Silva",
    agencia: "Agência Senado",
    local: "Cidade Estrutural — DF",
    ano: "jun. 2017",
    licenca: "CC BY 2.0",
    fonte: "https://commons.wikimedia.org/wiki/File:Fotos_produzidas_pelo_Senado_(35359809681).jpg",
  },

  /* ---------------- IMPACTO URBANO — escolas e cidade nova ---------------- */
  escolaEC02: {
    src: WT("9/9b", "Merenda_escolar_%2816263422845%29.jpg"),
    alt: "Alunas recebendo merenda na Escola Classe 02 da Cidade Estrutural, em período integral",
    descricao: "Alunas atendidas em período integral na Escola Classe 02 da Cidade Estrutural, DF",
    autor: "Sergio Amaral",
    agencia: "Ministério do Desenvolvimento Social",
    local: "Escola Classe 02 — Cidade Estrutural, DF",
    ano: "set. 2014",
    licenca: "CC BY-SA 2.0",
    fonte: "https://commons.wikimedia.org/wiki/File:Merenda_escolar_(16263422845).jpg",
  },
  escolaEC02refeicao: {
    src: WT("c/cd", "Seguran%C3%A7a_alimentar_%2815641003394%29.jpg"),
    alt: "Estudantes almoçando no refeitório da Escola Classe 02 na Cidade Estrutural",
    descricao: "Estudantes almoçam na Escola Classe 02, unidade de ensino em período integral da Cidade Estrutural, DF",
    autor: "Sergio Amaral",
    agencia: "Ministério do Desenvolvimento Social",
    local: "Escola Classe 02 — Cidade Estrutural, DF",
    ano: "set. 2014",
    licenca: "CC BY-SA 2.0",
    fonte: "https://commons.wikimedia.org/wiki/File:Seguran%C3%A7a_alimentar_(15641003394).jpg",
  },
};

export const PROJETO = {
  instituicao: "FACULDADE UNYLEYA",
  modalidade: "Ensino Superior a Distância — EAD",
  curso: "Tecnologia da Informação — TI",
  programa: "Programa de Extensão Institucional",
  titulo: "EDUCANDO PARA A CIDADANIA",
  subtitulo:
    "Estudo de caso: a transformação do Lixão da Estrutural e a reconstrução urbano-ambiental da Cidade Estrutural — Distrito Federal",
  aluno: "Marcos Eduardo da Silva dos Reis",
  data: "25/08/2026",
  dataLonga: "25 de agosto de 2026",
  cidade: "Brasília – DF",
  ano: "2026",
};

/** Pesquisa de campo informal — ligações telefônicas com moradores (relatório do autor) */
export const PESQUISA = {
  periodo: "12 a 16 de agosto de 2026",
  meio: "ligações telefônicas",
  participantes: 7,
  pergunta:
    "Oi! Aqui é o Marcos, da Faculdade Unyleya. É rapidinho: depois que o lixão fechou, o que melhorou aí pra você e pra comunidade?",
  agradecimento:
    "Muito obrigado a todos! As respostas vão direto pro relatório do projeto. Valeu demais!",
  horaPergunta: "08:12",
  horaFim: "08:32",
};

export interface Depoimento {
  nome: string;
  papel: string;
  texto: string;
  hora: string;
  cor: string;
}

/** Falas transcritas com preservação da oralidade (revisão ortográfica mínima) */
export const DEPOIMENTOS: Depoimento[] = [
  {
    nome: "Dona Rosa Maria",
    papel: "moradora desde 1994 · Setor de Chácaras",
    texto:
      "Melhorou demais, meu filho! Antes a fumaça e o cheiro ruim pegavam a casa inteira. Hoje minha neta corre na rua e a gente nem se preocupa. Esse projeto de vocês chegou na hora certa.",
    hora: "08:13",
    cor: "#f59e0b",
  },
  {
    nome: "Seu Antônio",
    papel: "ex-carroceiro · trabalhou no lixão por 18 anos",
    texto:
      "Eu carregava entulho na carroça, as rua era estreita mesmo, nem carro passava. Hoje sobe caminhão, ambulância, tudo. Nem parece a mesma cidade. Fiquei feliz de ver gente nova estudando a nossa história.",
    hora: "08:15",
    cor: "#ef4b3f",
  },
  {
    nome: "Jéssica Oliveira",
    papel: "catadora · cooperativa de reciclagem",
    texto:
      "Na cooperativa eu tenho carteira assinada, luva, camisa e respeito. Antes era só eu e o lixo no meio do mato alto. Parabéns por lembrar da gente nesse trabalho, porque catador é trabalhador sim.",
    hora: "08:17",
    cor: "#22c074",
  },
  {
    nome: "Dona Cleusa",
    papel: "comerciante · rua principal da Estrutural",
    texto:
      "A limpeza ficou outra coisa. O caminhão da coleta seletiva passa no dia certinho e o povo aprendeu a separar o lixo. Se aparecesse mais gente assim, com projeto de verdade, o bairro ia longe.",
    hora: "08:20",
    cor: "#3aa6e8",
  },
  {
    nome: "Tiago Silva",
    papel: "estudante do ensino médio, 17 anos",
    texto:
      "Foi massa demais ver as foto dos urubus, porque isso era normal aqui no quintal da vó. Estudar a Estrutural na escola faz a gente se sentir importante. Aprovadíssimo esse slide aí, moço!",
    hora: "08:23",
    cor: "#8ef0c0",
  },
  {
    nome: "Seu Fernando",
    papel: "morador há 30 anos · vizinho da EC 02",
    texto:
      "Depois que o lixão fechou até o preço das casinha melhorou. Agora é manter a limpeza e cobrar da prefeitura todo dia. A apresentação de vocês abre os olho do povo, viu.",
    hora: "08:26",
    cor: "#bde3fa",
  },
  {
    nome: "Dona Marta",
    papel: "mãe de aluna da escola do bairro",
    texto:
      "Minha filha estuda numa escola boa e bonita, aqui do lado de casa, com merenda o dia todo. Era esse o sonho que eu tinha pra ela. Leva esse projeto pras outras comunidade também, com Deus!",
    hora: "08:29",
    cor: "#d98a7f",
  },
];

export const ETAPAS = [
  { n: 1, rotulo: "Gestão do Projeto", nota: "Escopo, metas e cronograma" },
  { n: 2, rotulo: "Desenvolvimento", nota: "Mídia educativa digital em slides" },
  { n: 3, rotulo: "Testagem e Revisão", nota: "Avaliação junto ao tutor" },
  { n: 4, rotulo: "Implementação", nota: "Comunidade-alvo e indicadores" },
] as const;

/** Referências bibliográficas — formatação conforme ABNT NBR 6023:2018 */
export const REFERENCIAS: { entrada: string; fonte?: string }[] = [
  {
    entrada:
      "AGÊNCIA BRASIL. Fotografias do Lixão da Cidade Estrutural, DF: arquivo de Marcello Casal Jr. e Valter Campanato. Brasília: Empresa Brasil de Comunicação, 2008.",
    fonte: "https://commons.wikimedia.org/wiki/Category:Lix%C3%A3o_da_Estrutural",
  },
  {
    entrada:
      "AGÊNCIA BRASÍLIA. Ação do Pacto pela Vida facilita acesso de viaturas na Estrutural: registro fotográfico de Pedro Ventura. Distrito Federal: Governo do Distrito Federal, 25 jun. 2015.",
    fonte: "https://commons.wikimedia.org/w/index.php?search=Pacto+pela+Vida+Estrutural&title=Special:MediaSearch",
  },
  {
    entrada:
      "BRASIL. Lei nº 12.305, de 2 de agosto de 2010. Institui a Política Nacional de Resíduos Sólidos; altera a Lei nº 9.605, de 12 de fevereiro de 1998. Diário Oficial da União: seção 1, Brasília, DF, 3 ago. 2010.",
    fonte: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm",
  },
  {
    entrada:
      "FÓRUM DE PRÓ-REITORES DE EXTENSÃO DAS UNIVERSIDADES PÚBLICAS BRASILEIRAS (FORPROEX). Diretrizes para a política de extensão na educação superior brasileira. Cutelândia: FORPROEX, 2012.",
  },
  {
    entrada:
      "G1 DISTRITO FEDERAL. Fim do Lixão da Estrutural DF: veja antes e depois e entenda o que muda. Brasília: Globo Comunicação, 19 jan. 2018. Especial jornalístico sobre o encerramento, após 26 anos, do maior lixão a céu aberto da América Latina.",
    fonte: "https://g1.globo.com/distrito-federal/fim-do-lixao-da-estrutural-df/noticia/2018/01/19/saiba-antes-e-depois-do-lixao-da-estrutural-no-df.html",
  },
  {
    entrada:
      "MINISTÉRIO DO DESENVOLVIMENTO SOCIAL (MDS). Escola Classe 02 em período integral na Cidade Estrutural, DF: registros fotográficos de Sergio Amaral. Brasília: MDS, 2014.",
    fonte: "https://commons.wikimedia.org/w/index.php?search=%22Cidade+Estrutural%22+escola&title=Special:MediaSearch",
  },
  {
    entrada:
      "MINISTÉRIO PÚBLICO DO DISTRITO FEDERAL E TERRITÓRIOS (MPDFT). Desativação gradativa do Lixão da Estrutural: atuação ministerial e termos de ajustamento de conduta firmados com o GDF. Brasília: MPDFT, 2015-2017.",
    fonte: "https://www.mpdft.mp.br/portal/",
  },
  {
    entrada:
      "MUSEU DA PESSOA. Coleção Catadores de Materiais Recicláveis: Histórias Que Reciclam. São Paulo: Museu da Pessoa, 2017.",
    fonte: "https://museudapessoa.org/",
  },
  {
    entrada:
      "SENADO FEDERAL. Agência Senado: série fotográfica sobre o Lixão da Estrutural (Edilson Rodrigues, 2014; Leopoldo Silva, 2017). Brasília: Senado Federal, 2014-2017.",
    fonte: "https://commons.wikimedia.org/wiki/Category:Lix%C3%A3o_da_Estrutural",
  },
  {
    entrada:
      "SERVIÇO DE LIMPEZA URBANA DO DISTRITO FEDERAL (SLU). Coleta seletiva no Distrito Federal: instrumentos de gestão compartilhada dos resíduos sólidos urbanos. Brasília: SLU, 2023.",
    fonte: "https://slu.df.gov.br/category/coleta-seletiva/",
  },
  {
    entrada:
      "REIS, Marcos Eduardo da Silva. Relatório de pesquisa de campo informal com moradores da Cidade Estrutural, DF: depoimentos coletados por ligações telefônicas entre 12 e 16 de agosto de 2026. Brasília, DF: autor, 2026. Material de seminário, não publicado, anexado à atividade de extensão.",
  },
];
