import React from 'react';
import { Task } from './types';
import TaskList from './components/TaskList';

function App() {
    const tasks: Task[] = [
        {
            name: 'Clean bathroom',
            status: 'In progress',
            type: 'home',
            assignee: 'David',
            date: new Date(2024, 3, 3),
            description: 'Clean bath, sink and toilet'
        }
    ]
    return (
        <div className="App">
            <TaskList taskList={tasks}/>
        </div>
    );
}

export default App;
