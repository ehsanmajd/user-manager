import React from 'react';
import styled from 'styled-components';
import UserManager from './UserManger';
import UserDetail from './UserDetail';

const Wrapper = styled.div`
  display: ${props => props.visible ? 'block' : 'none'}
`

export default class Router extends React.Component {

  constructor() {
    super();

    this.state = {
      mode: 'list',
      editingUserId: null
    }
  }

  handleEdit = id => {
    this.setState({ mode: 'detail', editingUserId: id })
  }

  handleAdd = () => {
    this.setState({ mode: 'detail', editingUserId: null })
  }

  handleCancel = () => {
    this.setState({ mode: 'list', editingUserId: null })
  }

  handleSave = () => {
    this.setState({ mode: 'list', editingUserId: null })
  }

  render() {
    console.log('props', this.props)
    return (
      <>
        <Wrapper visible={this.props.hover}>
          <UserManager
            onEdit={this.handleEdit}
            onAdd={this.handleAdd}
          />
        </Wrapper>
        <Wrapper visible={!this.props.hover}>
          <UserDetail
            userId={this.state.editingUserId}
            onCancel={this.handleCancel}
            onSave={this.handleSave}
          />
        </Wrapper>
      </>
    )
  }
}