// Primeiro vamos criar as variaveis para capturar as tags
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefas = document.getElementById('criar-tarefa');
const textoTarefas = document.getElementById('texto-tarefa');

//  Abaixo vamos criar as funções
function addTarefa(eventoDeOrigem) {
  console.log(eventoDeOrigem.target);
  console.log(eventoDeOrigem.type);
}

// Criando o botão para adicionar as tarefas
criarTarefas.addEventListener('click', addTarefa);
