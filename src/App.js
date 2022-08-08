import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Market from './pages/Market';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Intro from './pages/IntroPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route exact path="/home" component={Home} />
      <Route path="/market" component={Market} />
    </Switch>
  );
}

export default App;
