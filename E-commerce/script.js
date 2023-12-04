//Favoritar

// const img = document.querySelector
// var favoritado = "./img/icone.svg"
// var desfavorito = "./img/BotãoFavoritar.png"

// function favoritar(){
//     // const clicar = event.currentTarget;
//   document.getElementById(".favorito").src = desfavorito;
//   let aux = desfavorito;
//   desfavorito = favoritado;
//   favoritado = aux;
// }

// if(img){
//   img.addEventListener("onClick", favoritar)
//   }

//se for clicado, colocar no css display none e ficar trocando

// const imagens = document.querySelectorAll("#favorito");
// var favoritado = "./img/patasFavoritado.png";
// var desfavorito = "./img/BotãoFavoritar.png";

// function trocar() {
//   // const clicada = event.currentTarget;
//   const principal = document.querySelector("#favorito");

//   principal.src = favoritado.src;
//   console.log("ok");
//   // let aux = desfavorito;
//   //   desfavorito = favoritado;
//   //   favoritado = aux;
// }

// imagens.addEventListener("click", trocar);
// imagens.forEach(trocar);

//CONTATOR
const botaoMais = document.querySelector(".quantidade-item .mais");

function somar() {
  const div = document.querySelector(".quantidade-item .contador");
  const total = Number(div.innerText) + 1;
  if (total <= 10) {
    div.innerText = total;
  }
  // innerText pega so o conteudo e guarda na variavel
  else {
    alert("Não é possivel adicionar mais");
  }
}

if (botaoMais) {
  botaoMais.addEventListener("click", somar);
}

const botaoMenos = document.querySelector(".quantidade-item .menos");

function subtrair() {
  const menos = document.querySelector(".quantidade-item .contador");
  const quant = Number(menos.innerText) - 1;
  if (quant <= 10 && quant > 0) {
    menos.innerText = quant;
  } else {
    alert("Não é possivel tirar mais, você deverá excluir o item");
  }
}
if (botaoMenos) {
  botaoMenos.addEventListener("click", subtrair);
}
