const URL_PLANILHA =
  "https://script.google.com/macros/s/AKfycbwTfadzs-iw9Codpmjo-nEMvtMlmCFD5hI5YpxLawxNv2Gwkr1OcOhVSt5bxnKdySnn/exec";

let indiceAtual = 0;
let respostas = [];
let perguntasAplicacao = [];

let dadosParticipante = {
  area: "",
  disciplinas: [],
  etapas: [],
  tempoDocencia: "",
  frequenciaTDIC: "",
  consentimento: false
};

const telaInicial = document.getElementById("tela-inicial");
const telaCaracterizacao = document.getElementById("tela-caracterizacao");
const telaQuiz = document.getElementById("tela-quiz");
const telaProcessando = document.getElementById("tela-processando");
const telaResultado = document.getElementById("tela-resultado");

const btnIniciar = document.getElementById("btn-iniciar");
const btnVoltarInicio = document.getElementById("btn-voltar-inicio");
const btnContinuar = document.getElementById("btn-continuar");
const btnVoltar = document.getElementById("btn-voltar");
const btnAvancar = document.getElementById("btn-avancar");
const btnRefazer = document.getElementById("btn-refazer");

const areaAtuacao = document.getElementById("area-atuacao");
const tempoDocencia = document.getElementById("tempo-docencia");
const frequenciaTDIC = document.getElementById("frequencia-tdic");
const consentimento = document.getElementById("consentimento");

const numeroAtual = document.getElementById("numero-atual");
const totalPerguntas = document.getElementById("total-perguntas");
const percentualProgresso = document.getElementById("percentual-progresso");
const barraProgresso = document.getElementById(
  "barra-progresso-preenchimento"
);

const tipoPergunta = document.getElementById("tipo-pergunta");
const textoPergunta = document.getElementById("texto-pergunta");
const alternativasContainer = document.getElementById("alternativas");

totalPerguntas.textContent = perguntas.length;

