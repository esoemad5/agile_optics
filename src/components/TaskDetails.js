import React from 'react';
import { connect } from 'react-redux';

const TaskDetails = ({task}) => {
    //console.log(props.task);
    if(!task){
        return <div>Select a task</div>
    }
    console.log(task);
    return (
        <div>
            <h3>{task.name}</h3>
            <p>{task.details}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { task: state.selectedTask }
};

export default connect(mapStateToProps)(TaskDetails);