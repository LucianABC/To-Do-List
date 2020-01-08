
try {
    const variables = require('./variables.js');
    const lista = variables.lista;
    const handleError = variables.handleError;
    const todo = variables.todo;
    const baseUrl = variables.baseUrl;

 } catch (e) {}

const addButton = document.querySelector("#todo-create");
const newTitleInput = document.querySelector("#todo-title-create");
const newUserInput = document.querySelector("#todo-user-create");

let title = newTitleInput.value;
let user = newUserInput.value;

const createTodo = (title, userId) => {
    let data = {
        title,
        userId,
        completed: false
    }
    axios.post(baseUrl, data)
        .then(res => {
            lista.push(res.data);
        })
        .catch(handleError);
};



addButton.addEventListener(click, createTodo(title,user))