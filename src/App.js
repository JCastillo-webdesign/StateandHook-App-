import './App.css';
import Counter from './components/Counter';
import TypeText from './components/TypeText';
import ToDoList from './components/ToDoList';
import React from 'react';
import Cliffview from './Cliffview.PNG';

function App() {
  return (
    <div className="App"> 
      <Counter />
      <TypeText />
      <ToDoList />
      <h3 className="img-aligntop">If you're not living on the edge, you can't see the view...</h3>
      <img src={Cliffview} alt="The view" className="img-align" />
      <p className="footer-name">Jasmine Castillo</p>
      <p className="footer-date">3/28/25</p>
    </div>
  );
}
export default App;