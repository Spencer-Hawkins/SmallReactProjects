import { Switch, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from './layout/MainNavigation';
import Layout from "./layout/Layout";
 
function App() {
  return (
    <Layout>
      <Switch>
      <Route path="/meetups" exact>
        <AllMeetupsPage />
      </Route>
      <Route path='/favorites'>
        <FavoritesPage />
      </Route>

      <Route path='/new-Meetup'>
        <NewMeetupPage />
      </Route>
      
      </Switch>
      </Layout>  
    

  );
}

export default App;
