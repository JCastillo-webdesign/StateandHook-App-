import './App.css';
import Counter from './components/Counter';
import TypeText from './components/TypeText';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App"> 
      <Counter />
      <TypeText />
      <ToDoList />
      <p className="footer-name">Jasmine Castillo</p>
      <p className="footer-date">3/23/25</p>
    </div>
  );
}
export default App;