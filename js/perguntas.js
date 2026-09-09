const perguntas = [
  {
    id: 1,
    tipo: "Situação de prática",
    dimensao: "D1",
    pergunta:
      "Ao escolher uma tecnologia digital para uma aula, o que geralmente pesa mais na sua decisão?",
    alternativas: [
      {
        letra: "A",
        texto:
          "A possibilidade de variar a dinâmica da aula e ampliar o interesse dos estudantes.",
        pontos: 1
      },
      {
        letra: "B",
        texto:
          "A relação entre os objetivos de aprendizagem e o que a ferramenta permite realizar.",
        pontos: 2
      },
      {
        letra: "C",
        texto:
          "A facilidade de acesso, uso e organização da atividade.",
        pontos: 0.5
      },
      {
        letra: "D",
        texto:
          "A familiaridade da turma com o recurso e a segurança para utilizá-lo.",
        pontos: 0.5
      }
    ]
  },

  {
    id: 2,
    tipo: "Situação de prática",
    dimensao: "D1",
    pergunta:
      "Em uma atividade com TDICs, qual situação você considera mais adequada?",
    alternativas: [
      {
        letra: "A",
        texto:
          "O professor utiliza a tecnologia para apresentar conteúdos de forma mais organizada.",
        pontos: 0.5
      },
      {
        letra: "B",
        texto:
          "Os estudantes utilizam a tecnologia para acessar informações e realizar as tarefas propostas.",
        pontos: 1
      },
      {
        letra: "C",
        texto:
          "O uso da tecnologia varia conforme o conteúdo e pode alternar momentos de explicação e participação.",
        pontos: 1.5
      },
      {
        letra: "D",
        texto:
          "Os estudantes utilizam a tecnologia para investigar, comparar, produzir, resolver ou argumentar em torno do objetivo da aula.",
        pontos: 2
      }
    ]
  },

  {
    id: 3,
    tipo: "Sobre sua prática",
    dimensao: "D1",
    pergunta:
      "Quando planeja uma atividade com tecnologia, qual afirmação mais se aproxima de sua prática?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Defino primeiro o que os estudantes devem aprender e depois avalio se uma tecnologia pode contribuir.",
        pontos: 2
      },
      {
        letra: "B",
        texto:
          "Costumo considerar as ferramentas disponíveis e, a partir delas, estruturo a atividade.",
        pontos: 0.5
      },
      {
        letra: "C",
        texto:
          "Priorizo recursos que já conheço e adapto seu uso aos conteúdos.",
        pontos: 1
      },
      {
        letra: "D",
        texto:
          "Escolho recursos que ajudem a apresentar o conteúdo de forma mais clara e organizada.",
        pontos: 1
      }
    ]
  },

  {
    id: 4,
    tipo: "Estudo de caso",
    dimensao: "D1",
    pergunta:
      "Uma professora utiliza tablets em uma aula. Os estudantes assistem a uma animação, registram informações e respondem a questões. A atividade funciona bem e a turma demonstra interesse. Como você avaliaria essa prática?",
    alternativas: [
      {
        letra: "A",
        texto:
          "A tecnologia cumpriu uma função importante ao ampliar o interesse da turma.",
        pontos: 1
      },
      {
        letra: "B",
        texto:
          "É uma proposta válida, embora pudesse ampliar a participação intelectual dos estudantes.",
        pontos: 1.5
      },
      {
        letra: "C",
        texto:
          "O principal é analisar se a atividade contribuiu para os objetivos de aprendizagem.",
        pontos: 2
      },
      {
        letra: "D",
        texto:
          "O uso do tablet, por si só, já representa uma mudança pedagógica relevante.",
        pontos: 0.5
      }
    ]
  },

  {
    id: 5,
    tipo: "Situação de prática",
    dimensao: "D2",
    pergunta:
      "Você solicita uma pesquisa na internet sobre um problema de saúde pública. Como orientaria a atividade?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Indicaria previamente alguns sites para garantir maior segurança nas informações.",
        pontos: 1
      },
      {
        letra: "B",
        texto:
          "Permitiria a pesquisa livre e pediria que os estudantes selecionassem os dados mais relevantes.",
        pontos: 0.5
      },
      {
        letra: "C",
        texto:
          "Orientaria a busca em diferentes fontes e a análise de autoria, evidências, data, finalidade e confiabilidade.",
        pontos: 2
      },
      {
        letra: "D",
        texto:
          "Dividiria o tema entre grupos e pediria uma apresentação com os principais resultados encontrados.",
        pontos: 0.5
      }
    ]
  },

  {
    id: 6,
    tipo: "Situação de prática",
    dimensao: "D2",
    pergunta:
      "Durante uma pesquisa, dois sites apresentam informações diferentes sobre o mesmo tema. O que você faria?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Investigaria com a turma quem produziu cada informação, quais evidências são utilizadas e por que existem diferenças.",
        pontos: 2
      },
      {
        letra: "B",
        texto:
          "Pediria que escolhessem a fonte que parecesse mais confiável.",
        pontos: 0.5
      },
      {
        letra: "C",
        texto:
          "Indicaria uma fonte reconhecida para resolver a divergência.",
        pontos: 1
      },
      {
        letra: "D",
        texto:
          "Solicitaria uma comparação entre as duas explicações antes de tomar uma decisão.",
        pontos: 1.5
      }
    ]
  },

  {
    id: 7,
    tipo: "Sobre sua prática",
    dimensao: "D2",
    pergunta:
      "Quando os estudantes produzem conteúdo digital para uma atividade, o que você costuma considerar mais importante?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Que o material esteja bem organizado e apresente corretamente o conteúdo estudado.",
        pontos: 1
      },
      {
        letra: "B",
        texto:
          "Que os estudantes indiquem de onde retiraram as informações utilizadas.",
        pontos: 1.5
      },
      {
        letra: "C",
        texto:
          "Que considerem autoria, fontes, finalidade, público, responsabilidade e possíveis efeitos da circulação do conteúdo.",
        pontos: 2
      },
      {
        letra: "D",
        texto:
          "Que utilizem adequadamente as ferramentas de edição e apresentação.",
        pontos: 0.5
      }
    ]
  },

  {
    id: 8,
    tipo: "Estudo de caso",
    dimensao: "D2",
    pergunta:
      "Um vídeo muito compartilhado nas redes sociais contradiz uma informação científica discutida em aula. Como você conduziria a situação?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Explicaria que conteúdos das redes sociais podem conter erros e retomaria o conhecimento aceito.",
        pontos: 0.5
      },
      {
        letra: "B",
        texto:
          "Pediria que investigassem o autor do vídeo e comparassem seu conteúdo com outras fontes.",
        pontos: 1.5
      },
      {
        letra: "C",
        texto:
          "Analisaria com a turma as alegações, evidências, autoria, circulação e razões que favorecem o compartilhamento.",
        pontos: 2
      },
      {
        letra: "D",
        texto:
          "Utilizaria o vídeo para mostrar que existem opiniões diferentes sobre o tema.",
        pontos: 1
      }
    ]
  },

  {
    id: 9,
    tipo: "Situação de prática",
    dimensao: "D3",
    pergunta:
      "Os estudantes registram resultados de um experimento em uma planilha digital. O que você consideraria mais importante na continuidade da atividade?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Que os dados estejam organizados e representados corretamente.",
        pontos: 1
      },
      {
        letra: "B",
        texto:
          "Que os estudantes relacionem os resultados aos conceitos estudados.",
        pontos: 1.5
      },
      {
        letra: "C",
        texto:
          "Que utilizem os dados para construir e justificar explicações, reconhecendo limites e incertezas.",
        pontos: 2
      },
      {
        letra: "D",
        texto:
          "Que aprendam a utilizar a planilha como ferramenta de organização científica.",
        pontos: 0.5
      }
    ]
  },

  {
    id: 10,
    tipo: "Situação de prática",
    dimensao: "D3",
    pergunta:
      "Uma notícia apresenta um gráfico para sustentar uma afirmação científica. Como você utilizaria esse material?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Pediria que os estudantes verificassem se os dados realmente sustentam a conclusão apresentada.",
        pontos: 2
      },
      {
        letra: "B",
        texto:
          "Utilizaria o gráfico para facilitar a compreensão do conteúdo.",
        pontos: 1
      },
      {
        letra: "C",
        texto:
          "Explicaria os elementos principais do gráfico antes de interpretar a informação.",
        pontos: 0.5
      },
      {
        letra: "D",
        texto:
          "Compararia o gráfico com dados disponíveis em outro material.",
        pontos: 1.5
      }
    ]
  },

  {
    id: 11,
    tipo: "Situação de prática",
    dimensao: "D3",
    pergunta:
      "Em uma atividade científica, dois grupos chegam a conclusões diferentes a partir de dados semelhantes. Como você conduziria a situação?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Indicaria qual conclusão está mais próxima do conhecimento científico aceito.",
        pontos: 0.5
      },
      {
        letra: "B",
        texto:
          "Pediria que cada grupo apresentasse seu resultado e sua interpretação.",
        pontos: 1
      },
      {
        letra: "C",
        texto:
          "Solicitaria que os grupos comparassem evidências, justificativas e possíveis limitações antes de rever suas conclusões.",
        pontos: 2
      },
      {
        letra: "D",
        texto:
          "Organizaria uma votação para decidir qual explicação parece mais convincente.",
        pontos: 0.5
      }
    ]
  },

  {
    id: 12,
    tipo: "Estudo de caso",
    dimensao: "D3",
    pergunta:
      "Uma turma investiga a mortandade de peixes em um rio e encontra hipóteses diferentes. Qual encaminhamento você considera mais adequado?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Cada grupo apresenta sua hipótese e a turma escolhe a mais plausível.",
        pontos: 1
      },
      {
        letra: "B",
        texto:
          "O professor apresenta a explicação considerada mais consistente.",
        pontos: 0.5
      },
      {
        letra: "C",
        texto:
          "Os grupos organizam as informações em um documento coletivo.",
        pontos: 0.5
      },
      {
        letra: "D",
        texto:
          "Os grupos confrontam hipóteses com dados e evidências e justificam uma conclusão provisória.",
        pontos: 2
      }
    ]
  },

  {
    id: 13,
    tipo: "Situação de prática",
    dimensao: "D4",
    pergunta:
      "Em um fórum digital, estudantes apresentam opiniões diferentes sobre a proibição do uso de celulares na escola. Como você aproveitaria a atividade?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Pediria que todos registrassem suas opiniões e respeitassem as diferenças.",
        pontos: 1
      },
      {
        letra: "B",
        texto:
          "Solicitaria que analisassem razões, evidências e contra-argumentos antes de revisar suas posições.",
        pontos: 2
      },
      {
        letra: "C",
        texto:
          "Organizaria uma votação para identificar a opinião predominante.",
        pontos: 0.5
      },
      {
        letra: "D",
        texto:
          "Sistematizaria os principais argumentos e depois faria uma discussão coletiva.",
        pontos: 1.5
      }
    ]
  },

  {
    id: 14,
    tipo: "Situação de prática",
    dimensao: "D4",
    pergunta:
      "Durante uma atividade, os estudantes encontram três explicações diferentes para o mesmo problema. Qual seria sua intervenção?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Indicaria qual delas é mais adequada ao conteúdo estudado.",
        pontos: 0.5
      },
      {
        letra: "B",
        texto:
          "Pediria que registrassem as diferenças entre as explicações.",
        pontos: 1
      },
      {
        letra: "C",
        texto:
          "Orientaria a análise dos pressupostos, evidências e coerência de cada explicação.",
        pontos: 2
      },
      {
        letra: "D",
        texto:
          "Permitiria que cada grupo escolhesse a explicação que considerasse mais convincente.",
        pontos: 1.5
      }
    ]
  },

  {
    id: 15,
    tipo: "Sobre sua prática",
    dimensao: "D4",
    pergunta:
      "Um estudante apresenta uma interpretação diferente da que você esperava, mas apresenta argumentos para sustentá-la. O que você tende a fazer?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Exploro os argumentos apresentados e avalio com ele se as evidências sustentam a interpretação.",
        pontos: 2
      },
      {
        letra: "B",
        texto:
          "Corrijo a resposta para evitar que o erro se consolide.",
        pontos: 0.5
      },
      {
        letra: "C",
        texto:
          "Peço que consulte novamente o material e reformule a resposta.",
        pontos: 1
      },
      {
        letra: "D",
        texto:
          "Solicito que outros estudantes apresentem interpretações para comparar.",
        pontos: 1.5
      }
    ]
  },

  {
    id: 16,
    tipo: "Situação de prática",
    dimensao: "D4",
    pergunta:
      "Durante um debate digital, um estudante muda de opinião depois de analisar novas evidências. Como você interpreta essa mudança?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Como sinal de insegurança diante do tema.",
        pontos: 0
      },
      {
        letra: "B",
        texto:
          "Como parte do processo de reflexão, desde que consiga justificar por que reviu sua posição.",
        pontos: 2
      },
      {
        letra: "C",
        texto:
          "Como algo natural, pois opiniões podem mudar durante uma discussão.",
        pontos: 1
      },
      {
        letra: "D",
        texto:
          "Como indicação de que a atividade ainda não apresentou informações suficientes.",
        pontos: 0.5
      }
    ]
  },

  {
    id: 17,
    tipo: "Situação de prática",
    dimensao: "D5",
    pergunta:
      "Você pretende trabalhar fontes de energia com apoio de recursos digitais. Qual proposta escolheria?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Utilizaria vídeos e simulações para explicar os tipos de geração de energia.",
        pontos: 0.5
      },
      {
        letra: "B",
        texto:
          "Trabalharia dados sobre vantagens e impactos das diferentes fontes.",
        pontos: 1
      },
      {
        letra: "C",
        texto:
          "Proporia uma investigação envolvendo conhecimentos científicos, custos, impactos, grupos sociais e consequências.",
        pontos: 2
      },
      {
        letra: "D",
        texto:
          "Pediria que os estudantes pesquisassem os tipos de energia e produzissem um material digital.",
        pontos: 1
      }
    ]
  },

  {
    id: 18,
    tipo: "Situação de prática",
    dimensao: "D5",
    pergunta:
      "Ao trabalhar um desenvolvimento tecnológico recente, qual abordagem você considera mais pertinente?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Compreender seu funcionamento e suas possíveis aplicações.",
        pontos: 1
      },
      {
        letra: "B",
        texto:
          "Analisar benefícios e riscos para a sociedade.",
        pontos: 1.5
      },
      {
        letra: "C",
        texto:
          "Relacionar seu funcionamento ao conteúdo científico estudado.",
        pontos: 1
      },
      {
        letra: "D",
        texto:
          "Investigar funcionamento, benefícios, riscos, interesses, grupos envolvidos e consequências sociais e ambientais.",
        pontos: 2
      }
    ]
  },

  {
    id: 19,
    tipo: "Sobre sua prática",
    dimensao: "D5",
    pergunta:
      "Questões controversas envolvendo ciência e tecnologia aparecem em suas aulas:",
    alternativas: [
      {
        letra: "A",
        texto:
          "Quando estão diretamente ligadas ao conteúdo previsto.",
        pontos: 1
      },
      {
        letra: "B",
        texto:
          "Como estratégia para contextualizar e aumentar o interesse.",
        pontos: 1
      },
      {
        letra: "C",
        texto:
          "Como situações que exigem conhecimento científico e análise de aspectos sociais, econômicos, éticos ou ambientais.",
        pontos: 2
      },
      {
        letra: "D",
        texto:
          "Principalmente quando alguma notícia desperta o interesse da turma.",
        pontos: 0.5
      }
    ]
  },

  {
    id: 20,
    tipo: "Estudo de caso",
    dimensao: "D5",
    pergunta:
      "Uma cidade pretende instalar uma indústria que poderá gerar empregos, mas existem preocupações ambientais. Como você trabalharia a situação com TDICs?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Pediria uma pesquisa sobre o tipo de indústria e seus principais impactos.",
        pontos: 0.5
      },
      {
        letra: "B",
        texto:
          "A turma investigaria dados científicos, ambientais, sociais e econômicos e analisaria diferentes grupos envolvidos.",
        pontos: 2
      },
      {
        letra: "C",
        texto:
          "Apresentaria vídeos favoráveis e contrários e promoveria um debate.",
        pontos: 1.5
      },
      {
        letra: "D",
        texto:
          "Solicitaria um levantamento dos riscos ambientais associados ao empreendimento.",
        pontos: 1
      }
    ]
  },

  {
    id: 21,
    tipo: "Situação de prática",
    dimensao: "D6",
    pergunta:
      "Depois de estudar diferentes formas de geração de energia, os estudantes precisam recomendar uma alternativa para sua região. Qual proposta escolheria?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Cada grupo escolheria uma opção e prepararia uma apresentação justificando sua preferência.",
        pontos: 1
      },
      {
        letra: "B",
        texto:
          "Os estudantes comparariam dados, custos, impactos e disponibilidade antes de formular uma recomendação.",
        pontos: 1.5
      },
      {
        letra: "C",
        texto:
          "A turma definiria critérios, analisaria evidências, consequências e grupos afetados e justificaria uma decisão.",
        pontos: 2
      },
      {
        letra: "D",
        texto:
          "O professor apresentaria vantagens e desvantagens e a turma votaria.",
        pontos: 0.5
      }
    ]
  },

  {
    id: 22,
    tipo: "Situação de prática",
    dimensao: "D6",
    pergunta:
      "Uma atividade revela um problema ambiental próximo à escola. O que você faria?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Utilizaria o problema para aprofundar o conteúdo.",
        pontos: 0.5
      },
      {
        letra: "B",
        texto:
          "Pediria que os estudantes pesquisassem e divulgassem informações para a comunidade escolar.",
        pontos: 1
      },
      {
        letra: "C",
        texto:
          "Proporia a produção de um material digital de conscientização.",
        pontos: 1.5
      },
      {
        letra: "D",
        texto:
          "Após investigar causas, atores e alternativas, a turma decidiria se existe alguma ação possível e justificaria sua escolha.",
        pontos: 2
      }
    ]
  },

  {
    id: 23,
    tipo: "Sobre sua prática",
    dimensao: "D6",
    pergunta:
      "Quando trabalha problemas sociais relacionados à ciência ou à tecnologia, normalmente espera que os estudantes:",
    alternativas: [
      {
        letra: "A",
        texto:
          "Compreendam o problema e sua relação com o conteúdo.",
        pontos: 1
      },
      {
        letra: "B",
        texto:
          "Conheçam diferentes perspectivas e construam uma opinião.",
        pontos: 1.5
      },
      {
        letra: "C",
        texto:
          "Utilizem conhecimentos e evidências para justificar posicionamentos e avaliar possibilidades de participação.",
        pontos: 2
      },
      {
        letra: "D",
        texto:
          "Produzam materiais para comunicar o que aprenderam.",
        pontos: 1
      }
    ]
  },

  {
    id: 24,
    tipo: "Estudo de caso",
    dimensao: "D6",
    pergunta:
      "A escola apresenta elevado consumo de água. Os estudantes analisam contas e gráficos digitais. Qual continuidade você considera mais adequada?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Produzir uma apresentação mostrando os resultados.",
        pontos: 0.5
      },
      {
        letra: "B",
        texto:
          "Pesquisar formas de economizar água e elaborar materiais informativos.",
        pontos: 1
      },
      {
        letra: "C",
        texto:
          "Comparar os dados da escola com dados de outros contextos.",
        pontos: 1
      },
      {
        letra: "D",
        texto:
          "Investigar causas, discutir alternativas com diferentes atores e elaborar uma proposta fundamentada de intervenção.",
        pontos: 2
      }
    ]
  },

  {
    id: 25,
    tipo: "Situação de prática",
    dimensao: "D7",
    pergunta:
      'Durante uma aula, um estudante afirma: "Se a inteligência artificial deu essa resposta, deve ser porque ela encontrou a melhor resposta." Como você reagiria?',
    alternativas: [
      {
        letra: "A",
        texto:
          "Explicaria que ferramentas de IA podem cometer erros e precisam ser verificadas.",
        pontos: 1
      },
      {
        letra: "B",
        texto:
          "Proporia a comparação entre respostas da IA e outras fontes.",
        pontos: 1.5
      },
      {
        letra: "C",
        texto:
          "Discutiria também como essas ferramentas são produzidas, quais dados utilizam e que escolhas humanas e interesses influenciam seu funcionamento.",
        pontos: 2
      },
      {
        letra: "D",
        texto:
          "Aproveitaria para explicar, de forma geral, como funciona uma inteligência artificial.",
        pontos: 0.5
      }
    ]
  },

  {
    id: 26,
    tipo: "Situação de prática",
    dimensao: "D7",
    pergunta:
      "A escola passa a utilizar uma plataforma que recomenda atividades automaticamente para cada estudante. Qual aspecto você consideraria mais importante discutir?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Como utilizar corretamente as funcionalidades oferecidas.",
        pontos: 0.5
      },
      {
        letra: "B",
        texto:
          "Se as recomendações estão contribuindo para a aprendizagem.",
        pontos: 1
      },
      {
        letra: "C",
        texto:
          "Como os critérios são definidos, quais dados são utilizados e que consequências essas decisões automatizadas podem gerar.",
        pontos: 2
      },
      {
        letra: "D",
        texto:
          "Se a plataforma apresenta melhores resultados do que os recursos anteriores.",
        pontos: 0.5
      }
    ]
  },

  {
    id: 27,
    tipo: "Estudo de caso",
    dimensao: "D7",
    pergunta:
      "Uma escola utiliza há anos uma plataforma digital que funciona bem para alguns estudantes, mas limita outras formas de participação e produção. Qual posicionamento mais se aproxima do seu?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Manteria a plataforma, desde que cumpra sua função e facilite o trabalho pedagógico.",
        pontos: 0.5
      },
      {
        letra: "B",
        texto:
          "Adaptaria algumas atividades quando a plataforma não atendesse às necessidades da turma.",
        pontos: 1
      },
      {
        letra: "C",
        texto:
          "Discutiria seus limites e buscaria formas mais flexíveis de uso.",
        pontos: 1.5
      },
      {
        letra: "D",
        texto:
          "Consideraria legítimo questionar suas regras, critérios e desenho e propor mudanças em seu funcionamento ou formas de participação.",
        pontos: 2
      }
    ]
  },

  {
    id: 28,
    tipo: "Estudo de caso",
    dimensao: "D7",
    pergunta:
      "Uma empresa oferece gratuitamente uma plataforma educacional em troca do cadastro de professores e estudantes e da coleta de dados de uso. Como você avaliaria a proposta?",
    alternativas: [
      {
        letra: "A",
        texto:
          "Verificaria se a ferramenta oferece recursos pedagogicamente úteis.",
        pontos: 1
      },
      {
        letra: "B",
        texto:
          "Consideraria benefícios pedagógicos, condições de uso, dados coletados, acesso às informações e interesses envolvidos.",
        pontos: 2
      },
      {
        letra: "C",
        texto:
          "Compararia a plataforma com outras opções antes de decidir.",
        pontos: 1.5
      },
      {
        letra: "D",
        texto:
          "Avaliaria principalmente se ela simplificaria o trabalho e aumentaria o envolvimento dos estudantes.",
        pontos: 0.5
      }
    ]
  }
];
