import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './views/main';
import PlayerDetail from './views/playerdetail';
import Players from './views/players';
import TeamDetail from './views/teamdetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/player">
            <Players />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/player/:id">
            <PlayerDetail />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/team/:id">
            <TeamDetail />
          </Route>
        </Switch>
        KICKBALL
      </div>
    </BrowserRouter>
  );
}

export default App;
