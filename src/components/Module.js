import React from 'react';
import TaskSummary from './TaskSummary';
import CreateTask from './CreateTask';

const renderList = (props) => {
    return props.module.tasks.map((task) => {
        return (
            <div key={task.name} className = "ui buttons">
                <TaskSummary task={task} />
            </div>
        );
    });
}

const Module =(props)=> {

    
    //console.log(this.props);
    return (
        <div className="ui raised very padded text container segment">
            <h2 className="ui segment center aligned">{props.module.name}</h2>
            <div>
                {renderList(props)}
            </div>
            <CreateTask />
        </div>
    );
}


export default Module;