import React from 'react';
import { connect } from 'react-redux';

const TaskDetails = ({selectedTask}) => {
    if(!selectedTask){
        return (
            <div className="ui raised very padded text container segment">
                <div>Select a task</div>
            </div>
        );
    }
    return (
        <div className="ui raised very padded text container segment">
            <h2 className="ui segment center aligned">Task details</h2>
            <h3>{selectedTask.name}</h3>
            <i><b>Status: {selectedTask.status}<br />Priority: {selectedTask.priority}</b></i>
            <p>{selectedTask.details}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { selectedTask: state.selectedTask }
};

export default connect(mapStateToProps)(TaskDetails);