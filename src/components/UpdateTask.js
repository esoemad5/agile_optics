import React from 'react';
import { connect } from 'react-redux';
import { updateTask, deleteTask } from '../actions/index';

/*
 * 0: Stuck; 1: In Progress; 2: Awaiting Review; 3: Not Started; 4: Completed
 */

class UpdateTask extends React.Component{
    state = {
        ...this.props.task
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.callback();
        this.props.updateTask(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleDelete = () => {
        this.props.callback();
        this.props.deleteTask(this.props.task.id)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="ui segment center aligned">
                        <input
                            type='text'
                            id='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </h1>
                    <i><b>
                        Status: <input
                            type='text'
                            id='status'
                            value={this.state.status}
                            onChange={this.handleChange}
                        />
                        <br />
                        Priority: <input
                            type='text'
                            id='priority'
                            value={this.state.priority}
                            onChange={this.handleChange}
                        />
                    </b></i>
                    <br />
                    <textarea
                        type='text'
                        id='details'
                        value={this.state.details}
                        onChange={this.handleChange}
                    />
                </form>
                <br/><br/>
                <button
                    className="ui button"
                    onClick={this.handleSubmit}>
                    Submit
                </button>
                <br /><br /><span>Be careful! Deletion cannot be undone! </span>
                <button onClick={this.handleDelete} className="ui button red">Delete Task</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTask: (task) => dispatch(updateTask(task)),
        deleteTask: (taskId) => dispatch(deleteTask(taskId)),
    }
}

export default connect(null, mapDispatchToProps)(UpdateTask);