import React from 'react';
import { connect } from 'react-redux';

const TaskDetails = ({task}) => {
    //console.log(props.task);
    if(!task){
        return (
            <div>
                <p>---------------TaskDetails------------------</p>
                Select a task
                <p>--------------------------------------------</p>
            </div>
        );
    }
    console.log(task);
    return (
        <div>
            <p>---------------TaskDetails------------------</p>
            <h3>{task.name}</h3>
            <p>{task.details}</p>
            <p>--------------------------------------------</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { task: state.selectedTask }
};

export default connect(mapStateToProps)(TaskDetails);