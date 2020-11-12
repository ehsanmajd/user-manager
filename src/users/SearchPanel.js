import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Input = styled.input`
`

const Button = styled.button`
`

const Wrapper = styled.div`
`

export default function SearchPanel2({ onSearch, keyword, onKeywordChange }) {
  const inputRef = useRef();

  useEffect(
    () => {
      inputRef.current.focus();
    },
    []
  );

  return (
    <Wrapper>
      <Input ref={inputRef} value={keyword} onChange={onKeywordChange} />
      <Button onClick={onSearch}>Search</Button>
    </Wrapper>
  )
}

class SearchPanel extends React.Component {

  constructor() {
    super();

    this.inputRef = React.createRef();
  }


  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <Wrapper>
        <Input ref={this.inputRef} value={this.props.keyword} onChange={this.props.onKeywordChange} />
        <Button onClick={this.props.onSearch}>Search</Button>
      </Wrapper>
    )
  }
}