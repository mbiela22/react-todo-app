import PropTypes from "prop-types";
import useTasks from "../../hooks/useTasks";

import './todo-item.css';

export default function TodoItem({item}) {
    const {removeTask, changeTaskCompleted} = useTasks();
    const {id, completed, title} = item;
    return (
        <li className="todo-item">
            <i
                className={completed ? "mark far fa-check-circle" : "mark far fa-circle"}
                onClick={() => changeTaskCompleted(id)}
            />
            <span
                className={completed ? "completed text" : "text"}
            > {title}</span>
            <i
                className="fas fa-times"
                onClick={() => removeTask(id)}
            />
        </li>
    )
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
}
