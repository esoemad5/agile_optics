import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { createModule } from '../actions'

import Module from './Module'

// import TaskDetails from './TaskDetails'
//import reducers from '../reducers'


// consider abstracting this method to be used elsewhere (Module.js)
// low priority change
const renderModules = (projectProps) => {
    if (!projectProps.Modules) { // check for no modules in database
        return;
    }

    // Only use modules who belong to the current project.
    // A better database layout will remove the need for this code chunk.
    const modules = projectProps.Modules.filter((module) => {
        if (module.projectId === projectProps.projectIdInDatabase) {
            return true;
        }
        return false;
    });

    //console.log("Project.renderModules", modules); // REMOVE THIS AT SOME POINT!!!

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

class Project extends React.Component{
    state = {
        newModuleName: "",
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createModule(this.props.projectIdInDatabase, this.state.newModuleName)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    newModule = () => {
        console.log(this.props.projectIdInDatabase);
    }

    render = () => {
        return (
            <div>
                <div className="ui raised very padded text container segment">
                    <h2 className="ui segment center aligned">{this.props.name}</h2>

                    <form onSubmit={this.handleSubmit}>
                        <div className="ui raised segment four column grid">
                            <span className="right floated column">Name: <input
                                type='text'
                                id='newModuleName'
                                value={this.state.newModuleName}
                                onChange={this.handleChange}
                                /></span>
                        
                            <span className="right floated column"><button className="ui button blue">Create module</button></span>
                        </div>
                    </form>
                    {renderModules(this.props)}
                </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        createModule: (projectId, moduleName) => dispatch(createModule(projectId, moduleName)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'Modules'},
    ])
)(Project);