import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList(props) {
    const {todos, onToggle} = props;
    return (
        <ul>
            {todos.map((todo, index) => {
                return <TodoItem todo={todo} key={todo.id} index={index}  onChange={onToggle}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList

