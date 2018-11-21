import React from 'react';
import { connect } from 'react-redux';

class Project extends React.Component{
    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps(state){
    return {state.projectState}
}

export default connect(mapStateToProps)(Project);