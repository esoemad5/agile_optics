import React from 'react';
import { connect } from 'react-redux';
import { selectTask } from '../actions';

const TaskSummary = (props) => {
    //console.log("taskSummary props", props);
    const getStyle = (/* task */) => {
        // if (task === props.selectedTask) {
        //     return ({
        //         margin: '1px',
        //         border: '1mm ridge red',
        //         width: '150px',
        //         height: '75px'
        //     });
        // }
        return ({
            margin: '1px',
            border: '1mm ridge black',
            width: '150px',
            height: '75px'
        });
    };
    /*
    * 0: Stuck; 1: In Progress; 2: Awaiting Review; 3: Not Started; 4: Completed
    */
    const getColor = (status) => {
        var output = "ui button ";
        switch (status) {
            case 0:
                output += "red";
                break;
            case 1:
                output += "yellow";
                break;
            case 2:
                output += "blue";
                break;
            case 3:
                output += "grey";
                break;
            case 4:
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



export default connect(null, {
    //selectTask: selectTask
    selectTask,
})(TaskSummary);