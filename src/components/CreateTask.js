import React from 'react';
import { connect } from 'react-redux';
import { createTaskOnModule } from '../actions/index';
class CreateTask extends React.Component{
    state = {
        name: '',
        details: '',
        priority: '',
        status: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.clear();
        // console.log(this.state);
        // console.log(this.props);
        // console.log(this.props.moduleId);
        this.props.createTaskOnModule(this.state, this.props.moduleId);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="ui raised very padded text container segment fluid">
                <div className="ui grid">
                    <div className="five wide column"></div>
                    <div className="eight wide column"><h3>Create New Task</h3></div>
                    <div className="three wide column"></div>
                </div>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <button
                        className="ui button">
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
                    <br /><br/>
                    Details:<br/><textarea
                        type='text'
                        id='details'
                        value={this.state.details}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTaskOnModule: (project, moduleId) => dispatch(createTaskOnModule(project, moduleId))
    }
}

export default connect(null, mapDispatchToProps)(CreateTask);