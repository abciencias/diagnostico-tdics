const nomesDimensoes = {
  D1: "Intencionalidade pedagógica",
  D2: "Letramento digital e informacional",
  D3: "Alfabetização científica",
  D4: "Pensamento crítico",
  D5: "CTS e Questões Sociocientíficas",
  D6: "Formação cidadã e tomada de decisão",
  D7: "Criticidade tecnológica"
};

const devolutivasDimensoes = {
  D1: {
    Emergente: {
      texto:
        "A intencionalidade pedagógica aparece de maneira pontual em suas respostas. As TDICs tendem a ser escolhidas principalmente pela facilidade de uso, disponibilidade, familiaridade ou capacidade de tornar a aula mais dinâmica.",
      reflexao:
        "Para refletir: o que os estudantes conseguem pensar, produzir ou compreender com essa tecnologia que seja relevante para o objetivo da atividade?"
    },
    "Em desenvolvimento": {
      texto:
        "Suas respostas mostram que a escolha das TDICs já considera objetivos de aprendizagem e possibilidades de participação dos estudantes. Entretanto, essa relação ainda varia conforme o conteúdo, recurso ou situação pedagógica.",
      reflexao:
        "Para refletir: a tecnologia apenas facilita a atividade ou modifica qualitativamente aquilo que o estudante pode fazer e aprender?"
    },
    Consolidada: {
      texto:
        "A intencionalidade pedagógica aparece de maneira consistente em suas respostas. As TDICs tendem a ser selecionadas a partir dos objetivos de aprendizagem e do papel que podem desempenhar na construção do conhecimento.",
      reflexao:
        "Para continuar avançando: avalie continuamente quando a tecnologia é realmente necessária e quando outros recursos podem ser pedagogicamente mais adequados."
    }
  },

  D2: {
    Emergente: {
      texto:
        "Suas respostas indicam que o uso de informações digitais está mais relacionado ao acesso e à localização de conteúdos do que à análise sistemática de sua origem, confiabilidade e circulação.",
      reflexao:
        "Para refletir: como seus estudantes decidem se uma informação encontrada no ambiente digital merece confiança?"
    },
    "Em desenvolvimento": {
      texto:
        "Há indícios de práticas de avaliação e comparação de informações digitais, embora esses procedimentos ainda não apareçam de maneira sistemática em todas as situações.",
      reflexao:
        "Para refletir: seus estudantes conseguem justificar por que confiaram em determinada fonte e não apenas dizer onde encontraram a informação?"
    },
    Consolidada: {
      texto:
        "Suas respostas indicam uma preocupação consistente com busca, seleção, avaliação, comparação e circulação de informações digitais.",
      reflexao:
        "Para continuar avançando: incorpore também discussões sobre plataformas, sistemas de recomendação e condições que influenciam quais informações ganham visibilidade."
    }
  },

  D3: {
    Emergente: {
      texto:
        "A utilização das TDICs aparece mais associada à apresentação ou organização de conteúdos científicos do que à análise de evidências, construção de explicações e investigação.",
      reflexao:
        "Para refletir: seus estudantes utilizam evidências para construir explicações ou principalmente reproduzem informações já apresentadas?"
    },
    "Em desenvolvimento": {
      texto:
        "Suas respostas mostram presença de interpretação de dados, evidências e construção de explicações, embora essas práticas ainda apareçam de maneira variável.",
      reflexao:
        "Para refletir: há espaço para diferentes hipóteses e para revisão das conclusões durante suas atividades?"
    },
    Consolidada: {
      texto:
        "A alfabetização científica aparece de forma consistente em suas respostas. As TDICs tendem a apoiar interpretação de dados, análise de evidências, construção de explicações e argumentação científica.",
      reflexao:
        "Para continuar avançando: explore situações nas quais evidências sejam incompletas ou controversas, exigindo reflexão sobre limites e incertezas."
    }
  },

  D4: {
    Emergente: {
      texto:
        "Suas respostas indicam que as atividades tendem a priorizar identificação de respostas ou compreensão de informações, com menor ênfase na análise de argumentos e avaliação de perspectivas.",
      reflexao:
        "Para refletir: seus estudantes precisam explicar por que concordam ou discordam de determinada informação?"
    },
    "Em desenvolvimento": {
      texto:
        "Há presença consistente de análise, comparação e argumentação, embora nem sempre os estudantes sejam incentivados a revisar seus próprios posicionamentos.",
      reflexao:
        "Para refletir: mudar de opinião diante de melhores evidências é valorizado como parte do processo de aprendizagem?"
    },
    Consolidada: {
      texto:
        "O pensamento crítico aparece de forma consistente em suas respostas. Os estudantes tendem a analisar argumentos, evidências, perspectivas e contra-argumentos antes de formular conclusões.",
      reflexao:
        "Para continuar avançando: diversifique situações em que não exista uma solução única e seja necessário lidar com incertezas, valores e consequências."
    }
  },

  D5: {
    Emergente: {
      texto:
        "As relações entre ciência, tecnologia e sociedade aparecem de maneira pontual, geralmente como contextualização dos conteúdos.",
      reflexao:
        "Para refletir: quando uma tecnologia é estudada, os estudantes analisam também quem é afetado por ela e quais consequências podem resultar de sua utilização?"
    },
    "Em desenvolvimento": {
      texto:
        "Suas respostas indicam presença das relações entre ciência, tecnologia e sociedade e abertura para questões controversas.",
      reflexao:
        "Para refletir: as controvérsias trabalhadas permitem compreender por que diferentes grupos podem defender posições distintas?"
    },
    Consolidada: {
      texto:
        "CTS e QSC aparecem de maneira consistente em suas escolhas. Ciência e tecnologia tendem a ser discutidas em relação a seus contextos sociais, econômicos, ambientais, políticos ou éticos.",
      reflexao:
        "Para continuar avançando: incorpore questões locais e situações reais nas quais os estudantes possam investigar perspectivas e consequências concretas."
    }
  },

  D6: {
    Emergente: {
      texto:
        "A participação dos estudantes aparece principalmente na compreensão de problemas ou manifestação de opiniões.",
      reflexao:
        "Para refletir: o estudante apenas expressa o que pensa ou precisa explicar em que evidências e critérios sua decisão está baseada?"
    },
    "Em desenvolvimento": {
      texto:
        "Suas respostas indicam que os estudantes já têm oportunidades de construir posicionamentos e analisar alternativas.",
      reflexao:
        "Para refletir: depois de compreender um problema, que possibilidades de escolha, participação ou ação os estudantes conseguem reconhecer?"
    },
    Consolidada: {
      texto:
        "Formação cidadã e tomada de decisão aparecem de maneira consistente em suas respostas. Os estudantes tendem a avaliar alternativas, utilizar evidências e justificar posicionamentos diante de questões sociais relacionadas à ciência e à tecnologia.",
      reflexao:
        "Para continuar avançando: explore decisões reais ou simuladas nas quais diferentes escolhas produzam consequências para grupos distintos."
    }
  },

  D7: {
    Emergente: {
      texto:
        "Suas respostas indicam que as tecnologias tendem a ser analisadas principalmente em termos de funcionamento, utilidade, riscos ou eficiência.",
      reflexao:
        "Para refletir: quem decide como determinada tecnologia deve funcionar e quais grupos podem ser favorecidos ou desfavorecidos por essas escolhas?"
    },
    "Em desenvolvimento": {
      texto:
        "Suas respostas demonstram atenção a questões como dados, algoritmos, interesses, riscos ou desigualdades relacionadas às tecnologias.",
      reflexao:
        "Para refletir: além de adaptar o uso de uma tecnologia, é possível questionar ou transformar as escolhas incorporadas ao seu funcionamento?"
    },
    Consolidada: {
      texto:
        "A criticidade tecnológica aparece de maneira consistente em suas respostas. As tecnologias tendem a ser compreendidas como construções sociotécnicas relacionadas a valores, interesses, poder, escolhas humanas e consequências sociais.",
      reflexao:
        "Para continuar avançando: explore com os estudantes quem participa das decisões tecnológicas, quem fica excluído delas e como diferentes grupos podem atuar na construção de alternativas mais democráticas."
    }
  }
};

