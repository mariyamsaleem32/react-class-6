import React from 'react';
import { GlobalContext } from '../context/contex';
import { useContext } from "react";

const About = () => {
  let { state, dispatch } = useContext(GlobalContext);
  return (
    <div>
      <h1>I am About page</h1>
      <h2>{state.myNum}</h2>
      <button onClick={() => {dispatch({type:"SUB"})}}>-</button>
    </div>
  );
}

export default About;
