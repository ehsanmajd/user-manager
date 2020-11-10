import React from 'react';
import styled from 'styled-components';
import SearchPanel from './SearchPanel';
import UserList from './UserList';
import { getUsers, deleteUser } from '../server'

const Header = styled.h1`
`

const Button = styled.button`
`

export default class UserManager extends React.Component {

  constructor() {
    super();

    this.state = {
      users: [],
      keyword: ''
    }
  }

  handleKeywordChange = e => {
    this.setState({ keyword: e.target.value });
  }

  handleSearch = async () => {
    const users = await getUsers(this.state.keyword);
    this.setState({ users })
  }

  handleDelete = async (id) => {
     await deleteUser(id);
     this.handleSearch();
  }

  handleEdit = id => {
    this.props.onEdit(id);
  }

  render() {
    return (
      <>
        <Header>Users!</Header>
        <SearchPanel
          keyword={this.state.keyword}
          onSearch={this.handleSearch}
          onKeywordChange={this.handleKeywordChange}
        />
        <UserList
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
          users={this.state.users}
        />
        <Button onClick={this.props.onAdd}>Add</Button>
      </>
    )
  }
}