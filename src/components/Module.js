import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import TaskSummary from './TaskSummary';
import CreateTask from './CreateTask';
import { sorting } from '../utilities/helperFunctions';

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
    //console.log("Module.props", props)
    return (
        <div className="ui raised very padded text container segment fluid">
            <h2 className="ui segment center aligned">{props.module.name}</h2>
            <div>
                {renderTasks(props)}
            </div>
            <CreateTask moduleId={props.module.id}/>
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

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'Tasks'},
    ])
)(Module);