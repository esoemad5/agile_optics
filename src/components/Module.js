import React from 'react';
import { connect } from 'react-redux';
import { selectTask } from '../actions';

class Module extends React.Component {

    renderList() {
        const getStyle = (task) => {
            if (task === this.props.selectedTask) {
                return ({
                    margin: '1px',
                    border: '1mm ridge red',
                    width: '150px',
                    height: '75px'
                });
            }
            return ({
                margin: '1px',
                border: '1mm ridge black',
                width: '150px',
                height: '75px'
            });
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
                default:
                    output += "black"
                    break;
            }

            return output;
        };
        return this.props.module.tasks.map((task) => {
            return (
                <div key={task.name} className = "">
                    <button
                        className={getColor(task.status)}
                        onClick={() => this.props.selectTask(task)}
                        style={getStyle(task)}
                    >
                        <h3>
                            {task.name}
                        </h3>
                    </button>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui raised very padded text container segment">
                <h2 className="ui segment center aligned">{this.props.module.name}</h2>
                <div>
                    {this.renderList()}
                </div>
            </div>
        );
    }
}


export default connect(null, {
    //selectTask: selectTask
    selectTask,
})(Module);