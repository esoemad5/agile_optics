import React from 'react';

class Comments extends React.Component {
    state = {
        commentEditor: "",
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            commentEditor: "",
        })
    }
    handleChange = (e) => {
        this.setState({
            commentEditor: e.target.value
        })
    }

    writeNewCommentForm = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea
                    type='text'
                    id='commentEditor'
                    value={this.state.commentEditor}
                    onChange={this.handleChange}
                />
                <br />
                <button
                    className="ui button"
                    onClick={this.handleSubmit}>
                    Submit
                    </button>
            </form>
        );
    }
    render() {
        return (
            <div className="ui raised very padded text container segment fluid">
                <p>render comments</p>
                {this.writeNewCommentForm()}
            </div>
        );
    }
}

export default (Comments)