import React from 'react';
import List from './List';
import UserListItem from './UserListItem';



export default function UserList({ users = [], onDelete, onEdit }) {
  return (
    <List>
      {users.map(user => {
        return <UserListItem
          key={user.id}
          id={user.id}
          name={user.name}
          onDelete={() => onDelete(user.id)}
          onEdit={() => onEdit(user.id)}
        />
      })}
    </List>
  )
}