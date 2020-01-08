
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





const createTodo = event => {
     newTitle = document.querySelector("#todo-title-create").value;
     newUser = document.querySelector("#todo-user-create").value;
    let data = {
        title: newTitle,
        userId: newUser,
        completed: false
    }
    lista.push(data); // ahora no anda el push?
    /*axios.post(baseUrl, data)
        .then(res => {
            lista.push(res.data);
            //pushea algo vacio.
        })
        .catch(handleError);*/
};

const addButton = document.querySelector("#todo-create");
addButton.addEventListener("click", createTodo);
addButton.addEventListener("click", getTodos);
//el get se ejecuta antes que el create
