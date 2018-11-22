import React from 'react';
import { connect } from 'react-redux';
import UpdateTask from './UpdateTask';

class TaskDetails extends React.Component {
    state = {
        updateFormIsVisible: false,
    };
    renderUpdateForm = () => {
        this.setState({ updateFormIsVisible: true });
    }
    renderDetails = () => {
        const selectedTask = this.props.selectedTask;
        return (
            <div>
                <button className="ui button" onClick={this.renderUpdateForm}>Edit</button>
                <h1 className="ui segment center aligned">{selectedTask.name}</h1>
                <i><b>Status: {selectedTask.status}<br />Priority: {selectedTask.priority}</b></i>
                <p>{selectedTask.details}</p>
            </div>
        )
    }

    
    render() {
        const selectedTask = this.props.selectedTask;
        if (!selectedTask) {
            return (
                <div className="ui raised very padded text container segment">
                    <div>Select a task</div>
                </div>
            );
        }
        return (
            <div className="ui raised very padded text container segment">
                
                {this.state.updateFormIsVisible ?
                    <UpdateTask task={this.props.selectedTask}/> :
                    <div>
                    <button className="ui button" onClick={this.renderUpdateForm}>Edit</button>
                    <h1 className="ui segment center aligned">{selectedTask.name}</h1>
                    <i><b>Status: {selectedTask.status}<br />Priority: {selectedTask.priority}</b></i>
                    <p>{selectedTask.details}</p>
                    </div>
                }
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return { selectedTask: state.selectedTask }
};

export default connect(mapStateToProps)(TaskDetails);