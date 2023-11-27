//Passar de forma automatica os slides da HOME

// let count = 1;
// document.getElementById("radio1").checked = true;

// setInterval( function(){
//   nextImage();
// },10000)

// function nextImage() {
//   count++;
//   if (count >4){
//     count = 1;
//   }
//   document.getElementById("radio"+count).checked = true;

// }
//fim dos slides


//Favoritar

// const img = document.querySelector(".favorito");
// let favoritado = "./img/icone.svg"
// let desfavorito = "./img/BotãoFavoritar.png"

// function favoritar(event){
//     const clicar = event.currentTarget;
  
//   if(img.src == favoritado){
//     img.src = desfavorito;
//   }else{
//     img.src = favoritado
//   }
// }

// if(img){
// img.addEventListener("click", favoritar())
// }

//se for clicado, colocar no css display none e ficar trocando


//CONTATOR
const botaoMais = document.querySelector('.quantidade-item .mais');

function somar(){
  const div = document.querySelector(".quantidade-item .contador");
  const total = Number(div.innerText) +1;
      if (total <= 10) {
          div.innerText = total ;
      }
      // innerText pega so o conteudo e guarda na variavel
      else {
          alert("Não é possivel adicionar mais")
      }
}

if (botaoMais){

  botaoMais.addEventListener('click', somar);
}

const botaoMenos = document.querySelector(".quantidade-item .menos");

function subtrair(){
  const div = document.querySelector(".quantidade-item .menos");
  const quant = Number(div.innerText) -1;
    if (quant >=10 && quant <0){
      div.innerText = quant;
    }
    else{
      alert("Não é possivel tirar mais")
    }
}
if (botaoMenos){
  botaoMenos.addEventListener('click', subtrair);
}