import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
`

const Button = styled.button`
`

const Wrapper = styled.div`
`

export default class SearchPanel extends React.Component {

  constructor() {
    super();

    this.handleSearch = this.handleSearch.bind(this);
  }


  handleSearch() {
     this.props.onSearch(this.state.keyword)
  }

  render() {
    return (
      <Wrapper>
        <Input value={this.props.keyword} onChange={this.props.onKeywordChange} />
        <Button onClick={this.props.onSearch}>Search</Button>
      </Wrapper>
    )
  }
}