import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={ Login } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </BrowserRouter>
  );
}

export default App;
