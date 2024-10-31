document.addEventListener("DOMContentLoaded", function () {
  const botao = document.querySelector(".fuja");

  botao.addEventListener("mouseover", function () {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const novaPosicaoX = Math.random() * (larguraJanela - botao.offsetWidth);
    const novaPosicaoY = Math.random() * (alturaJanela - botao.offsetHeight);

    botao.style.position = "absolute";
    botao.style.left = novaPosicaoX + "px";
    botao.style.top = novaPosicaoY + "px";
  });
});
