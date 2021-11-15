import Home from './components/Exercise/Home';
import ExerciseCompo from './components/Exercise/ExerciseComponent'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Exercise" component={ExerciseCompo} />
      </Switch>
    </Router>
  );
}

export default App;
