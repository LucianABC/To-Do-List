
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

const todoSearchInput = document.querySelector("#todo-input-search");

const printTodo = (todo) => {
    todoUl.innerHTML=`
    <li>
    <span>ID</span>
    <span>Tarea</span>
    <span>Usuario</span>
    <span>Completada</span>
    <span>Eliminar</span>

</li>`;
        
    let idSpan = document.createElement("span");
    let titleSpan = document.createElement("span");
    let userSpan = document.createElement("span");
    let statusSpan = document.createElement("span");

    idSpan.innerHTML = todo.id;
    idSpan.className = "todo-id";
    titleSpan.innerHTML=todo.title;
    titleSpan.className = "todo-title";
    userSpan.innerHTML=todo.userId;
    userSpan.className = "todo-user";
    statusSpan.innerHTML=todo.completed;
    statusSpan.className = "todo-completed";


    let deleteButton = document.createElement("button");
    deleteButton.className ="todo-delete";
    deleteButton.innerHTML="Eliminar";
    deleteButton.addEventListener("click",()=>{
        let li = deleteButton.parentElement;
        li.parentNode.removeChild(li);
        deleteTodo(todo.id);
    });

    let li = document.createElement("li");
    li.className = "todo-item";

    li.appendChild(idSpan);
    li.appendChild(titleSpan);
    li.appendChild(userSpan);

    li.appendChild(statusSpan);
    li.appendChild(deleteButton);
    if (todo.completed) {
    li.classList.add("done");
    }

    todoUl.appendChild(li)
}

// Buscar por ID
const searchById = async () => {
   const id = todoSearchInput.value;
    try{
        const todo = await axios.get(`${baseUrl}/${id}`);
        for (let item of lista) {
            if (item.id == id){
                printTodo(item);
            }
        } 
    }catch(err){
        handleError;
    }
}

//Buscar por usuario
const searchByUser = async()=>{
    const user = todoSearchInput.value;
    const foundList = [];
    try {
        for (let item of lista) {
            if (item.userId == user){
                const todo = await axios.get(`${baseUrl}/${item.id}`);
                foundList.push(todo.data);
            }
        }  
        printList(foundList);
    }catch (err){
        handleError;
    }
}

//Buscar por texto
const searchByText = async()=>{
    const text = todoSearchInput.value;
    const foundList = [];
    try {
        for (let item of lista) {
            if (item.title.includes(text)){
                const todo = await axios.get(`${baseUrl}/${item.id}`);
                foundList.push(todo.data);
            }
        }  
        printList(foundList);
    }catch (err){
        handleError;
    }
}

//Buscar por estado

const searchByStatus = async (status)=> {
    
    const foundList=[];
    try {
        for (let item of lista) {
            if (item.completed==status){
                const todo = await axios.get(`${baseUrl}/${item.id}`);
                foundList.push(todo.data);
            }
        }  
        printList(foundList);
    }catch (err){
        handleError;
    }

}


const getToDo = event => {
    const select = document.querySelector("#searchSelect");
    switch (select.value) {
        case "id":
            searchById();
            break
        case "user":
            searchByUser();
            break
        case "text":
            searchByText();
            break
        case "true":
            searchByStatus(true);
            break
        case "false":
            searchByStatus(false);
            break
    }
}
const searchButton = document.querySelector("#search-todo-button");
searchButton.addEventListener("click", getToDo);


