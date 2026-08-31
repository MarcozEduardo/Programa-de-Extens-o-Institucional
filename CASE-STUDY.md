# **📚 CASE STUDY: Educando para a Cidadania – A Revolução dos Slides com IA**

> **🎓 Projeto de Extensão Institucional | Unyleya (EAD) | Marcos Eduardo da Silva dos Reis**

---

## **🎯 Resumo Executivo**

Este **Case Study** documenta o desenvolvimento do **slide interativo online** para o **Programa de Extensão Institucional da Faculdade Unyleya (EAD)**, que aborda a **transformação do Lixão da Estrutural (DF)**. O projeto **inova ao combinar** conhecimentos acadêmicos (ABNT, metodologia científica) com **tecnologias modernas de desenvolvimento web e Inteligência Artificial**, resultando em uma **apresentação dinâmica, interativa e profissional**.

| **📊 Métrica** | **📈 Resultado** |
|--------------|----------------|
| **Tempo de Desenvolvimento** | ~45 dias (Pesquisa + Desenvolvimento) |
| **Número de Slides** | 13 slides interativos |
| **Tecnologias Utilizadas** | React, TypeScript, Vite, Framer Motion, PptxGenJS |
| **Fotos Reais** | 15+ imagens com licenças ABNT |
| **Temas Visuais** | 3 (Escuro, Claro, Aurora) |
| **Exportações** | PDF, PowerPoint (.pptx), Imagens |
| **Acessibilidade** | Teclado, Mouse, Touch |
| **Responsividade** | Desktop, Tablet, Mobile |

---

---

## **📖 Contexto: O Desafio**

### **🔹 O Problema Inicial**
No **curso de graduação EAD da Unyleya**, os alunos são desafiados a desenvolver **projetos de extensão institucional** que aplicam os conhecimentos teóricos em **situações reais**. O tema escolhido foi:

> **"Educando para a Cidadania: A Transformação do Lixão da Estrutural (DF)"**

**Objetivos do Projeto:**
1. **Educar** a população sobre a **importância da gestão de resíduos sólidos**
2. **Mostrar** o **impacto social e urbano** da transformação do Lixão da Estrutural
3. **Incentivar** a **cidadania e a responsabilidade ambiental**
4. **Apresentar** os dados de forma **clara, visual e interativa**

### **🔹 O Desafio Tecnológico**
O **desafio principal** era:
> **Como transformar um trabalho acadêmico tradicional (em PowerPoint ou PDF) em uma **experiência interativa, moderna e acessível a todos**?**

**Requisitos:**
✅ **Conformidade com ABNT** (NBR 14724, 10520, 6023)
✅ **Interatividade** (navegação, animações, exportação)
✅ **Responsividade** (funcionar em todos os dispositivos)
✅ **Acessibilidade** (teclado, leitores de tela)
✅ **Performance** (rápido e leve)
✅ **Integração com IA** (para agilizar o desenvolvimento)

---

---

## **🚀 Solução: O Slide Interativo com IA**

### **🔹 Arquitetura da Solução**

```mermaid
flowchart TB
    subgraph "📚 Conhecimento Acadêmico"
        A[Pesquisa de Campo]
        B[Análise de Dados]
        C[Metodologia Científica]
        D[Normas ABNT]
    end
    
    subgraph "💻 Desenvolvimento"
        E[React + TypeScript]
        F[Vite]
        G[Framer Motion]
        H[PptxGenJS]
        I[html-to-image]
    end
    
    subgraph "🤖 Inteligência Artificial"
        J[Gemini (Google)]
        K[GitHub Copilot]
        L[Mermaid.js]
    end
    
    A --> E
    B --> E
    C --> E
    D --> E
    J --> E
    K --> E
    E --> F
    E --> G
    E --> H
    E --> I
    G --> L
    
    E --> M[Slide Interativo Online]
    M --> N[Exportação PDF]
    M --> O[Exportação PPTX]
    M --> P[Deploy GitHub Pages]
    
    style A fill:#4CAF50,color:#fff
    style B fill:#4CAF50,color:#fff
    style C fill:#4CAF50,color:#fff
    style D fill:#4CAF50,color:#fff
    style J fill:#FF9800,color:#fff
    style K fill:#FF9800,color:#fff
    style L fill:#FF9800,color:#fff
    style M fill:#2196F3,color:#fff
```

