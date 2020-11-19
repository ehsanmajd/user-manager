import React, { useState } from 'react'

function useLegacyState(initState) {
  const [state, setState] = useState(initState);

  function newSetState(newState) {
    const stateCopy = { ...state, ...newState };
    setState(stateCopy);
  }

  return [
    state,
    newSetState
  ]
}

export default function App() {
  // const [color, setColor] = React.useState('Black');
  // const [name, setName] = React.useState('David');
  const [state, setState] = useLegacyState({
    color: 'Black',
    name: 'David',
  });

  function handleNameClick() {
    setState({
      name: state.name === 'David' ? 'Reza' : 'David'
    })
    // setName(name === 'David' ? 'Reza' : 'David')
  }

  function handleColorClick() {
    setState({
      color: state.color === 'Black' ? 'White' : 'Black'
    })
    // setColor(color === 'Black' ? 'White' : 'Black')
  }

  return (
    <div>
      <div>
        <label>Color: </label>
        <label>{state.color}</label>
      </div>
      <div>
        <label>Name: </label>
        <label>{state.name}</label>
      </div>
      <button onClick={handleColorClick}>Set Color</button>
      <button onClick={handleNameClick}>Set Name</button>
    </div>
  )
}
