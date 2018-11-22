import React from 'react';
import { connect } from 'react-redux';
import { selectTask } from '../actions';
import TaskSummary from './TaskSummary';

class Module extends React.Component {

    renderList() {
        return this.props.module.tasks.map((task) => {
            return (
                <div key={task.name} className = "ui buttons">
                    <TaskSummary task={task} selectTask={this.props.selectTask}/>
                </div>
            );
        });
    }

    render() {
        //console.log(this.props);
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