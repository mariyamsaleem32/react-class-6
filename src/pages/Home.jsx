import React from 'react';
import { GlobalContext } from '../context/contex';
import { useContext } from "react";

const Home = () => {
  let { state, dispatch } = useContext(GlobalContext);
  return (
    <div>
      <h1>I am Home page</h1>
      <h2>{state.myNum}</h2>
      <button onClick={() => {dispatch({type:"ADD"})}}>+</button>
    </div>
  );
}

export default Home;
