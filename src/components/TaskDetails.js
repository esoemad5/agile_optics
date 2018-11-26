import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import UpdateTask from './UpdateTask';

class TaskDetails extends React.Component {
    state = {
        updateFormIsVisible: false,
    };

    
    
    renderUpdateForm = () => {
        this.setState({ updateFormIsVisible: true });
    }
    unrenderUpdateForm = () => {
        this.setState({ updateFormIsVisible: false });
    }

    joinTask = () => {
        console.log("joinTask");
    }

    renderUserThumbnails = () => {
        //var assignedUsersThumbnailArr = [];
        var assignedUsersThumbnailArr = this.props.Users.map(user => {
            if (user.assignedTaskIds.includes(this.props.selectedTask.id)) {
                return({ pic: user.thumbnailPic, id: user.id, name: user.name });
            }
            return null;
        });
        return(
            <div>
                {assignedUsersThumbnailArr.map(pic => {
                    if (pic === null) {
                        return null;
                    }
                    return (
                        <img src={pic.pic} key={pic.id} height="20px" title={pic.name} alt={pic.name}></img>
                    )
                })}
            </div>
        )
        
    }

    renderDetails = () => {
        // this ended up not being used. probably better to use it.
        // if (this.props.Users) {
        //     var assignedUsers = this.props.Users.filter(user => {
        //         if (user.assignedTaskIds.includes(this.props.selectedTask.id)) {
        //             return true;
        //         }
        //         return false;
        //     });
        // }
        const selectedTask = this.props.selectedTask;
        return (
            <div>
                <h1 className="ui segment center aligned">
                    {selectedTask.name}
                    <br />
                    {this.renderUserThumbnails()}
                </h1>
                <div className="ui six column grid">
                    <div className="left floated column"><button className="ui button allign-right" onClick={this.joinTask}>Join</button></div>
                    <div className="right floated column"><button className="ui button" onClick={this.renderUpdateForm}>Edit</button></div>
                </div>
                
                
                <i><b>Status: {selectedTask.status}<br />Priority: {selectedTask.priority}</b></i>
                <p>{selectedTask.details}</p>
            </div>
        )
    }

    render() {
        //console.log("TaskDetails state, props", this.state, this.props);
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
                    <div><UpdateTask task={this.props.selectedTask} callback={this.unrenderUpdateForm} /> </div>:
                    this.renderDetails()
                }
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        selectedTask: state.selectedTask,
        Users: state.firestore.ordered.Users,
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'Users'},
    ])
)(TaskDetails);