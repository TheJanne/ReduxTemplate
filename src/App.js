import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, logout, login} from "./actions/index";

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>Counter: </h1>{counter}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>

      {isLogged ? <h3>Valuable info I shouldnt see</h3> : null}  
      <button onClick={() => dispatch(logout())}>Logout</button>  
      <button onClick={() => dispatch(login())}>Login</button>   
    </div>
  );
}

export default App;
