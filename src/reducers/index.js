import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const projectState = {
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
                },
                {
                    id: 1,
                    name: 'Get tin',
                    details: 'Prospect rocks until tin ore is found, then use the pickaxe to mine it.',
                    status: 'Not Started',
                    priority: 'Low',
                },
                {
                    id: 2,
                    name: 'Get copper',
                    details: 'Prospect rocks until copper ore is found, then use the pickaxe to mine it. There are a lot of bots on copper right now.',
                    status: 'Not Started',
                    priority: 'High',
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
                },
                {
                    id: 1,
                    name: 'Ut enim',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                    status: 'Not Started',
                    priority: 'Low',
                },
                {
                    id: 2,
                    name: 'sed do eiusmod',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    status: 'Not Started',
                    priority: 'High',
                },
            ]
        }
    ]
    
};

const projectStateReducer = (state = projectState, action) => {
    if (action.type) {
        //console.log(action.type);
    }
    return state
    
};

const selectedTaskReducer = (selectedTask = null, action) => {
    if (action.type === 'TASK_SELECTED') {
        return action.payload;
    }
    return selectedTask;
}

export default combineReducers({
    projectState: projectStateReducer,
    selectedTask: selectedTaskReducer,
    firestore: firestoreReducer
});