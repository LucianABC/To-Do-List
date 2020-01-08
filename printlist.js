try {
    const variables = require('./variables.js');
    const lista = variables.lista;
    const handleError = variables.handleError;
    const todo = variables.todo;
    const baseUrl = variables.baseUrl;

 } catch (e) {}

const todoUl = document.querySelector("#todo-list");

 const printList = () => {

    for (let todo of lista) {
        let idSpan = document.createElement("span");
        let titleSpan = document.createElement("span");
        let userSpan = document.createElement("span");
        let statusSpan = document.createElement("span");
        let deleteButton = document.createElement("button");
        

    }
 }