import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { Greet } from './components/Greet'
import Greet  from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Cclick from './components/Cclick'
import Eventbind from './components/Eventbind'
import Parent from './components/Parent'
import Usergreeting from './components/Usergreeting'
import Namelist2 from './components/Namelist2'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline';
import './components/style.css'
import style from './components/style.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';

class App extends Component{
  render() {
    return (
      <div className="App">
        <LifecycleA />
        {/* <Form /> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={style.sucess}>Sucess</h1>
        <Inline /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <Namelist2 /> */}
        {/* <Namelist /> */}
      {/* <Usergreeting /> */}
        {/* <Parent /> */}
      {/* <Greet name="VP" char="good" /> 
      <Welcome name="MUSTHU" char="kozhappola" /> */}
      {/* //   <Greet name="VP" char="good">
      //     <button>Click</button>
      //   </Greet>
      //   <Greet name="AKU" char="bed">
      //     <button>Touch</button>
      //   </Greet>
      //   <Greet name="NAVEEN" char="sed">
      //     <button>Hit me</button>
      //   </Greet>
      //   <Welcome name="MUSTHU" char="kozhappola">
      //     <button>slice</button>
      //   </Welcome>
      //   <Welcome name="MAATA" char="koyii">
      //     <button>kell</button>
      //   </Welcome> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      </div>
    )
  }}
  

export default App;


