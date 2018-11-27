export const selectTask = (task) => {
    //console.log("actionCreators.selectTask", task);
    return {
        type: 'TASK_SELECTED',
        payload: task
    };
};

export const addComment = (taskId, commentData, currentCommentArray) => {
    const newCommentArray = [
        ...currentCommentArray,
        commentData
    ]
    return ((dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('Tasks').doc(taskId).update({
            comments: newCommentArray
        })
            .then(
                // Comment has been added
            )
            .catch((error) => {
                console.log("Error adding a comment: ", error)
            })
    });
}

export const updateTask = (task) => {
    return ((dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('Tasks').doc(task.id)
            .update({
            name: task.name,
            status: task.status,
            priority: task.priority,
            details: task.details,
            })
            .then( () =>{
                dispatch({
                    type: 'TASK_SELECTED',
                    payload: task,
                })
            })
            .catch((error) => {
                console.log("updateTask has hit an error", error)
            });
        

    })
}

export const joinTask = (taskId, userId) => {
    return ((dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('Users').doc(userId).get().then((response) => {
            var userIsAlreadyAssignedToTask = false;
            response.data().assignedTaskIds.forEach(task => {
                if (task === taskId) {
                    userIsAlreadyAssignedToTask = true;
                    return;
                }
            });
            if (!userIsAlreadyAssignedToTask) {
                firestore.collection('Users').doc(userId).update({
                    assignedTaskIds: [...response.data().assignedTaskIds, taskId]
                })
                    .then(
                        //Task has been added to user's list
                    )
                    .catch((error) => {
                        console.log("Error when adding task to user's list: ", error)
                    });
            }
        });
        // firestore.collection('Users').doc(userId)
        //     .update({
        //     assignedTaskIds: [...firestore.collection('Users').doc(userId).get().assignedTaskIds, taskId]
        //     })
        //     .then(() => {
        //         console.log("joinTask has been run");
        //     })
        //     .catch((error) => {
        //         console.log("joinTask has caught an error", error);
        // })
        
    })
}

export const createTaskOnModule = (task, moduleId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore(); // this is a refference to the database
        firestore.collection('Tasks')
            .add({
                ...task,
                moduleId: moduleId,
                comments: [],
            })
        
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

export const deleteTask = (taskId) => {
    return ((dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('Tasks').doc(taskId).update({
            moduleId: "",
        })
            .then(
            // Task still exists in database, just removed from the module
            )
            .catch((error) => {
            console.log("Error deleting task: ", error)
        })
    })
}

export const deleteModule = (moduleId) => {
    return ((dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('Modules').doc(moduleId).update({
            projectId: "",
        })
            .then(
            // Module still exists in database, just removed from the project
            )
            .catch((error) => {
            console.log("Error deleting Module: ", error)
        })
    })
}

export const createModule = (projectId) => {
    return ((dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        // make a new module here
    })
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