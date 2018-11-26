import React from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../actions/index';

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
        console.log(this.state);
        this.props.updateTask(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <button
                        className="ui button"
                        onClick={this.handleSubmit}>
                        Submit
                    </button>
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
                        value={this.props.task.details}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}

//export default UpdateTask;

const mapDispatchToProps = (dispatch) => {
    return {
        updateTask: (task) => dispatch(updateTask(task))
    }
}

export default connect(null, mapDispatchToProps)(UpdateTask);