export const selectTask = (task) => {
    return {
        type: 'TASK_SELECTED',
        payload: task
    };
};

export const createTaskOnModule = (task, moduleId) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({
            type: 'CREATE_TASK_ON_MODULE',
            payload: {task: task, moduleId: moduleId}
        })
    }
}

export const testActionCreator = (parameter) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('Projects')
        .dispatch({ type: 'SOME_TYPE', payload: parameter });
    }
}

// Join (selected) task

// set (selected) task status

// set (selected) task priority

// add comment to (selected) task

// create task

// delete (selected) task