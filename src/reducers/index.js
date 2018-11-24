import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const _projectState = {
    name: "Create Bronze Wire",
    modules: [
        {
            id: 0,
            name: "Get Ores",
            tasks: [
                {
                    id: 0,
                    name: 'Get pickaxe',
                    details: 'Pickaxes can be purchased from other players at the Grand Exchange. A free bronze pickaxe can be obtained from the mining tutor.',
                    status: 'In Progress',
                    priority: 'High',
                    comments: [],
                    teamMembers: [],
                },
                {
                    id: 1,
                    name: 'Get tin',
                    details: 'Prospect rocks until tin ore is found, then use the pickaxe to mine it.',
                    status: 'Not Started',
                    priority: 'Low',
                    comments: [],
                    teamMembers: [],
                },
                {
                    id: 2,
                    name: 'Get copper',
                    details: 'Prospect rocks until copper ore is found, then use the pickaxe to mine it.',
                    status: 'Not Started',
                    priority: 'High',
                    comments: [{author: "Default User", comment: "There are a lot of bots on copper right now.", datePosted: "Jun 29th 2018 12:02 AM"}],
                    teamMembers: [],
                },
            ]
        },
        {
            id: 1,
            name: "2nd Module",
            tasks: [
                {
                    id: 0,
                    name: 'consectetur elit',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
                    status: 'In Progress',
                    priority: 'High',
                    comments: [],
                    teamMembers: [],
                },
                {
                    id: 1,
                    name: 'Ut enim',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                    status: 'Not Started',
                    priority: 'Low',
                    comments: [],
                    teamMembers: [],
                },
                {
                    id: 2,
                    name: 'sed do eiusmod',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    status: 'Not Started',
                    priority: 'High',
                    comments: [],
                    teamMembers: [],
                },
            ]
        }
    ]
    
};

const projectState = "ignore this variable";

const projectStateReducer = (state = projectState, action) => {
    switch (action.type) {
        case 'CREATE_TASK_ON_MODULE':
            return state;
        case 'CREATE_TASK_ON_MODULE_ERROR':
            console.log('projectStateReducer has recieved an action of type CREATE_TASK_ON_MODULE_ERROR', action.error);
            return state
        case 'remove this case ;alskdjflkjasjddf;lfasjd;lf':
            return _projectState;
        default:
            return state;
    }
};

const selectedTaskReducer = (selectedTask = null, action) => {
    if (action.type === 'TASK_SELECTED') {
        console.log('selectedTaskReducer');
        return action.payload;
    }
    return selectedTask;
}

const updateTaskReducer = (task = null, action) => {
    if (action.type === 'UPDATE_TASK') {
        // Logic
    }

    return task;
}



export default combineReducers({
    projectState: projectStateReducer,
    selectedTask: selectedTaskReducer,
    updateTask: updateTaskReducer,
    firestore: firestoreReducer
});