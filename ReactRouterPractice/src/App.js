import {Route} from 'reac-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/products';
function App() {
  return (
    <div>
      <Route path="/welcome"> <Welcome/></Route>
      <Route path="/products"> <Products/></Route>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
