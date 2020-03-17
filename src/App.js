import React from 'react';
import './App.css';
//import InLeftBlock from './components/inLeftBlock';
import LeftBlock from './components/leftBlock';
import Main from './components/main';
import Menu from './components/menu';


const App = () => {
  return (
    <div className="App">
      <Menu />
      <div className="Container">
        <LeftBlock />
        <Main />
      </div>
    </div>
  );

  // click = (id) => {
  //   this.setState((prevState) => {
  //     const newState = { ...prevState }
  //     newState.isClicked = newState.MenuList[id].leftTable;
  //     return newState;
  //   })
  // }
}



export default App;
