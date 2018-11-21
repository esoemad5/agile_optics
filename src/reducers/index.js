import { combineReducers } from 'redux';

const projectState = {
    tasks: [
        {
            name: 'Get pickaxe',
            details: 'Pickaxes can be purchased from other players at the Grand Exchange. A free bronze pickaxe can be obtained from the mining tutor.',
            status: 'In Progress',
            priority: 'High',
        },
        {
            name: 'Get tin',
            details: 'Prospect rocks until tin ore is found, then use the pickaxe to mine it.',
            status: 'Not Started',
            priority: 'Low',
        },
        {
            name: 'Get copper',
            details: 'Prospect rocks until copper ore is found, then use the pickaxe to mine it. There are a lot of bots on copper right now.',
            status: 'Not Started',
            priority: 'High',
        },
    ]
};

const projectStateReducer = () => {
    return projectState;
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
});