const ampliacoes = {
  D1:
    "Procure iniciar o planejamento pelos objetivos de aprendizagem e, só depois, decidir se uma tecnologia realmente contribui para alcançá-los.",

  D2:
    "Amplie práticas de comparação de fontes, autoria, confiabilidade, circulação e responsabilidade na produção de conteúdos digitais.",

  D3:
    "Crie mais situações em que os estudantes precisem interpretar dados, analisar evidências, justificar conclusões e reconhecer incertezas.",

  D4:
    "Inclua mais atividades em que os estudantes analisem argumentos, comparem perspectivas e possam revisar suas conclusões diante de novas evidências.",

  D5:
    "Amplie a presença de controvérsias, atores sociais, interesses e consequências nas discussões sobre ciência e tecnologia.",

  D6:
    "Proponha situações em que os estudantes precisem estabelecer critérios, avaliar alternativas e justificar decisões ou possibilidades de participação.",

  D7:
    "Explore mais questões relacionadas à não neutralidade tecnológica, dados, algoritmos, interesses, poder, desigualdades e possibilidades de transformação."
};

function classificarNivel(percentual) {
  if (percentual < 40) {
    return "Emergente";
  }

  if (percentual < 70) {
    return "Em desenvolvimento";
  }

  return "Consolidada";
}

