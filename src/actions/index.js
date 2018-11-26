export const selectTask = (task) => {
    //console.log("actionCreators.selectTask", task);
    return {
        type: 'TASK_SELECTED',
        payload: task
    };
};

export const updateTask = (task) => {
    console.log("in actions.updateTask 1", task);
    return ((dispatch, getState, { getFirebase, getFirestore }) => {
        console.log("updateTask 2");
        const firestore = getFirestore();
        firestore.collection('Tasks').doc(task.id)
            .update({
            name: task.name,
            status: task.status,
            priority: task.priority,
            details: task.details,
            })
            .then(
                console.log("updateTask has been run"))
            .catch(
                console.log("updateTask has hit an error")
            );
        

    })
}

export const createTaskOnModule = (task, moduleId) => {
    console.log("createTask 1");
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log("createTask 2");
        const firestore = getFirestore(); // this is a refference to the database
        firestore.collection('Tasks')
            .add({
                ...task,
                moduleId: moduleId,
            }).then(console.log("createTask 3"))
        
        /* we dont need to use the reducer
         * when a change is made to the database, the database updates the store
         * don't need to use a reducer to make changes to the store.
         * Feels weird, might be a really bad practice. Keep an eye on this
        
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
        */
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