import React from 'react';
import Project from './Project'

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


const App = (props) => {
    //console.log("App props:",props);
    return (
        <div>
            <br />
            {props.projects && props.projects.map(project => {
                return <Project key={project.id} projectIdInDatabase={project.id} name={project.name}/>
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    //return state.projectState // Uncomment this line to switch to dummy data.
    return {
        projects: state.firestore.ordered.Projects,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'Projects'},
    ])
)(App);