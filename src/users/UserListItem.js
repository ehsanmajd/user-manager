import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';


const Wrapper = styled.div`
`
const Label = styled.label`
`
const Button = styled.button`
`

export default class UserListItem extends React.Component {

  render() {
    return (
      <ListItem>
        <Wrapper>
          <Label>{this.props.name}</Label>
          <Button onClick={this.props.onEdit}>Edit</Button>
          <Button onClick={this.props.onDelete}>Delete</Button>
        </Wrapper>
      </ListItem>
    )
  }
}