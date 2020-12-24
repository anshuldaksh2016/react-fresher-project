import Comments from './components/Comments';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Comments} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
