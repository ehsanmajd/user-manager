import { Component } from "react";
import Task from "./components/Task";
import ResetCSS from "./components/ResetCSS";
import GlobalStyles from "./components/GlobalStyles";

const idGenerator = (
  function () {
    let index = 0;
    return () => index++;
  }
)();

class App extends Component {
  constructor(props) {
    super(props);

    console.log('App constructor');

    this.state = {
      value: "",
      tasks: [],
      mode: 'all'
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  addTask = () => {
    // const newTask = {
    //   taskText: this.state.value,
    //   id: idGenerator(),
    //   isComplete: false,
    // };
    // const addedTasks = [...this.state.tasks, newTask];
    // // addedTasks.push(newTask);
    // this.setState({
    //   tasks: addedTasks,
    //   value: "",
    // });
    this.setState(prevState => {
      const newTask = {
        taskText: prevState.value,
        id: idGenerator(),
        isComplete: false,
      };
      return {
        value: '',
        tasks: [...prevState.tasks, newTask]
      }
    })
  };

  handleCheck = (id) => {
    this.setState(({ tasks }) => {
      const currentTasks = [...tasks];
      const index = currentTasks.findIndex((task) => task.id === id);
      currentTasks[index] = {
        ...currentTasks[index],
        isComplete: !currentTasks[index].isComplete
      };

      return {
        tasks: currentTasks,
      };
    });
  };

  handleDelete = (id) => {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  isCheckAllMode = () => {
    return this.state.tasks.some((task) => task.isComplete)
  }

  changeAll = () => {
    this.setState(({ tasks }) => {
      return {
        tasks: tasks.map((task) =>
          ({
            ...task,
            isComplete: !this.isCheckAllMode()
          })
        ),
      };
    });
  };

  componentDidMount() {
    console.log('App componentDidMount');
  }
  
  componentDidUpdate(oldProps, oldState) {
    console.log('App componentDidUpdate');
    // console.log('componentDidUpdate, oldProps', oldProps);
    // console.log('componentDidUpdate, oldState', oldState);
    // console.log('componentDidUpdate, currentState', this.state);
    // console.log('componentDidUpdate, currentProps', this.props);
  }
  
  shouldComponentUpdate() {
    console.log('App shouldComponentUpdate');
    return true;
  }

  render() {
    console.log('App render')
    const { tasks, value, mode } = this.state;
    const isShowAllMode = mode === 'all';
    const isShowDoneMode = mode === 'done';
    const isShowNotDoneMode = mode === 'not-done';

    let filteredTasks = tasks;

    if (isShowDoneMode) {
      filteredTasks = tasks.filter(x => x.isComplete)
    }
    else if (isShowNotDoneMode) {
      filteredTasks = tasks.filter(x => !x.isComplete)
    }

    return (
      <div className="app">
        <div className="inputs">
          <input
            type="text"
            value={value}
            onChange={this.handleChange}
            placeholder="Add new task ..."
          />
          <button className="add-task" onClick={this.addTask} disabled={!value}>
            Add Task
          </button>
        </div>

        <div style={{ display: 'flex' }}>
          <button
            className="check-btn"
            onClick={this.changeAll}
            disabled={tasks.length === 0}
          >
            {this.isCheckAllMode() ? "Uncheck all" : "Check all"}
          </button>
          <button
            onClick={() => this.setState({ mode: 'all' })}
            style={{ backgroundColor: isShowAllMode ? 'green' : 'unset' }}
            className="check-btn"
          >
            All
          </button>
          <button
            onClick={() => this.setState({ mode: 'done' })}
            style={{ backgroundColor: isShowDoneMode ? 'green' : 'unset' }}
            className="check-btn"
          >
            Done Tasks
          </button>

          <button
            onClick={() => this.setState({ mode: 'not-done' })}
            style={{ backgroundColor: isShowNotDoneMode ? 'green' : 'unset' }}
            className="check-btn"
          >
            Not Done Tasks
          </button>
        </div>

        {filteredTasks.map(({ taskText, id, isComplete }) => {
          return (
            <Task
              taskValue={taskText}
              key={id}
              notDone={!isComplete}
              onClick={() => this.handleCheck(id)}
              onDelete={() => this.handleDelete(id)}
            />
          );
        })}
      </div>
    );
  }
}


function MyApp() {
  return (
    <>
      <ResetCSS />
      <GlobalStyles />
      <App />
    </>
  )
}

export default MyApp;
