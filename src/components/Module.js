import React from 'react';
import { connect } from 'react-redux';
import { selectTask } from '../actions';

class Module extends React.Component {

    renderList() {
        const divStyle = {
            margin: '1px',
            border: '1mm ridge black'
        };
        const getColor = (status) => {
            var output = "ui button ";
            switch (status) {
                case "Not Started":
                    output += "grey";
                    break;
                case "In Progress":
                    output += "yellow";
                    break;
                case "Stuck":
                    output += "red";
                    break;
                case "Awaiting Review":
                    output += "blue";
                    break;
                case "Completed":
                    output += "green";
                    break;
            }

            return output;
        };
        return this.props.tasks.map((task) => {
            return (
                <div key={task.name} className = "ui buttons">
                    <button
                        className={getColor(task.status)}
                        onClick={() => this.props.selectTask(task)}
                        style={divStyle}
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
                <div style={{border: 'inset'}}>
                    {this.renderList()}
                </div>
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