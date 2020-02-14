import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Todos from "./Todos";
import Hello from "./Hello";
import Presentation from "./Presentation";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      App
      <nav>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
      </nav>
      <Route path="/" component={Home} exact={true} />
      <Route path="/todos" component={Todos} />
      <Route path="/hello/:name" component={Hello} />
      <Route path="/presentation" component={Presentation} />
      {
          routes.map((r) => <Route key={r.path} {...r} />)
      }
      
      {/* <Route path="/hello/:name" >
          <Hello />
      </Route> */}
      {/* <Switch>
        <Route path="/todos" component={Todos} />
        <Route path="/" component={Home} />
       </Switch> */}
    </div>
  );
}

export default App;
