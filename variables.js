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

try {
    module.exports = {
        baseUrl,
        lista,
        todo,
        handleError
    }
 } catch (e) {}