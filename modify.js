
try {
    const variables = require('./variables.js');
    const lista = variables.lista;
    const handleError = variables.handleError;
    const todo = variables.todo;
    const baseUrl = variables.baseUrl;
    const todoUl = variables.todoUl;

    const printlistjs = require('./printlist.js');
    const printList = printlistjs.printList;
    const getTodos = printlistjs.getTodos;

} catch (e) {}
    
const todoIdUpdt = document.querySelector("#todo-id-update");
const todoTitleUpdt = document.querySelector("#todo-title-update");
const todoUserUpdt = document.querySelector("#todo-user-update");
const todoStatusUpdt = document.querySelector("#todo-completed-update");


const modifyTodo = () => {
    let id=todoIdUpdt.value;
    let title=todoTitleUpdt.value;
    for (let todo of lista) {
        if(todo.id == id) {
            if (title == "") {
                title = todo.title;
            }        
        }
    }
    
    let userId = todoUserUpdt.value;
    let completed = todoStatusUpdt.checked;
    let data = {
        title,
        userId,
        completed
    }
    
    axios.put(`${baseUrl}/${id}`, data)
        .then(res => {
            for (let i = 0; i < lista.length; i++) {
                if(lista[i].id == id) {
                    lista[i] = res.data;
                }
            }
            printList();
        })
        .catch(handleError);
};

const updateButton = document.querySelector("#todo-update");
updateButton.addEventListener("click", modifyTodo);
