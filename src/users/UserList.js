import React from 'react';
import List from './List';
import UserListItem from './UserListItem';

export default class UserList extends React.Component {

  render() {
    return (
      <List>
        {this.props.users.map(user => {
          return <UserListItem
            key={user.id}
            name={user.name}
            onDelete={() => this.props.onDelete(user.id)}
            onEdit={() => this.props.onEdit(user.id)}
          />
        })}
      </List>
    )
  }
}