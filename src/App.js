import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav';

function App() {
  return (
    <Router>
      <Nav />
      {/* <Switch>
      <Route path="/categories">
        <Categories />
      </Route>
      <Route path="/">
        <New />
        <Books />
      </Route>
    </Switch> */}
    </Router>
  );
}

export default App;