---

### **🔹 Como a IA foi Usada em Cada Etapa**

#### **📌 1. Pesquisa e Coleta de Dados**
| **Atividade** | **Ferramenta** | **Resultado** |
|--------------|--------------|--------------|
| **Resumo de artigos acadêmicos** | Gemini | Textos resumidos e organizados |
| **Análise de dados do Lixão** | Gemini | Insights sobre impactos sociais e urbanos |
| **Criação de legendas para fotos** | Gemini | Legendas no padrão ABNT NBR 14724 |
| **Tradução de conteúdos** | Gemini | Conteúdos em português claro e acadêmico |

**Exemplo de Prompt:**
```
"Analise o seguinte contexto sobre o Lixão da Estrutural (DF) e gere um texto acadêmico 
conforme a ABNT NBR 14724, com introdução, desenvolvimento e conclusão. 
Inclua dados sobre impacto social, urbano e ambiental. 
Mantenha o tom formal e acadêmico."
```

---

#### **📌 2. Design e Estruturação do Slide**
| **Atividade** | **Ferramenta** | **Resultado** |
|--------------|--------------|--------------|
| **Estrutura dos slides** | Copilot | Organização lógica dos 13 slides |
| **Paleta de cores** | Copilot + Gemini | 3 temas visuais (Escuro, Claro, Aurora) |
| **Layout dos slides** | Copilot | Componentes React reutilizáveis |
| **Animações** | Copilot | Transições suaves com Framer Motion |

**Exemplo de Prompt:**
```
"Crie uma estrutura de slides para uma apresentação acadêmica sobre a transformação 
do Lixão da Estrutural (DF). Inclua:
1. Capa
2. Introdução
3. Problema
4. Contexto Histórico
5. Ação
6. Impacto Social
7. Impacto Urbano
8. Pesquisa de Campo
9. Desenvolvimento
10. Testagem
11. Implementação
12. Conclusão
13. Referências

Sugira um layout para cada slide e como organizá-los em componentes React."
```

---

#### **📌 3. Desenvolvimento do Código**
| **Atividade** | **Ferramenta** | **Resultado** |
|--------------|--------------|--------------|
| **Componentes React** | Copilot | Criação de componentes como `Deck.tsx`, `Slide.tsx` |
| **Lógica de navegação** | Copilot | Controles por teclado, mouse e touch |
| **Exportação para PDF/PPTX** | Copilot + PptxGenJS | Funções de exportação automática |
| **Animações** | Copilot + Framer Motion | Transições fluidas entre slides |
| **Responsividade** | Copilot | Adaptação para mobile, tablet e desktop |

**Exemplo de Código Gerado pelo Copilot:**
```typescript
// Componente de slide com animações (Framer Motion)
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

// Navegação por teclado
useEffect(() => {
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === " ") next();
    else if (e.key === "ArrowLeft") prev();
    else if (e.key === "Escape") setOverview(false);
  };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}, [next, prev, setOverview]);
```

---

#### **📌 4. Documentação e Finalização**
| **Atividade** | **Ferramenta** | **Resultado** |
|--------------|--------------|--------------|
| **README.md** | Copilot + Gemini | Documentação completa com Mermaid |
| **CASE-STUDY.md** | Copilot + Gemini | Este estudo de caso detalhado |
| **Diagramas Mermaid** | Copilot | Fluxogramas, timeline, arquitetura |
| **Revisão de textos** | Gemini | Correção gramatical e conformidade ABNT |

**Exemplo de Prompt para Documentação:**
```
"Crie um CASE STUDY detalhado para o projeto 'Educando para a Cidadania: 
Transformação do Lixão da Estrutural'. Inclua:
1. Resumo Executivo
2. Contexto e Desafios
3. Solução Proposta
4. Como a IA foi usada
5. Resultados e Impacto
6. Lições Aprendidas
7. Próximos Passos

Use Mermaid para diagramas e mantenha o tom profissional."
```

---

---

## **📊 Estrutura do Projeto**

