import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';


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
          <Link to={`/detail/${this.props.id}`}>
            <Button>Edit</Button>
          </Link>
          <Button onClick={this.props.onDelete}>Delete</Button>
        </Wrapper>
      </ListItem>
    )
  }
}