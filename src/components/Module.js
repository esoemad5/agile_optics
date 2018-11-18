import React from 'react';
import { connect } from 'react-redux';
import { selectTask } from '../actions';

class Module extends React.Component {
    renderList() {
        return this.props.tasks.map((task) => {
            return (
                <div key={task.name}>
                    <button
                        onClick={() => this.props.selectTask(task)}
                    >
                        <h3>
                            {task.name}
                        </h3>
                        <p>
                            Some text
                        </p>
                    </button>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { tasks: state.tasks };
};

export default connect(mapStateToProps, {
    //selectTask: selectTask
    selectTask,
})(Module);