function calcularPercentuaisDimensoes(respostas) {
  const totais = {
    D1: 0,
    D2: 0,
    D3: 0,
    D4: 0,
    D5: 0,
    D6: 0,
    D7: 0
  };

  perguntas.forEach((pergunta, indice) => {
    const respostaSelecionada = respostas[indice];

    if (respostaSelecionada === undefined || respostaSelecionada === null) {
      return;
    }

    const alternativa = pergunta.alternativas[respostaSelecionada];

    totais[pergunta.dimensao] += alternativa.pontos;
  });

  const percentuais = {};

  Object.keys(totais).forEach((dimensao) => {
    percentuais[dimensao] = Math.round((totais[dimensao] / 8) * 100);
  });

  return percentuais;
}

function calcularIndicePedagogico(dimensoes) {
  return Math.round(
    (dimensoes.D1 + dimensoes.D2 + dimensoes.D3) / 3
  );
}

function calcularIndiceCriticidade(dimensoes) {
  return Math.round(
    (dimensoes.D4 + dimensoes.D5 + dimensoes.D6 + dimensoes.D7) / 4
  );
}

function classificarIP(ip, dimensoes) {
  if (ip < 40) {
    return "Emergente";
  }

  if (ip < 70) {
    return "Em desenvolvimento";
  }

  const consolidadas = [
    dimensoes.D1,
    dimensoes.D2,
    dimensoes.D3
  ].filter((valor) => valor >= 70).length;

  const existeEmergente = [
    dimensoes.D1,
    dimensoes.D2,
    dimensoes.D3
  ].some((valor) => valor < 40);

  if (consolidadas >= 2 && !existeEmergente) {
    return "Consolidada";
  }

  return "Em desenvolvimento";
}

function classificarIC(ic, dimensoes) {
  if (ic < 40) {
    return "Emergente";
  }

  if (ic < 70) {
    return "Em desenvolvimento";
  }

  const consolidadas = [
    dimensoes.D4,
    dimensoes.D5,
    dimensoes.D6,
    dimensoes.D7
  ].filter((valor) => valor >= 70).length;

  const existeEmergente = [
    dimensoes.D4,
    dimensoes.D5,
    dimensoes.D6,
    dimensoes.D7
  ].some((valor) => valor < 40);

  if (consolidadas >= 3 && !existeEmergente) {
    return "Consolidada";
  }

  return "Em desenvolvimento";
}

