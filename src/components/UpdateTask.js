import React from 'react';

class UpdateTask extends React.Component{
    state = {
        ...this.props.task
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.clear();
        console.log(this.state);
        console.log(this.props);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <button className="ui button" onClick={this.handleSubmit}>Submit</button>
                    <h1 className="ui segment center aligned"><input type='text' id='name' value={this.props.task.name} onChange={this.handleChange} /></h1>
                    <i><b>
                        Status: <input
                            type='text'
                            id='status'
                            value={this.props.task.status}
                            onChange={this.handleChange}
                        />
                        <br />
                        Priority: <input
                            type='text'
                            id='priority'
                            value={this.props.task.priority}
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

export default UpdateTask;