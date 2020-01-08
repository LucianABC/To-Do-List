const baseUrl = "https://jsonplaceholder.typicode.com/todos";
let lista = [];
let todo = {
    id: null,
    title: "",
    userId: null,
    completed: false
};

const handleError = err =>{
    alert(`Hubo un error. ${err}`);
};

const todoUl = document.querySelector("#todo-list");
try {
    module.exports = {
        baseUrl,
        lista,
        todo,
        handleError,
        todoUl
    }
 } catch (e) {}