import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './views/main';
import Players from './views/players';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
        <Players />
        KICKBALL
      </div>
    </BrowserRouter>
  );
}

export default App;
