    // estado da aplicação
const tarefas = ['Etudar HTML', 'Estudar CSS', 'Estudar JS']


function add() {
const ul = document.querySelector("ul")
const input = document.querySelector("input")
const tarefa = input.value
const li = document.createElement("li")
li.innerText = tarefa
ul.appendChild(li)
input.value = ""
}
function render() {}

render() 
