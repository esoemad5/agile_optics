import { combineReducers } from 'redux';

const tasks = [
    { name: 'task 1', details: 'This is task 1.' },
    { name: 'task 2', details: 'This is task 2.' },
    { name: 'task 3', details: 'This is task 3.'},
];

const tasksReducer = () => {
    return tasks;
};

const selectedTaskReducer = (selectedTask = null, action) => {
    if (action.type === 'TASK_SELECTED') {
        return action.payload;
    }
    return selectedTask;
}

export default combineReducers({
    tasks: tasksReducer,
    selectedTask: selectedTaskReducer,
});