function mostrarTela(tela) {
  document.querySelectorAll(".tela").forEach((item) => {
    item.classList.remove("ativa");
  });

  tela.classList.add("ativa");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function obterSelecionados(nome) {
  return Array.from(
    document.querySelectorAll(`input[name="${nome}"]:checked`)
  ).map((item) => item.value);
}

function validarCaracterizacao() {
  const disciplinas = obterSelecionados("disciplina");
  const etapas = obterSelecionados("etapa");

  const valido =
    areaAtuacao.value !== "" &&
    disciplinas.length > 0 &&
    etapas.length > 0 &&
    tempoDocencia.value !== "" &&
    frequenciaTDIC.value !== "" &&
    consentimento.checked;

  btnContinuar.disabled = !valido;

  return valido;
}

function salvarCaracterizacao() {
  dadosParticipante = {
    area: areaAtuacao.value,
    disciplinas: obterSelecionados("disciplina"),
    etapas: obterSelecionados("etapa"),
    tempoDocencia: tempoDocencia.value,
    frequenciaTDIC: frequenciaTDIC.value,
    consentimento: consentimento.checked
  };
}

[
  areaAtuacao,
  tempoDocencia,
  frequenciaTDIC,
  consentimento
].forEach((elemento) => {
  elemento.addEventListener("change", validarCaracterizacao);
});

document
  .querySelectorAll(
    'input[name="disciplina"], input[name="etapa"]'
  )
  .forEach((elemento) => {
    elemento.addEventListener("change", validarCaracterizacao);
  });

function embaralharArray(array) {
  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

function prepararAplicacao() {
  perguntasAplicacao = embaralharArray(
    perguntas.map((pergunta, indiceOriginal) => ({
      ...pergunta,
      indiceOriginal
    }))
  );

  respostas = new Array(perguntas.length).fill(null);

  perguntasAplicacao.forEach((perguntaAplicacao) => {
    perguntaAplicacao.alternativasVisual = embaralharArray(
      perguntaAplicacao.alternativas.map(
        (alternativa, indiceAlternativaOriginal) => ({
          ...alternativa,
          indiceAlternativaOriginal
        })
      )
    );
  });
}

function atualizarProgresso() {
  const atual = indiceAtual + 1;
  const percentual = Math.round(
    (atual / perguntasAplicacao.length) * 100
  );

  numeroAtual.textContent = atual;
  percentualProgresso.textContent = `${percentual}%`;
  barraProgresso.style.width = `${percentual}%`;
}

function renderizarPergunta() {
  const perguntaAtual = perguntasAplicacao[indiceAtual];
  const alternativas = perguntaAtual.alternativasVisual;

  atualizarProgresso();

  tipoPergunta.textContent = perguntaAtual.tipo;
  textoPergunta.textContent = perguntaAtual.pergunta;

  alternativasContainer.innerHTML = "";

  const letrasVisuais = ["A", "B", "C", "D"];

  alternativas.forEach((alternativaVisual, indiceVisual) => {
    const botao = document.createElement("button");

    botao.type = "button";
    botao.className = "alternativa";

    const respostaSalva =
      respostas[perguntaAtual.indiceOriginal];

    if (
      respostaSalva ===
      alternativaVisual.indiceAlternativaOriginal
    ) {
      botao.classList.add("selecionada");
    }

    botao.innerHTML = `
      <span class="alternativa-letra">${letrasVisuais[indiceVisual]}</span>
      <span>${alternativaVisual.texto}</span>
    `;

    botao.addEventListener("click", () => {
      respostas[perguntaAtual.indiceOriginal] =
        alternativaVisual.indiceAlternativaOriginal;

      document.querySelectorAll(".alternativa").forEach((item) => {
        item.classList.remove("selecionada");
      });

      botao.classList.add("selecionada");
      btnAvancar.disabled = false;
    });

    alternativasContainer.appendChild(botao);
  });

  btnVoltar.disabled = indiceAtual === 0;

  btnAvancar.disabled =
    respostas[perguntaAtual.indiceOriginal] === null ||
    respostas[perguntaAtual.indiceOriginal] === undefined;

  if (indiceAtual === perguntasAplicacao.length - 1) {
    btnAvancar.textContent = "Ver meu diagnóstico";
  } else {
    btnAvancar.textContent = "Próxima";
  }
}

function criarBarraDimensao(valor) {
  const wrapper = document.createElement("div");
  wrapper.className = "barra-resultado";

  const preenchimento = document.createElement("div");
  preenchimento.className =
    "barra-resultado-preenchimento";
  preenchimento.style.width = `${valor}%`;

  wrapper.appendChild(preenchimento);

  return wrapper;
}

function formatarListaNomes(lista) {
  return lista
    .map((dimensao) => nomesDimensoes[dimensao])
    .join(" e ");
}

function renderizarResultado(resultado) {
  document.getElementById("resultado-perfil").textContent =
    resultado.perfil;

  const tendenciaElemento =
    document.getElementById("resultado-tendencia");

  if (resultado.tendencia) {
    tendenciaElemento.textContent = resultado.tendencia;
    tendenciaElemento.style.display = "block";
  } else {
    tendenciaElemento.textContent = "";
    tendenciaElemento.style.display = "none";
  }

  document.getElementById("valor-ip").textContent =
    `${resultado.ip}%`;

  document.getElementById("valor-ic").textContent =
    `${resultado.ic}%`;

  document.getElementById("nivel-ip").textContent =
    resultado.nivelIP;

  document.getElementById("nivel-ic").textContent =
    resultado.nivelIC;

  document.getElementById("barra-ip").style.width = "0%";
  document.getElementById("barra-ic").style.width = "0%";

  setTimeout(() => {
    document.getElementById("barra-ip").style.width =
      `${resultado.ip}%`;

    document.getElementById("barra-ic").style.width =
      `${resultado.ic}%`;
  }, 150);

  const listaDimensoes =
    document.getElementById("lista-dimensoes");

  listaDimensoes.innerHTML = "";

  Object.keys(resultado.dimensoes).forEach((dimensao) => {
    const valor = resultado.dimensoes[dimensao];
    const nivel = resultado.niveisDimensoes[dimensao];

    const item = document.createElement("div");
    item.className = "dimensao-item";

    const cabecalho = document.createElement("div");
    cabecalho.className = "dimensao-cabecalho";

    const nome = document.createElement("span");
    nome.className = "dimensao-nome";
    nome.textContent = nomesDimensoes[dimensao];

    const resultadoTexto = document.createElement("span");
    resultadoTexto.className = "dimensao-resultado";
    resultadoTexto.textContent = `${valor}% · ${nivel}`;

    cabecalho.appendChild(nome);
    cabecalho.appendChild(resultadoTexto);

    item.appendChild(cabecalho);
    item.appendChild(criarBarraDimensao(valor));

    listaDimensoes.appendChild(item);
  });

  renderizarDestaque(resultado);
  renderizarAmpliacao(resultado);
}

function renderizarDestaque(resultado) {
  const maiores = resultado.destaques.maiores;
  const valor = resultado.destaques.maiorValor;

  const titulo = document.getElementById("titulo-destaque");
  const texto = document.getElementById("texto-destaque");
  const reflexao =
    document.getElementById("reflexao-destaque");

  if (maiores.length === 1) {
    const dimensao = maiores[0];
    const nivel = resultado.niveisDimensoes[dimensao];
    const devolutiva =
      devolutivasDimensoes[dimensao][nivel];

    titulo.textContent =
      `${nomesDimensoes[dimensao]} — ${valor}% · ${nivel}`;

    texto.textContent = devolutiva.texto;
    reflexao.textContent = devolutiva.reflexao;
  } else {
    titulo.textContent =
      `${formatarListaNomes(maiores)} — ${valor}%`;

    const primeiraDimensao = maiores[0];
    const nivel =
      resultado.niveisDimensoes[primeiraDimensao];

    const devolutiva =
      devolutivasDimensoes[primeiraDimensao][nivel];

    texto.textContent =
      `Seu resultado apresenta empate entre ${formatarListaNomes(
        maiores
      )}, indicando que essas dimensões aparecem como os principais destaques do seu diagnóstico.`;

    reflexao.textContent = devolutiva.reflexao;
  }
}

function renderizarAmpliacao(resultado) {
  const menores = resultado.destaques.menores;
  const valor = resultado.destaques.menorValor;

  const titulo =
    document.getElementById("titulo-ampliacao");

  const texto =
    document.getElementById("texto-ampliacao");

  if (menores.length === 1) {
    const dimensao = menores[0];
    const nivel = resultado.niveisDimensoes[dimensao];

    titulo.textContent =
      `${nomesDimensoes[dimensao]} — ${valor}% · ${nivel}`;

    texto.textContent = ampliacoes[dimensao];
  } else {
    titulo.textContent =
      `${formatarListaNomes(menores)} — ${valor}%`;

    texto.textContent =
      "Essas dimensões apresentam, neste diagnóstico, maior possibilidade de ampliação. Elas podem ser fortalecidas gradualmente em novas situações pedagógicas com TDICs.";
  }
}

function gerarIdParticipante() {
  const agora = Date.now();
  const aleatorio = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();

  return `TDIC-${agora}-${aleatorio}`;
}

function prepararDadosParaPlanilha(resultado) {
  const dados = {
    id: gerarIdParticipante(),

    Area_Atuacao: dadosParticipante.area,

    Disciplina:
      dadosParticipante.disciplinas.join(" | "),

    Etapa_Ensino:
      dadosParticipante.etapas.join(" | "),

    Tempo_Docencia:
      dadosParticipante.tempoDocencia,

    Frequencia_TDIC:
      dadosParticipante.frequenciaTDIC,

    Consentimento:
      dadosParticipante.consentimento ? "Sim" : "Não",

    D1: resultado.dimensoes.D1,
    D2: resultado.dimensoes.D2,
    D3: resultado.dimensoes.D3,
    D4: resultado.dimensoes.D4,
    D5: resultado.dimensoes.D5,
    D6: resultado.dimensoes.D6,
    D7: resultado.dimensoes.D7,

    IP: resultado.ip,
    IC: resultado.ic,

    Nivel_IP: resultado.nivelIP,
    Nivel_IC: resultado.nivelIC,

    Perfil: resultado.perfil,
    Tendencia: resultado.tendencia || "",

    Destaque:
      formatarListaNomes(resultado.destaques.maiores),

    Ampliacao:
      formatarListaNomes(resultado.destaques.menores)
  };

  perguntas.forEach((pergunta, indice) => {
    const respostaOriginal = respostas[indice];

    if (
      respostaOriginal !== null &&
      respostaOriginal !== undefined
    ) {
      dados[`Q${indice + 1}`] =
        pergunta.alternativas[respostaOriginal].letra;
    } else {
      dados[`Q${indice + 1}`] = "";
    }
  });

  return dados;
}

async function enviarParaPlanilha(resultado) {
  const dados = prepararDadosParaPlanilha(resultado);

  try {
    await fetch(URL_PLANILHA, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(dados)
    });

    return true;
  } catch (erro) {
    console.error(
      "Não foi possível enviar os dados para a planilha:",
      erro
    );

    return false;
  }
}

function mostrarStatusEnvio(sucesso) {
  let aviso = document.getElementById("status-envio");

  if (!aviso) {
    aviso = document.createElement("div");
    aviso.id = "status-envio";
    aviso.className = "status-envio";

    const resultadoContainer =
      document.querySelector(".resultado-container");

    const topo =
      document.querySelector(".resultado-topo");

    resultadoContainer.insertBefore(aviso, topo.nextSibling);
  }

  if (sucesso) {
    aviso.className = "status-envio sucesso";
    aviso.textContent =
      "Resposta registrada com sucesso.";
  } else {
    aviso.className = "status-envio aviso";
    aviso.textContent =
      "Seu diagnóstico foi concluído, mas não foi possível confirmar o registro dos dados.";
  }
}

function finalizarDiagnostico() {
  mostrarTela(telaProcessando);

  setTimeout(async () => {
    const resultado = calcularDiagnostico(respostas);

    renderizarResultado(resultado);

    const envioSucesso =
      await enviarParaPlanilha(resultado);

    mostrarTela(telaResultado);

    mostrarStatusEnvio(envioSucesso);
  }, 900);
}

/* TELA INICIAL */

btnIniciar.addEventListener("click", () => {
  mostrarTela(telaCaracterizacao);
  validarCaracterizacao();
});

/* CARACTERIZAÇÃO */

btnVoltarInicio.addEventListener("click", () => {
  mostrarTela(telaInicial);
});

btnContinuar.addEventListener("click", () => {
  if (!validarCaracterizacao()) {
    alert(
      "Preencha todos os campos e confirme o consentimento antes de continuar."
    );
    return;
  }

  salvarCaracterizacao();
  prepararAplicacao();

  indiceAtual = 0;

  mostrarTela(telaQuiz);
  renderizarPergunta();
});

/* QUIZ */

btnVoltar.addEventListener("click", () => {
  if (indiceAtual > 0) {
    indiceAtual--;
    renderizarPergunta();
  } else {
    mostrarTela(telaCaracterizacao);
  }
});

btnAvancar.addEventListener("click", () => {
  const perguntaAtual =
    perguntasAplicacao[indiceAtual];

  const respostaAtual =
    respostas[perguntaAtual.indiceOriginal];

  if (
    respostaAtual === null ||
    respostaAtual === undefined
  ) {
    return;
  }

  if (indiceAtual < perguntasAplicacao.length - 1) {
    indiceAtual++;
    renderizarPergunta();
  } else {
    finalizarDiagnostico();
  }
});

/* REFAZER */

btnRefazer.addEventListener("click", () => {
  const confirmar = window.confirm(
    "Deseja realmente refazer o diagnóstico? Suas respostas atuais serão apagadas."
  );

  if (!confirmar) {
    return;
  }

  respostas = [];
  perguntasAplicacao = [];
  indiceAtual = 0;

  dadosParticipante = {
    area: "",
    disciplinas: [],
    etapas: [],
    tempoDocencia: "",
    frequenciaTDIC: "",
    consentimento: false
  };

  areaAtuacao.value = "";
  tempoDocencia.value = "";
  frequenciaTDIC.value = "";
  consentimento.checked = false;

  document
    .querySelectorAll(
      'input[name="disciplina"], input[name="etapa"]'
    )
    .forEach((item) => {
      item.checked = false;
    });

  btnContinuar.disabled = true;

  const statusEnvio =
    document.getElementById("status-envio");

  if (statusEnvio) {
    statusEnvio.remove();
  }

  mostrarTela(telaInicial);
});
