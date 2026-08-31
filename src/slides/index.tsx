import type { ComponentType } from "react";
import { S01, S02, S03, S04 } from "./partA";
import { S05, S06, S07, S08 } from "./partB";
import S08Campo from "./S08Campo";
import { S09, S10, S11, S12 } from "./partC";

export interface SlideMeta {
  id: string;
  numero: string;
  titulo: string;
  secao: "abertura" | "problema" | "solucao" | "metodo" | "fecho";
  component: ComponentType;
}

export const SLIDES: SlideMeta[] = [
  { id: "capa", numero: "01", titulo: "Capa", secao: "abertura", component: S01 },
  { id: "gestao", numero: "02", titulo: "Gestão do Projeto", secao: "metodo", component: S02 },
  { id: "problema", numero: "03", titulo: "O Problema", secao: "problema", component: S03 },
  { id: "historico", numero: "04", titulo: "Contexto Histórico", secao: "problema", component: S04 },
  { id: "acao", numero: "05", titulo: "A Ação", secao: "solucao", component: S05 },
  { id: "social", numero: "06", titulo: "Impacto Social", secao: "solucao", component: S06 },
  { id: "urbano", numero: "07", titulo: "Impacto Urbano", secao: "solucao", component: S07 },
  { id: "campo", numero: "08", titulo: "Pesquisa de Campo", secao: "solucao", component: S08Campo },
  { id: "desenvolvimento", numero: "09", titulo: "Desenvolvimento", secao: "metodo", component: S08 },
  { id: "testagem", numero: "10", titulo: "Testagem e Revisão", secao: "metodo", component: S09 },
  { id: "implementacao", numero: "11", titulo: "Implementação e Indicadores", secao: "metodo", component: S10 },
  { id: "conclusao", numero: "12", titulo: "Conclusão", secao: "fecho", component: S11 },
  { id: "referencias", numero: "13", titulo: "Referências (NBR 6023)", secao: "fecho", component: S12 },
];
