import React from 'react';
import { connect } from 'react-redux';
import Module from './Module'

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

const mapStateToProps = (state) =>{
    return state.projectState
}

export default connect(mapStateToProps)(Project);