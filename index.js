const baseUrl = "https://jsonplaceholder.typicode.com/todos";
let lista = [];
let todo = {
    title: "",
    userId: null,
    completed: false
};

const handleError = err =>{
    alert(`Hubo un error. ${err}`);
};

const getTodos = () =>{
    axios.get(baseUrl)
        .then(res => {
            lista = res.data;
        })
        .catch(handleError);
};

const getTodo = id => {
    axios.get(`${baseUrl}/${id}`)
        .then(res => {
            todo = res.data;
        })
        .catch(handleError);
};

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

const deleteTodo = id => {
    axios.delete(`${baseUrl}/${id}`)
        .then(res => {
            const index = lista.findIndex(todo => {
                return todo.id == id;
            })
            lista.splice(index, 1);
        })
        .catch(handleError);
};

const modifyTodo = (id, title, userId, completed) => {
    let data = {
        id,
        title,
        userId,
        completed
    };
    axios.put(`${baseUrl}/${id}`, data)
        .then(res => {
            for (let i = 0; i < lista.length; i++) {
                if(lista[i].id == id) {
                    lista[i] = res.data;
                }
            }
        })
        .catch(handleError);
};