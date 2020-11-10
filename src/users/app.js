import React from 'react';
import UserManager from './UserManger';
import UserDetail from './UserDetail';
import Router from './Router';
import styled from 'styled-components';

const Wrapper2 = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${props => props.color};

  &:hover {
    background-color: red;
  }
`

class Wrapper extends React.Component {
  render() {
    return (
      <div style={{ height: '200px', width: '200px', backgroundColor: this.props.color }}>
        {this.props.children}
      </div>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Hoverable>
        {(hover) => <Router foo='bar' hover={hover} />}
      </Hoverable>
    )
  }
}

const RouterWithHoverEffect = withHoverEffect(Router);

function withHoverEffect(Component) {
  class Baz extends React.Component {
    constructor() {
      super();

      this.state = {
        hover: false
      }
    }
    render() {
      return (
        <div
          style={{
            height: '200px',
            width: '200px',
            backgroundColor: this.state.hover ? 'red' : 'green'
          }}
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
        >
          <Component {...this.props} hover={this.state.hover} />
        </div>
      )
    }
  }

  return Baz;
}


class Hoverable extends React.Component {
  constructor() {
    super();

    this.state = {
      hover: false
    }
  }
  render() {
    return (
      <div
        style={{
          height: '200px',
          width: '200px',
          backgroundColor: this.state.hover ? 'red' : 'green'
        }}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        {this.props.children(this.state.hover)}
        {/* <Component {...this.props} hover={this.state.hover} /> */}
      </div>
    )
  }
}
