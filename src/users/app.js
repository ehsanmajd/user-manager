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
      <Router />
      // <Hoverable
      //   render={(value) => <Router foo='bar' hover={value.hover} />}
      // />
    )
  }
}



const withHoverEffect = Component => props => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={{
        height: '200px',
        width: '200px',
        backgroundColor: hover ? 'red' : 'green'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Component {...props} hover={hover} />
    </div>
  )
}

const RouterWithHoverEffect = withHoverEffect(Router);


function Hoverable({ render }) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        height: '200px',
        width: '200px',
        backgroundColor: hover ? 'red' : 'green'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {render({ hover: hover })}
      {/* <Component {...this.props} hover={this.state.hover} /> */}
    </div>
  )

}
