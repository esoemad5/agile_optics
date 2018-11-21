import React from 'react';
import Module from './Module';
import TaskDetails from './TaskDetails'
import Project from './Project'

const App = () => {
    return (
        <div>
            <Project />
            <TaskDetails />
        </div>
    );
}

export default App;