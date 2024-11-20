import { createSlice } from '@reduxjs/toolkit';
import { Task } from '../../types';

type InitialState = {
    tasks: Task[];
    isEditing: boolean;
}

type TaskEditActionPayload = {
    id: number;
    task: Partial<Task>;
}

const initialState: InitialState = {
    tasks: [
        {
            name: 'Clean bathroom',
            status: 'In progress',
            type: 'home',
            assignee: 'David',
            date: 1732102220,
            description: 'Clean bath, sink and toilet',
            id: 1,
        }
    ],
    isEditing: false,
}

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTask: (state, { payload }: { payload: Task }) => {
            state.tasks.push(payload);
        },
        removeTask: (state, { payload }: { payload: number }) => {
            state.tasks = state.tasks.filter((task) => task.id !== payload);
        },
        editTask: (state, { payload }: { payload: TaskEditActionPayload }) => {
            state.tasks = state.tasks.map((task) => {
                if (task.id === payload.id) {
                    return {
                        name: payload.task.name ?? task.name,
                        date: payload.task.date ?? task.date,
                        description: payload.task.description ?? task.description,
                        deadline: payload.task.deadline ?? task.deadline,
                        type: payload.task.type ?? task.type,
                        status: payload.task.status ?? task.status,
                        assignee: payload.task.assignee ?? task.assignee,
                        id: task.id
                    }
                }
                return task;
            })
        },
        setEdit: (state, { payload }: { payload: boolean }) => {
            state.isEditing = payload;
        }
    }
});

export const { addTask, removeTask, editTask, setEdit } = tasksSlice.actions;

export default tasksSlice.reducer;