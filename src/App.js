import react from "react";
import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Switch>
      <Route exact path="/">
        HomePage
   </Route>
      <Route exact path="/starred">
        starred page
   </Route>

      <Route>this is a 404 page</Route>
    </Switch>
  );
}

export default App;
