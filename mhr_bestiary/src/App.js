import Start from "./components/Pages/Start";
import Menu from "./components/Pages/Menu";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Start} />
      <Route exact path="/menu" component={Menu} />
    </div>
    </Router>
  );
}

export default App;