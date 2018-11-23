import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import Module from './Module'

import TaskDetails from './TaskDetails'
//import reducers from '../reducers'

class Project extends React.Component{
    componentDidUpdate() {
        console.log("Component updated:", this.props);
    }
    render() {
        console.log("Project rendered", this.props);
        //console.log(this.props);
        return (
            <div>
                <div className="ui raised very padded text container segment">
                    <h2 className="ui segment center aligned">{this.props.name}</h2>
                    {this.props.modules && this.props.modules.map(module => {
                        return (
                            <Module module={module} key={module.id} />
                        )
                    })}
                </div>
            
                <TaskDetails />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Project component state: ",state);
    //console.log(state.projectState);
    //return state.projectState
    return {
        modules: state.firestore.ordered.Modules
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'Modules' },
    ])
)(Project);