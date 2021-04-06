let textInput = document.getElementById('texto-tarefa');
let buton = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');
const clickList = document.getElementsByClassName('liStyle');
const btnApaga = document.getElementById('apaga-tudo');
const btnFinalizados = document.getElementById('remover-finalizados');


// Vai adicionando item a lista a cada click
buton.addEventListener('click', function(){  
  let novaLista = document.createElement('li');
  novaLista.classList.add('liStyle');
  lista.appendChild(novaLista).innerText = textInput.value;
  textInput.value = '';  
  mudarCor();  
  complet();
});

// Muda a cor do fundo para cinza
function mudarCor() {
  for (let i = 0; i <  clickList.length; i++) {
    clickList[i].addEventListener('click', function() {
      for (let j = 0; j < clickList.length + 1; j++) {
        if(clickList[j]){
          clickList[j].classList.remove('color');
        }
        event.target.classList.add('color');   
      }
    });
  }
}
function complet() {
  lista.addEventListener('dblclick', function(event) {
    event.target.classList.toggle('completed');
  });  
}
complet();

btnApaga.addEventListener('click', function() {
    lista.innerHTML = '';
});


btnFinalizados.addEventListener('click', function(){
  let finalizados = document.querySelectorAll('li.completed');
  for(let i =0; i < finalizados.length; i++) {
    lista.removeChild(finalizados[i]);
  }
});