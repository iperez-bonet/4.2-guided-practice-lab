import Counter from './Counter.js';
import Input from './Input.js';
import Todolist from './Todolist.js';
import Toggle from './Toggle.js';
import './App.css';

function App() {
  return (
    <div className="App">
    <Toggle title={"Counter"} comp={<Counter />} /> <hr /> 
    <Toggle title={"Input"} comp={<Input />} /> <hr /> 
    <Toggle title={"List"} comp={<Todolist />} />
    </div>
  );
};

export default App;
