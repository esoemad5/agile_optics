import { combineReducers } from 'redux';

const seletctedTaskReducer = (selectedTask = null, action) => {
    if (action.type === 'TASK_SELECTED') {
        return action.payload;
    }
    return selectedTask;
}

export default combineReducers({
    selectedTask: seletctedTaskReducer,
});