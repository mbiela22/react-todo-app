import {useDispatch, useSelector} from "react-redux";
import {add, changeCompleted, remove} from "../store/slice/tasksSlice";

export default function useTasks() {
    const allTasks = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();

    return {
        allTasks,
        completedTasks: filterTasksByCompleted(allTasks, true),
        activeTasks: filterTasksByCompleted(allTasks, false),

        removeTask: (id) => {
            dispatch(remove(id));
        },

        changeTaskCompleted(id) {
            dispatch(changeCompleted(id));
        },

        addTask: (title) => {
            dispatch(add(title));
        }
    }
}

function filterTasksByCompleted(tasks, isCompleted) {
    return tasks.filter(task => task.completed === isCompleted);
}
