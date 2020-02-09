// modules
import React from "react";
import { Route } from "react-router-dom";

// components/logic
import Editor from "./editor/Editor";

const App = () => {
  return <Route path="/" render={routeProps => <Editor {...routeProps} />} />;
};

export default App;
