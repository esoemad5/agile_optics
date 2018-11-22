import React from 'react';

const TaskSummary = (props) => {
    console.log(props);
    const getStyle = (task) => {
        if (task === props.selectedTask) {
            return ({
                margin: '1px',
                border: '1mm ridge red',
                width: '150px',
                height: '75px'
            });
        }
        return ({
            margin: '1px',
            border: '1mm ridge black',
            width: '150px',
            height: '75px'
        });
    };
    const getColor = (status) => {
        var output = "ui button ";
        switch (status) {
            case "Not Started":
                output += "grey";
                break;
            case "In Progress":
                output += "yellow";
                break;
            case "Stuck":
                output += "red";
                break;
            case "Awaiting Review":
                output += "blue";
                break;
            case "Completed":
                output += "green";
                break;
            default:
                output += "black"
                break;
        }

        return output;
    };
    return (
        <button
            className={getColor(props.task.status)}
            onClick={() => props.selectTask(props.task)}
            style={getStyle(props.task)}
        >
            <h3>
                {props.task.name}
            </h3>
        </button>
    );
}

export default TaskSummary;