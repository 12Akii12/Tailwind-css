import Home from './components/Exercise/Home';
import ExerciseCompo from './components/Exercise/ExerciseComponent';
import GeeksCompo from './components/Exercise/Geeks';
import GeeksChat from './components/Exercise/GeeksChat';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Exercise" component={ExerciseCompo} />
        <Route exact path="/Geeks" component={GeeksCompo} />
        <Route exact path="/GeeksChat" component={GeeksChat} />

      </Switch>
    </Router>
  );
}

export default App;
