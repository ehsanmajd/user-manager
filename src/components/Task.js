import React, { Component } from "react";
import "./Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import styled from 'styled-components';

const TaskWrapper = styled.div`
  position: relative;
  background-color: #ccc;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;
  opacity: ${props => props.notDone ? '1' : '0.5'};
  button > svg {
    pointer-events: none;
  }
`;

const Button = styled.button`
  margin: 0 0px 0 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 30px;
  flex: 1;
  margin-left: 10px;
  color: #222;
  text-decoration: ${props => !props.notDone ? 'line-through' : 'none'}
`

const Status = styled.span`
  margin-right: 6px;
  text-align: center;
`

class Task extends React.Component {
  // handleClickCheck = () => {
  //   this.props.onClick();
  // };
  // handleClickDelete = () => {
  //   this.props.onDelete();
  // };

  constructor() {
    super();
    console.log('Task constructor');

  }

  handleDelete = (e) => {
    e.stopPropagation();
    this.props.onDelete();
  }

  componentDidMount() {
    console.log('Task componentDidMount');
  }
  
  componentDidUpdate() {
    console.log('Task componentDidUpdate');
  }
  
  shouldComponentUpdate() {
    console.log('Task shouldComponentUpdate');
    return true;
  }
  
  componentWillUnmount() {
    console.log('Task componentWillUnmount');
  }

  render() {


    const { taskValue, notDone, onDelete, onClick } = this.props;



    return (
      <TaskWrapper
        notDone={notDone}
        onClick={onClick}
      >
        <Button onClick={this.handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={notDone ? '' : faCheck} />
        </Button>
        <Label notDone={notDone}>
          {taskValue}
        </Label>
        <Status>
          {!notDone ? "Done!" : "In progress..."}
        </Status>
      </TaskWrapper>
    );
  }

}

// function TaskWrapper({ notDone, children, onClick }) {
//   const classString = classnames({
//     'task': true,
//     'completed': !notDone,
//   });
//   return (
//     <div className={classString} onClick={onClick}>
//       {children}
//     </div>
//   )
// }

export default Task;