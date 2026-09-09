let indiceAtual = 0;
let respostas = new Array(perguntas.length).fill(null);

const telaInicial = document.getElementById("tela-inicial");
const telaQuiz = document.getElementById("tela-quiz");
const telaProcessando = document.getElementById("tela-processando");
const telaResultado = document.getElementById("tela-resultado");

const btnIniciar = document.getElementById("btn-iniciar");
const btnVoltar = document.getElementById("btn-voltar");
const btnAvancar = document.getElementById("btn-avancar");
const btnRefazer = document.getElementById("btn-refazer");

const numeroAtual = document.getElementById("numero-atual");
const totalPerguntas = document.getElementById("total-perguntas");
const percentualProgresso = document.getElementById("percentual-progresso");
const barraProgresso = document.getElementById("barra-progresso-preenchimento");

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

function embaralharAlternativas(alternativas) {
  const copia = alternativas.map((alternativa, indiceOriginal) => ({
    ...alternativa,
    indiceOriginal
  }));

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

const alternativasEmbaralhadas = perguntas.map((pergunta) =>
  embaralharAlternativas(pergunta.alternativas)
);

function atualizarProgresso() {
  const atual = indiceAtual + 1;
  const percentual = Math.round((atual / perguntas.length) * 100);

  numeroAtual.textContent = atual;
  percentualProgresso.textContent = `${percentual}%`;
  barraProgresso.style.width = `${percentual}%`;
}

function renderizarPergunta() {
  const perguntaAtual = perguntas[indiceAtual];
  const alternativas = alternativasEmbaralhadas[indiceAtual];

  atualizarProgresso();

  tipoPergunta.textContent = perguntaAtual.tipo;
  textoPergunta.textContent = perguntaAtual.pergunta;

  alternativasContainer.innerHTML = "";

  alternativas.forEach((alternativaVisual) => {
    const botao = document.createElement("button");

    botao.type = "button";
    botao.className = "alternativa";

    const respostaSalva = respostas[indiceAtual];

    if (respostaSalva === alternativaVisual.indiceOriginal) {
      botao.classList.add("selecionada");
    }

    botao.innerHTML = `
      <span class="alternativa-letra">${alternativaVisual.letra}</span>
      <span>${alternativaVisual.texto}</span>
    `;

    botao.addEventListener("click", () => {
      respostas[indiceAtual] = alternativaVisual.indiceOriginal;

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
    respostas[indiceAtual] === null ||
    respostas[indiceAtual] === undefined;

  if (indiceAtual === perguntas.length - 1) {
    btnAvancar.textContent = "Ver meu diagnóstico";
  } else {
    btnAvancar.textContent = "Próxima";
  }
}

function criarBarraDimensao(valor) {
  const wrapper = document.createElement("div");
  wrapper.className = "barra-resultado";

  const preenchimento = document.createElement("div");
  preenchimento.className = "barra-resultado-preenchimento";
  preenchimento.style.width = `${valor}%`;

  wrapper.appendChild(preenchimento);

  return wrapper;
}

function formatarListaNomes(lista) {
  return lista.map((dimensao) => nomesDimensoes[dimensao]).join(" e ");
}

function renderizarResultado(resultado) {
  document.getElementById("resultado-perfil").textContent =
    resultado.perfil;

  const tendenciaElemento = document.getElementById("resultado-tendencia");

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

  setTimeout(() => {
    document.getElementById("barra-ip").style.width =
      `${resultado.ip}%`;

    document.getElementById("barra-ic").style.width =
      `${resultado.ic}%`;
  }, 150);

  const listaDimensoes = document.getElementById("lista-dimensoes");

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
  const reflexao = document.getElementById("reflexao-destaque");

  if (maiores.length === 1) {
    const dimensao = maiores[0];
    const nivel = resultado.niveisDimensoes[dimensao];
    const devolutiva = devolutivasDimensoes[dimensao][nivel];

    titulo.textContent =
      `${nomesDimensoes[dimensao]} — ${valor}% · ${nivel}`;

    texto.textContent = devolutiva.texto;
    reflexao.textContent = devolutiva.reflexao;
  } else {
    titulo.textContent =
      `${formatarListaNomes(maiores)} — ${valor}%`;

    const primeiraDimensao = maiores[0];
    const nivel = resultado.niveisDimensoes[primeiraDimensao];
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

  const titulo = document.getElementById("titulo-ampliacao");
  const texto = document.getElementById("texto-ampliacao");

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

function finalizarDiagnostico() {
  mostrarTela(telaProcessando);

  setTimeout(() => {
    const resultado = calcularDiagnostico(respostas);

    renderizarResultado(resultado);

    mostrarTela(telaResultado);
  }, 900);
}

btnIniciar.addEventListener("click", () => {
  indiceAtual = 0;
  mostrarTela(telaQuiz);
  renderizarPergunta();
});

btnVoltar.addEventListener("click", () => {
  if (indiceAtual > 0) {
    indiceAtual--;
    renderizarPergunta();
  }
});

btnAvancar.addEventListener("click", () => {
  const respostaAtual = respostas[indiceAtual];

  if (respostaAtual === null || respostaAtual === undefined) {
    return;
  }

  if (indiceAtual < perguntas.length - 1) {
    indiceAtual++;
    renderizarPergunta();
  } else {
    finalizarDiagnostico();
  }
});

btnRefazer.addEventListener("click", () => {
  const confirmar = window.confirm(
    "Deseja realmente refazer o diagnóstico? Suas respostas atuais serão apagadas."
  );

  if (!confirmar) {
    return;
  }

  respostas = new Array(perguntas.length).fill(null);
  indiceAtual = 0;

  mostrarTela(telaInicial);
});
