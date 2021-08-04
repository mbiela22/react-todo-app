import React, {useState} from "react";
import TodoList from "./todo/TodoList";

function App() {

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'buy bread',
            completed: false
        },
        {
            id: 2,
            title: 'buy butter',
            completed: false
        },
        {
            id: 3,
            title: 'buy milk',
            completed: false
        },
    ],)

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }))
    }

    return (
        <div className="wrapper">
            <h1>TodoList</h1>
            <TodoList todos={todos} onToggle={toggleTodo}/>
        </div>
    );
}

export default App;
