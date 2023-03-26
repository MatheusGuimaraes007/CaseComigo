const botaonao = document.querySelector('.nao');

function moverBotao(event){
    event.preventDefault();
    event.currentTarget.classList.toggle('ativo');

}

botaonao.addEventListener('mouseenter', moverBotao);

