import useInput from "../../hooks/useInput";
import useTasks from "../../hooks/useTasks";

import './add-todo-input.css';

export default function AddTodoInput() {
    const input = useInput('');
    const {addTask} = useTasks();

    function handleKeyPress(key) {
        const todoTitle = input.value();
        if (todoTitle.length > 3 && key === 'Enter') {
            addTask(todoTitle);
            input.clear();
        }
    }

    return (
        <div className="todo-input-wrapper">
            <i className="fas fa-plus"/>
            <input
                className="todo-input"
                placeholder="Click to add task"
                onKeyPress={({key}) => handleKeyPress(key)}
                {...input.bind}
            />
        </div>
    )
}
