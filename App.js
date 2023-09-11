import './App.css';
import Counter from './components/Counter';
import ButtonClick from './components/Button';
import { useState } from 'react';


function App() {

const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
}

const resetClicks = () => {
  setCount(0);
}

  return (
    <div className="App">
      <Counter count={count} />
      <ButtonClick inc={increment}  />
      {count > 0 && (<div>
        <button style={{backgroundColor: '#999'}}  onClick={resetClicks}>Reset</button>
      </div>)}
      
    </div>
  );
}

export default App;
