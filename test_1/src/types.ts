export type Task = {
    name: string;
    type: TaskType;
    status: 'Done' | 'In progress';
    description: string;
    date: Date;
    assignee?: string;
    deadline?: Date;
    place?: string;
}

type TaskType = 'work' | 'home' | 'study' | 'family';