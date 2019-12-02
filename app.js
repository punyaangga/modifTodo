let todos =[{
    text:'Daftar Belanja',
    complate:false,
}]

const generateTodo=function(todo){
    const p=document.createElement('p')
    p.textContent = todo.text
    return p
}
const renderTodos = function(todos){
    document.querySelector('#todos').innerHTML=""
    todos.forEach(function(todo){
        document.querySelector('#todos').appendChild(generateTodo(todo))   
         
    })
    
}
//save todo
const saveTodo = function(){

}
document.querySelector('#new-todos').addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({
        text:e.target.elements.text.value,
        completed: false

    })
    renderTodos(todos)
    e.target.elements.text.value = ""
})
renderTodos(todos)
