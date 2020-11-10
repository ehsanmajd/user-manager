import React from 'react';
import styled from 'styled-components';
import { getUser, updateUser, addUser } from '../server'

const Header = styled.h1``;

const Form = styled.form``;
const Label = styled.label``;
const Input = styled.input``;
const Button = styled.button``;
const Row = styled.div``;

export default class UserDetail extends React.Component {

  constructor() {
    super();

    this.state = {
      name: '',
      username: ''
    }
  }

  get isEditMode() {
    return !!this.props.userId;
  }

  componentDidMount() {
    if (this.isEditMode) {
      getUser(this.props.userId)
        .then(user => {
          this.setState({
            name: user.name,
            username: user.username
          })
        })
    }
  }

  componentDidUpdate(oldProps) {
    if (this.props.userId !== oldProps.userId) {
      if (this.isEditMode) {
        getUser(this.props.userId)
          .then(user => {
            this.setState({
              name: user.name,
              username: user.username
            })
          })
      }
      else {
        this.setState({
          name: '',
          username: ''
        })
      }
    }
  }

  handleSave = () => {
    if (this.isEditMode) {
      updateUser({
        name: this.state.name,
        username: this.state.username,
        id: this.props.userId
      })
        .then(() => this.props.onSave())
    }
    else {
      addUser({
        name: this.state.name,
        username: this.state.username,
      })
        .then(() => this.props.onSave())
    }
  }

  render() {
    const { username, name } = this.state;
    return (
      <>
        <Header>User</Header>
        <Form>
          <Row>
            <Label>Name: </Label>
            <Input value={name} onChange={e => this.setState({ name: e.target.value })} />
          </Row>
          <Row>
            <Label>Username: </Label>
            <Input value={username} onChange={e => this.setState({ username: e.target.value })} />
          </Row>
        </Form>
        <Button onClick={this.handleSave}>Save</Button>
        <Button onClick={this.props.onCancel}>Cancel</Button>
      </>
    )
  }
}