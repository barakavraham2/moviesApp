import react from "react";
import { Switch, Route } from 'react-router-dom'
import Navs from "./components/Navs";
import Home from "./components/Pages/Home";
import Starred from "./components/Pages/Starred";
function App() {
  return (

    <div>
      <Navs />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route>
          <div>
            page dosent found :(
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
