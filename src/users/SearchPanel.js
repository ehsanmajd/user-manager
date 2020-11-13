import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ACTIONS } from './usersReducer';

const Input = styled.input`
`

const Button = styled.button`
`

const Wrapper = styled.div`
`

export default function SearchPanel2({ onSearch, keyword, dispatch }) {
  const inputRef = useRef();

  useEffect(
    () => {
      inputRef.current.focus();
    },
    []
  );

  function handleChange(e) {
    dispatch({
      type: ACTIONS.KEYWORD_CHANGE,
      payload: e.target.value
    })
  }


  return (
    <Wrapper>
      <Input ref={inputRef} value={keyword} onChange={handleChange} />
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