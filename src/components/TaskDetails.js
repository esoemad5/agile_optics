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
            <h1 className="ui segment center aligned">{selectedTask.name}</h1>
            <i><b>Status: {selectedTask.status}<br />Priority: {selectedTask.priority}</b></i>
            <p>{selectedTask.details}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { selectedTask: state.selectedTask }
};

export default connect(mapStateToProps)(TaskDetails);