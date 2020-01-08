let toDo;
let toDoList;

const getToDo = (id) => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => 
        toDo=res.data)
    .catch(err => console.log(err));
}

const getToDoList = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(res => 
        toDoList= res.data)
    .catch(err => console.log(err));
}

const deleteToDo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {    
        getToDoList();
    })
    .catch(err => {throw err;});
}

const deleteToDoList = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos`)
    .then(res => console.log(res.data))
    .catch(err => {throw err;});
}

const postToDo = (userId, title, completed) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
    userId: userId, 
    title: title,
    completed: completed,
    }).then(res =>{
        getToDoList();
    }).catch(err => {throw err;});
}

const modifyToDo = (id, userId, newTitle, completed) => {
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    title: newTitle,
    userId: userId,
    completed: completed,
    }).then(res => {
        toDo=res.data
    }).catch(err => {throw err;});
}