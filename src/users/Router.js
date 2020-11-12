import React from 'react';
import styled from 'styled-components';
import UserManager from './UserManger';
import UserDetail from './UserDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  withRouter
} from "react-router-dom";

const Wrapper = styled.div`
  display: ${props => props.visible ? 'block' : 'none'}
`

const UserDetailWithParams = withRouter(UserDetail);

export default function RouterInHooks() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:userId?">
          <UserDetail />
        </Route>
        <Route path="/">
          <UserManager />
        </Route>
      </Switch>
    </Router>
  )
}

class Router2 extends React.Component {

  constructor() {
    super();

    this.state = {
      mode: 'list',
      editingUserId: null
    }
  }

  handleEdit = id => {
    this.setState({ mode: 'detail', editingUserId: id })
  }

  handleAdd = () => {
    this.setState({ mode: 'detail', editingUserId: null })
  }

  handleCancel = () => {
    this.setState({ mode: 'list', editingUserId: null })
  }

  handleSave = () => {
    this.setState({ mode: 'list', editingUserId: null })
  }

  render() {
    return (
      <>
        {this.state.mode === 'list' && <UserManager
          onEdit={this.handleEdit}
          onAdd={this.handleAdd}
        />}
        {this.state.mode === 'detail' && <UserDetail
          userId={this.state.editingUserId}
          onCancel={this.handleCancel}
          onSave={this.handleSave}
        />}
      </>
    )
  }
}