import React, { useRef, useState, useImperativeHandle } from 'react'

class Test extends React.Component {
  constructor() {
    super();

    this.state = {
      foo: false
    }
  }

  toggleFoo() {
    this.setState(prevState => {
      return {
        foo: !prevState.foo
      }
    })
  }

  render() {
    return (
      <div>{this.state.foo ? 'Yes' : 'No'}</div>
    )
  }
}

const Test2 = React.forwardRef((props, ref) => {
  const [foo, setFoo] = useState(false);
  useImperativeHandle(
    ref,
    () => {
      return { toggleFoo }
    },
    [toggleFoo]
  )

  function toggleFoo() {
    setFoo(!foo)
  }
  return (
    <div>{foo ? 'Yes' : 'No'}</div>
  )
});


export default function App() {

  // const [state, setState] = useState(10 - 10);
  const [state, setState] = useState(() => 10 - 10);
  const name = useRef('Ehsan');
  // let name = 'Ehsan';
  // const testRef = useRef();

  // function handleClick() {
  //   console.log(testRef.current);
  //   testRef.current.toggleFoo();
  // }

  // return (
  //   <div>
  //     <Test2 ref={testRef} />
  //     <button onClick={handleClick}>Toggle</button>
  //   </div>
  // )


  const handleChange = React.useCallback(
    function () {
      name.current = 'Ahmad';
      setState(state + 1);
    },
    [name, setState, state]
  );

  return <div>
    <div>Hello, {name.current}</div>
    <label>{state}</label>
    <button onClick={handleChange}>Change</button>
  </div>
}
