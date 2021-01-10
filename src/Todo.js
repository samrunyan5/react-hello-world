import React from 'react';

const TodoForm = (props) => {
    const [newTodo, setNewTodo] = React.useState('')
    const addTodo = props.addTodo

    return (
        <>
            <form className='todo-form' onSubmit={(event) => {
                event.preventDefault()
                addTodo(newTodo)
                setNewTodo('')
            }}>
                <input type ='text' value ={newTodo} placeholder='Input New Todo...' onChange={(event) => {
                setNewTodo(event.target.value)
                }}></input>
                <button>Add Todo</button>
            </form>
        </>
    )
}

const TodoList = (props) => {
    const todoList = props.todoList

    return (
        <div className='todo-list'>
            {todoList.map((todo, index) => {
                return <h3 key={index}>{todo}</h3>
            })}
        </div>
    )
}

const Todo = (props) => {
    const [todoList, setTodoList] = React.useState([])

    function addTodo(todo) {
        let copy = [...todoList]
        copy.push(todo)
        setTodoList(copy)
    }

    return (
        <div className='todo'>
            <h1>Todo</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todoList={todoList}/>
        </div>
    )
}

export default Todo;