function definirPerfil(ipNivel, icNivel, ip, ic) {
  if (ipNivel === "Emergente" && icNivel === "Emergente") {
    return {
      perfil: "Instrumental",
      tendencia: ""
    };
  }

  if (ipNivel === "Consolidada" && icNivel === "Emergente") {
    return {
      perfil: "Pedagógico",
      tendencia: ""
    };
  }

  if (ipNivel === "Emergente" && icNivel === "Consolidada") {
    return {
      perfil: "Crítico",
      tendencia: ""
    };
  }

  if (ipNivel === "Consolidada" && icNivel === "Consolidada") {
    return {
      perfil: "Crítico-pedagógico",
      tendencia: ""
    };
  }

  if (ipNivel === "Consolidada" && icNivel === "Em desenvolvimento") {
    return {
      perfil: "Pedagógico",
      tendencia: "Tendência crítico-pedagógica"
    };
  }

  if (ipNivel === "Em desenvolvimento" && icNivel === "Consolidada") {
    return {
      perfil: "Crítico",
      tendencia: "Tendência crítico-pedagógica"
    };
  }

  if (ipNivel === "Emergente" && icNivel === "Em desenvolvimento") {
    return {
      perfil: "Instrumental",
      tendencia: "Tendência crítica"
    };
  }

  if (ipNivel === "Em desenvolvimento" && icNivel === "Emergente") {
    return {
      perfil: "Instrumental",
      tendencia: "Tendência pedagógica"
    };
  }

  if (
    ipNivel === "Em desenvolvimento" &&
    icNivel === "Em desenvolvimento"
  ) {
    const diferenca = ip - ic;

    if (ip >= 60 && ic >= 60) {
      return {
        perfil: "Em transição",
        tendencia: "Transição avançada para o crítico-pedagógico"
      };
    }

    if (diferenca >= 10) {
      return {
        perfil: "Em transição",
        tendencia: "Predominância pedagógica"
      };
    }

    if (diferenca <= -10) {
      return {
        perfil: "Em transição",
        tendencia: "Predominância crítica"
      };
    }

    return {
      perfil: "Em transição",
      tendencia: "Integração pedagógica e criticidade em desenvolvimento"
    };
  }

  if (ipNivel === "Consolidada") {
    return {
      perfil: "Pedagógico",
      tendencia: "Tendência crítico-pedagógica"
    };
  }

  if (icNivel === "Consolidada") {
    return {
      perfil: "Crítico",
      tendencia: "Tendência crítico-pedagógica"
    };
  }

  return {
    perfil: "Em transição",
    tendencia: ""
  };
}

function encontrarDestaques(dimensoes) {
  const entradas = Object.entries(dimensoes);

  const maiorValor = Math.max(...entradas.map(([, valor]) => valor));
  const menorValor = Math.min(...entradas.map(([, valor]) => valor));

  const maiores = entradas
    .filter(([, valor]) => valor === maiorValor)
    .map(([dimensao]) => dimensao);

  const menores = entradas
    .filter(([, valor]) => valor === menorValor)
    .map(([dimensao]) => dimensao);

  return {
    maiores,
    menores,
    maiorValor,
    menorValor
  };
}

function calcularDiagnostico(respostas) {
  const dimensoes = calcularPercentuaisDimensoes(respostas);

  const niveisDimensoes = {};

  Object.keys(dimensoes).forEach((dimensao) => {
    niveisDimensoes[dimensao] = classificarNivel(dimensoes[dimensao]);
  });

  const ip = calcularIndicePedagogico(dimensoes);
  const ic = calcularIndiceCriticidade(dimensoes);

  const nivelIP = classificarIP(ip, dimensoes);
  const nivelIC = classificarIC(ic, dimensoes);

  const classificacaoPerfil = definirPerfil(
    nivelIP,
    nivelIC,
    ip,
    ic
  );

  const destaques = encontrarDestaques(dimensoes);

  return {
    dimensoes,
    niveisDimensoes,
    ip,
    ic,
    nivelIP,
    nivelIC,
    perfil: classificacaoPerfil.perfil,
    tendencia: classificacaoPerfil.tendencia,
    destaques
  };
}
