import React, { createContext, useReducer } from "react";
import dataAttributes from "../constants/dataAttributes";

// available state
interface IEditorState {
  commands: string;
  shape: string;
  tool: string;
  linewidth: string;
  swatch: string;
}

const initialState: IEditorState = {
  commands: "",
  shape: dataAttributes.line,
  tool: "",
  linewidth: dataAttributes.lineWidth1,
  swatch: dataAttributes.black
};

// available types
export enum EditorActType {
  DUMMY_ACTION = "DUMMY_ACTION"
}

// avaiable actions
interface DummyAction {
  type: EditorActType.DUMMY_ACTION;
  payload: string;
}

type IEditorActions = DummyAction;

export const EditorContext = createContext<{
  state: IEditorState;
  dispatch: React.Dispatch<IEditorActions>;
}>({ state: initialState, dispatch: () => {} });

function reducer(state: IEditorState, action: IEditorActions): IEditorState {
  switch (action.type) {
    case EditorActType.DUMMY_ACTION:
      return state;
    default:
      return state;
  }
}

const EditorContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;
