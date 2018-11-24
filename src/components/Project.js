import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import Module from './Module'

import TaskDetails from './TaskDetails'
//import reducers from '../reducers'

class Project extends React.Component{

    renderModules() {
        if (!this.props.Modules) { // check for no modules in database
            return;
        }

        // Only use modules who belong to the current project.
        // A better database layout will remove the need for this code chunk.
        const modules = this.props.Modules.filter((module) => { 
            if (module.projectId === this.props.projectIdInDatabase) {
                return true;
            }
            return false;
        })
        console.log(modules);
        return (
            <div>
                {modules.map(module => {
                    return (
                        <Module module={module} key={module.id} />
                    )
                })}
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="ui raised very padded text container segment">
                    <h2 className="ui segment center aligned">{this.props.name}</h2>
                    {this.renderModules()}
                </div>
            
                <TaskDetails />
                <br/><br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // return state.projectState // Uncomment this line to switch to dummy data.
    return {
        // .ordered makes Modules an array; .data makes Modules a JSON object. The array has the module's id in it (extremely useful!)
        Modules: state.firestore.ordered.Modules,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'Modules'},
    ])
)(Project);