import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import Module from './Module'
//import reducers from '../reducers'

class Project extends React.Component{
    render() {
        return (
            <div className="ui raised very padded text container segment">
                <h2 className="ui segment center aligned">{this.props.name}</h2>
                {this.props.modules && this.props.modules.map(module => {
                    return (
                        <Module module={module} key={module.id} />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state.projectState
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'Projects' }
    ])
)(Project);