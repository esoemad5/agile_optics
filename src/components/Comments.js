import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { addComment } from '../actions'

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

    renderComments = () => {
        console.log(this.props.comments);
        return (
            <div>
                <p>startComments</p>
                {this.props.comments.forEach(comment => {
                    console.log("in loop")
                    return (
                        <p>comment</p>
                    )
                })}
                <p>endComments</p>
            </div>
        );
        
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
                {this.renderComments()}
                {this.writeNewCommentForm()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.selectedTask.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (taskId, commentData) => dispatch(addComment(taskId, commentData)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Comments);