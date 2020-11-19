import { useDispatch, useSelector, connect } from "react-redux"

function CounterInRedux({ value, onInc, onDec }) {
  // const dispatch = useDispatch();
  // const state = useSelector(state => state)

  function handleInc() {
    onInc();
    // dispatch({
    //   type: 'INC'
    // })
  }

  function handleDec() {
    onDec()
    // dispatch({
    //   type: 'DEC'
    // })
  }

  return (
    <div>
      <button onClick={handleInc}>+</button>
      <label>{value}</label>
      <button onClick={handleDec}>-</button>
    </div>
  )
}

export default connect(
  state => {
    return {
      value: state,
    }
  },
  dispatch => {
    return {
      onInc: () => dispatch({ type: 'INC' }),
      onDec: () => dispatch({ type: 'DEC' }),
    }
  }
)(CounterInRedux)