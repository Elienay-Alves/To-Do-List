// Primeiro vamos criar as variaveis para capturar as tags
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefas = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');

//  Abaixo vamos criar as funções
function addTarefa() {
  const listaDeTarefas = textoTarefa.value;
  const lista = document.createElement('li');

  lista.innerText = listaDeTarefas;
  listaTarefas.appendChild(lista);
  // Aprendi a limpar o input no site https://www.geeksforgeeks.org/html-clearing-the-input-field/
  textoTarefa.value = '';
}
// Criando o botão para adicionar as tarefas
criarTarefas.addEventListener('click', addTarefa);
