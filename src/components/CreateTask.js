import React from 'react';

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
        console.log(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="ui raised very padded text container segment">
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

export default CreateTask;