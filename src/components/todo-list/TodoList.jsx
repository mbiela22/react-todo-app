import PropTypes from "prop-types";
import TodoItem from "../todo-item/TodoItem";

import './todo-list.css';

export default function TodoList({tasks}) {
    return (
        <ul className="todo-list">
            {tasks.map((item, index) => (
                <TodoItem key={index} item={item}/>
            ))}
        </ul>
    )
}

TodoList.propTypes = {
    tasks: PropTypes.array.isRequired,
}
