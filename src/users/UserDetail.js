import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getUser, updateUser, addUser } from '../server'
import { unstable_batchedUpdates } from 'react-dom'
import { useParams, Link, useHistory } from 'react-router-dom';

const Header = styled.h1``;

const Form = styled.form``;
const Label = styled.label``;
const Input = styled.input``;
const Button = styled.button``;
const Row = styled.div``;

export default function UserDetilInHooks() {

  const history = useHistory();
  const { userId } = useParams();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  function isEditMode() {
    return !!userId;
  }

  useEffect(
    () => {
      if (isEditMode()) {
        getUser(userId)
          .then(user => {
            unstable_batchedUpdates(
              () => {
                setName(user.name);
                setUsername(user.username)
              }
            )
          })
      }
      else {
        setName('')
        setUsername('')
      }
    },
    [userId]
  )

  function handleSave() {
    if (isEditMode()) {
      updateUser({
        name: name,
        username: username,
        id: userId
      })
        .then(() => history.push('/'))
    }
    else {
      addUser({
        name: name,
        username: username,
      })
        .then(() => history.push('/'))
    }
  }

  return (
    <>
      <Header>User</Header>
      <Form>
        <Row>
          <Label>Name: </Label>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Row>
        <Row>
          <Label>Username: </Label>
          <Input
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </Row>
      </Form>
      <Button onClick={handleSave}>Save</Button>
      <Link to='/'>
        <Button>Cancel</Button>
      </Link>
    </>
  )
}

class UserDetail extends React.Component {

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