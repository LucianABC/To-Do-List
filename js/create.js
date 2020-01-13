
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
const inputNewTitle = document.querySelector("#todo-title-create");
const inputNewUser= document.querySelector("#todo-user-create");
const createTodo = async() => {
    newTitle =inputNewTitle.value;
    newUser = inputNewUser.value;
    let data = {
        title: newTitle,
        userId: newUser,
        completed: false
    }
    try {
        const todo = await axios.post(baseUrl, data);
        lista.push(todo.data);
        printList();
        inputNewTitle.value="";
        inputNewUser.value="";

    }catch(err){
        handleError;
    }
};

const addButton = document.querySelector("#todo-create");
addButton.addEventListener("click", createTodo);

