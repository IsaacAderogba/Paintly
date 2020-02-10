// modules
import React from "react";
import { Route } from "react-router-dom";

// components/logic
import Editor from "./editor/Editor";
import EditorProvider from "../~reusables/contexts/EditorContext";

const App = () => {
  return (
    <Route
      path="/"
      render={routeProps => (
        <EditorProvider>
          <Editor {...routeProps} />
        </EditorProvider>
      )}
    />
  );
};

export default App;
