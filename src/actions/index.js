export const selectTask = (task) => {
    //console.log("actionCreators.selectTask", task);
    return {
        type: 'TASK_SELECTED',
        payload: task
    };
};

export const createTaskOnModule = (task, moduleId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        /*
         * 0: Stuck; 1: In Progress; 2: Awaiting Review; 3: Not Started; 4: Completed
         */
        switch (task.status) {
            case "Stuck":
                task.status = 0;
                break;
            case "In Progress":
                task.status = 1;
                break;
            case "Awaiting Review":
                task.status = 2;
                break;
            case "Not Started":
                task.status = 3;
                break;
            case "Completed":
                task.status = 4;
                break;
            default:
                task.status = -1;
                break;
            
        }
        const firestore = getFirestore(); // this is a refference to the database
        firestore.collection('Tasks')
        .add( { ...task, moduleId: moduleId } )
        .then(() => {
                dispatch(
                    {
                    type: 'CREATE_TASK_ON_MODULE',
                        payload: { task: task, moduleId: moduleId }
                    }
                )
            }
        )
        .catch((error) => {
            dispatch({ type: 'CREATE_TASK_ON_MODULE_ERROR', error });
            }
        )
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