import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle'
import Option from './Option'
import Counter from './Counter'
import OptionLocal from './OptionLocal'
function App() {
  return (
    <div className="App">

    <Option/>
    <Counter/>
    <h1>Using Local Storage</h1>
    <OptionLocal/>
    </div>
  );
}

export default App;
