import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import TaskSummary from './TaskSummary';
import CreateTaskAccordion from '../utilities/CreateTaskAccordion'
import { deleteModule } from '../actions'

const renderTasks = (moduleProps) => {
    if (!moduleProps.Tasks) { // check for no modules in database
        return;
    }

    // Only use modules who belong to the current project.
    // A better database layout will remove the need for this code chunk.
    var tasks = moduleProps.Tasks.filter((task) => {
        if (task.moduleId === moduleProps.module.id) {
            return true;
        }
        return false;
    });

    // UNUSED SORT FUNCTION
    //tasks = sorting(tasks, "status");

    return (
        <div>
            <center>
                {tasks.map(task => {
                    return (
                        <TaskSummary task={task} key={task.id} />
                    )
                })}
            </center>
        </div>
    );
}



const Module = (props) => {
    const del = () => {
        props.deleteModule(props.module.id);
    }
    return (
        <div className="ui raised very padded text container segment fluid">
            <div className="ui five column grid">
                <div className="right floated column"><button onClick={del} className="ui button red">Delete module</button></div>
            </div>
            <div className="ui segment">
                <center><h4>{props.module.name}</h4></center>
            </div>
            <div>
                {renderTasks(props)}
            </div>
            <CreateTaskAccordion moduleId={props.module.id} />
            <br />
            
        </div>
    );
}


const mapStateToProps = (state) => {
    // return state.projectState // Uncomment this line to switch to dummy data.
    return {
        // .ordered makes Modules an array; .data makes Modules a JSON object. The array has the module's id in it (extremely useful!)
        Tasks: state.firestore.ordered.Tasks,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteModule: (moduleId) => dispatch(deleteModule(moduleId)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'Tasks'},
    ])
)(Module);