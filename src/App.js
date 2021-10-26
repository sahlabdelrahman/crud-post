import { Route, Switch } from "react-router";

import "./App.css";

import Posts from "./pages/posts";
import Post from "./pages/post";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts/:id" component={Post} />
      </Switch>
    </div>
  );
}

export default App;
