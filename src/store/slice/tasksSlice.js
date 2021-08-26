import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        {
            id: '1',
            title: "Learn React",
            completed: false,
        },
        {
            id: '2',
            title: "Learn HTML",
            completed: false,
        },
        {
            id: '3',
            title: "Learn CSS",
            completed: false,
        },
        {
            id: '4',
            title: "Become  Full-Stack Developer",
            completed: false,
        },
    ],
}

export const tasksSlice = createSlice({
        name: 'tasks',
        initialState,

        reducers: {
            add: (state, action) => {
                state.tasks.push({
                    id: Date.now(),
                    title: action.payload,
                    completed: false,
                });
            },

            remove: (state, action) => {
                state.tasks=state.tasks.filter(task=>task.id!==action.payload);
            },

            changeCompleted: (state, action) => {
                state.tasks.map(task => {
                    if (task.id === action.payload) {
                        task.completed = !task.completed;
                    }
                    return task;
                })
            }
        }
    }
)

export const {add, remove, changeCompleted} = tasksSlice.actions;

export default tasksSlice.reducer;
