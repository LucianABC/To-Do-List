try {
    const variables = require('./variables.js');
    const lista = variables.lista;
    const handleError = variables.handleError;
    const baseUrl = variables.baseUrl;

} catch (e) {}

const deleteTodo = async(id) => { 
    try {
        const data = await axios.delete(`${baseUrl}/${id}`)
        const index = lista.findIndex(todo => {
                return todo.id == id;
        })
        lista.splice(index, 1);
       
    } catch(err) {
        handleError;
    }
}
 
try {
    module.exports = {
        deleteTodo
    }
 } catch (e) {}