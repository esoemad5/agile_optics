import React from 'react';

const TaskSummary = () => {
    return (
        <button
            className={getColor(task.status)}
            onClick={() => this.props.selectTask(task)}
            style={getStyle(task)}
        >
            <h3>
                {task.name}
            </h3>
            <p>
                Status is shown. Need to show priority on here somehow.
            </p>
        </button>
    );
}