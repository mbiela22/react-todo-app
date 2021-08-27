import AddTodoInput from "../components/todo-input/AddTodoInput";
import Title from "../components/title/Title";
import TodoList from "../components/todo-list/TodoList";
import Footer from "../components/footer/Footer";
import useTasks from "../hooks/useTasks";
import useFilter from "../hooks/useFilter";

import './todo-app.css';

export default function TodoApp() {
    const {activeFilter} = useFilter();
    const {allTasks, completedTasks, activeTasks} = useTasks();

    const isTaskExists = allTasks.length > 0;

    let tasks;
    switch (activeFilter) {
        case 'completed':
            tasks = completedTasks;
            break;
        case 'active':
            tasks = activeTasks;
            break;
        default:
            tasks = allTasks;
    }

    return (
        <div className="todo-wrapper">
            <Title title="Todo App"/>
            <AddTodoInput/>
            {isTaskExists && <TodoList tasks={tasks}/>}
            {isTaskExists && <Footer activeTaskAmount={activeTasks.length}/>}
        </div>
    )
}
