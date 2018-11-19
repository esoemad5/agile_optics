import React from 'react';
import { connect } from 'react-redux';

const TaskDetails = ({selectedTask}) => {
    if(!selectedTask){
        return (
            <div>
                <p>---------------TaskDetails------------------</p>
                <div style={{border: 'outset'}}>Select a task</div>
                <p>--------------------------------------------</p>
            </div>
        );
    }
    return (
        <div>
            <p>---------------TaskDetails------------------</p>
            <div style={{border: 'outset'}}>
                <h3>{selectedTask.name}</h3>
                <i><b>Status: {selectedTask.status}<br />Priority: {selectedTask.priority}</b></i>
                <p>{selectedTask.details}</p>
            </div>
            <p>--------------------------------------------</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { selectedTask: state.selectedTask }
};

export default connect(mapStateToProps)(TaskDetails);