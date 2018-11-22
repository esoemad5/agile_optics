import React from 'react';
import TaskSummary from './TaskSummary';

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
        </div>
    );
}


export default Module;