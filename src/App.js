import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    
      <Router>
          <Switch>
              <Route exact path ="/">
                    <h1>Main</h1>
              </Route>

              <Route exact path ="/welcome">
                    <h1>Welcome</h1>
              </Route>

              <Route exact path ="/whatsNew">
                    <h1>What's New</h1> 
              </Route>
          </Switch>
      </Router>
      
  );
}

export default App;
