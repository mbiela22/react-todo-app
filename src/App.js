import React, {useEffect, useState} from "react";
import TodoList from "./todo/TodoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";
import Loader from './loader/Loader';

function App() {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(loading);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => setTimeout(() => {
                setTodos(todos)
                setLoading(false)
            }, 2000))
    }, []);

    function addTodo(title) {
        setTodos(todos.concat(
            [
                {
                    title,
                    id: Date.now(),
                    completed: false
                }
            ]
        ))
    }

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }))
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <Context.Provider value={{onToggle: toggleTodo, onRemove: removeTodo}}>
            <div className="wrapper">
                <h1>TodoList</h1>
                <AddTodo onCreate={addTodo}/>
                {loading && <Loader/>}
                {todos.length ? <TodoList todos={todos}/> : (loading ? null : <p>No todos</p>)}
            </div>
        </Context.Provider>
    );
}

export default App;
