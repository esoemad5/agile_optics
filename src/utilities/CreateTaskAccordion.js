import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

import CreateTask from '../components/CreateTask';

export default class CreateTaskAccordion extends Component {
  state = { activeIndex: 1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Create Task
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
            <CreateTask moduleId={this.props.moduleId}/>
        </Accordion.Content>

        
      </Accordion>
    )
  }
}
