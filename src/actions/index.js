export const selectTask = (task) => {
    return {
        type: 'TASK_SELECTED',
        payload: task
    };
};