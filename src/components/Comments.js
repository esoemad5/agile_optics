import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestore } from 'firebase/app'
import { firestoreConnect } from 'react-redux-firebase';

import { addComment } from '../actions'

class Comments extends React.Component {
    state = {
        commentEditor: "",
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var commentData = {
            authorName: "Test User",
            authorPicture: "https://randomuser.me/api/portraits/men/65.jpg",
            comment: this.state.commentEditor,
            datePosted: firestore.Timestamp.fromDate(new Date()),
        }
        this.props.addComment(this.props.taskId, commentData, this.props.comments)
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
        return (
            <div>
                {this.props.comments.map((comment, index) => {
                    var imgAlt = comment.authorName + "'s picture";
                    var date = comment.datePosted.toDate();

                    const styles = {
                        fontSize: "8pt",
                    }
                    return (
                        <div className="ui raised text container segment fluid" key={index}>
                            <img src={comment.authorPicture} height="20px" alt={imgAlt} title={comment.authorName}></img>
                            <p>{comment.comment}
                            <br /><span style={styles}>{date.getMonth()}/{date.getDate()}/{date.getFullYear()}, {date.getHours()}:{date.getMinutes()}</span></p>
                        </div>
                    )
                })}
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
                <h2 className="ui segment center aligned">Comments</h2>
                {this.renderComments()}
                <br />
                {this.writeNewCommentForm()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.selectedTask.comments,
        // tasks: state.firestore.ordered.Tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (taskId, commentData, currentCommentArray) => dispatch(addComment(taskId, commentData, currentCommentArray)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // firestoreConnect([
    //     {collection: 'Tasks'},
    // ])
)(Comments);