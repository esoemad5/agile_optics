import React from 'react';
import { connect } from 'react-redux';
import { selectTask } from '../actions';

class Module extends React.Component {
    renderList() {
        var divStyle = {
            padding: '10px',
            border: 'groove'
        };
        return this.props.tasks.map((task) => {
            return (
                <div key={task.name} className = "ui buttons">
                    <button
                        className="ui button"
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
                <p>-------------------Module-------------------</p>
                {this.renderList()}
                <p>--------------------------------------------</p>
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