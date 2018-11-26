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
                    <br /><br/>
                    Details:<br/><textarea
                        type='text'
                        id='details'
                        value={this.state.details}
                        onChange={this.handleChange}
                    />
                    <br /><br />
                    <center>
                        <button className="ui button">
                            Submit
                        </button>
                    </center>
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