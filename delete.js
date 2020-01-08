try {
    const variables = require('./variables.js');
    const lista = variables.lista;
    const handleError = variables.handleError;
    const baseUrl = variables.baseUrl;

} catch (e) {}

const deleteTodo = (id) => { 
    axios.delete(`${baseUrl}/${id}`)
        .then(res => {
            const index = lista.findIndex(todo => {
                return todo.id == id;
            })
            lista.splice(index, 1);
        })
        .catch(handleError);
}
 
try {
    module.exports = {
        deleteTodo
    }
 } catch (e) {}