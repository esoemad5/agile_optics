import React from 'react';
import TaskSummary from './TaskSummary';
import CreateTask from './CreateTask';

const renderList = (props) => {
    return (
        <div>
            { props.module.tasks && props.module.tasks.map((task) => {
                return (
                    <div key={task.name} className = "ui buttons">
                        <TaskSummary task={task} />
                    </div>
                );
            })}
            </div>
    );
}

const Module =(props)=> {

    console.log("Module rendered", props);
    return (
        <div className="ui raised very padded text container segment fluid">
            <h2 className="ui segment center aligned">{props.module.name}</h2>
            <div>
                {renderList(props)}
            </div>
            <CreateTask moduleId={props.module.id}/>
        </div>
    );
}


export default Module;