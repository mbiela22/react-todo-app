import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList(props) {
    const {todos} = props;

    return (
        <ul>
            {todos.map((todo, index) => {
                return <TodoItem todo={todo} key={todo.id} index={index}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

export default TodoList