### **🔹 Pastas e Arquivos Principais**

```
Programa-de-Extens-o-Institucional/
├── public/                          # Assets estáticos
│   └── ...
├── src/
│   ├── components/                  # Componentes React
│   │   ├── Deck.tsx                 # Componente principal do slide
│   │   ├── ui/                     # Componentes de UI (botões, modais)
│   │   └── ...
│   ├── slides/                      # Todos os slides
│   │   ├── index.tsx               # Índice de slides
│   │   ├── partA.tsx                # Slides 1-4 (Capa, Gestão, Problema, Histórico)
│   │   ├── partB.tsx                # Slides 5-7 (Ação, Impacto Social, Impacto Urbano)
│   │   ├── S08Campo.tsx             # Slide 8 (Pesquisa de Campo)
│   │   └── partC.tsx                # Slides 9-13 (Desenvolvimento, Testagem, etc.)
│   ├── data/                        # Dados e mídias
│   │   ├── media.ts                 # Fotos e metadados (ABNT)
│   │   └── ...
│   ├── utils/                       # Funções utilitárias
│   ├── index.css                    # Estilos globais
│   ├── main.tsx                    # Ponto de entrada
│   └── App.tsx                     # Componente raiz
├── index.html                      # HTML principal
├── package.json                    # Dependências
├── tsconfig.json                   # Configuração TypeScript
├── vite.config.ts                  # Configuração Vite
├── README.md                       # Documentação principal
└── CASE-STUDY.md                   # Este arquivo
```

---

### **🔹 Slides da Apresentação**

| **N°** | **Título** | **Seção** | **Conteúdo Principal** |
|--------|-----------|-----------|------------------------|
| 01 | **Capa** | Abertura | Título, autor, instituição |
| 02 | **Gestão do Projeto** | Método | Metodologia e objetivos |
| 03 | **O Problema** | Problema | Contextualização do Lixão da Estrutural |
| 04 | **Contexto Histórico** | Problema | Linha do tempo da região |
| 05 | **A Ação** | Solução | Propostas de intervenção |
| 06 | **Impacto Social** | Solução | Benefícios para a população |
| 07 | **Impacto Urbano** | Solução | Melhorias no espaço urbano |
| 08 | **Pesquisa de Campo** | Solução | Dados coletados in loco |
| 09 | **Desenvolvimento** | Método | Processo de criação do projeto |
| 10 | **Testagem e Revisão** | Método | Validação dos resultados |
| 11 | **Implementação e Indicadores** | Método | Métricas de sucesso |
| 12 | **Conclusão** | Fecho | Síntese dos resultados |
| 13 | **Referências** | Fecho | Fontes bibliográficas (ABNT NBR 6023) |

---

---

## **🎨 Design e UX**

### **🔹 Temas Visuais**

| **Tema** | **Descrição** | **Uso Ideal** | **Paleta de Cores** |
|----------|--------------|---------------|----------------------|
| **Escuro** | Fundo preto com gradientes verdes | Projeção em ambientes escuros | `#0A0D0B`, `#22C074`, `#7D877F` |
| **Claro** | Fundo claro (papel) | Leitura e impressão (ABNT) | `#EEF1EA`, `#0C7245`, `#5E6A61` |
| **Aurora** | Gradiente suave | Apresentações modernas | `#EAF2F4`, `#08745A`, `#566A6C` |

**Exemplo de Gradiente (Tema Aurora):**
```css
background: linear-gradient(135deg, #ffffff 0%, #dff2f4 45%, #8cdcc8 100%, #1272ad 170%);
```

---

### **🔹 Interatividade**

| **Funcionalidade** | **Como Usar** | **Tecnologia** |
|-------------------|---------------|---------------|
| **Navegação por teclado** | Setas, Espaço, PageUp/Down | React + `keydown` |
| **Navegação por mouse** | Scroll, cliques | React + `wheel` |
| **Navegação por touch** | Toque na tela | React + `pointerdown` |
| **Grade de slides** | Tecla `O` | Framer Motion |
| **Tela cheia** | Tecla `F` | Fullscreen API |
| **Exportação para PDF** | Tecla `P` | `window.print()` |
| **Exportação para PPTX** | Botão 