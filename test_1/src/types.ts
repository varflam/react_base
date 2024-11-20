export type Task = {
    name: string;
    type: TaskType;
    status: 'Done' | 'In progress';
    description: string;
    date: number;
    assignee?: string;
    deadline?: number;
    place?: string;
    id: number;
}

type TaskType = 'work' | 'home' | 'study' | 'family';