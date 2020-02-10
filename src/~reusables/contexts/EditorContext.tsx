import React, { createContext, useReducer } from "react";
import DataAttributesEnum from "../constants/dataAttributes";

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
  shape: DataAttributesEnum.line,
  tool: "",
  linewidth: DataAttributesEnum.lineWidth1,
  swatch: DataAttributesEnum.black
};

// available types
export enum EditorActType {
  UPDATE_CANVAS_TOOL = "UPDATE_CANVAS_TOOL"
}

// avaiable actions
interface IUpdateCanvasTool {
  type: EditorActType.UPDATE_CANVAS_TOOL;
  payload: {
    commands?: DataAttributesEnum | "";
    shape?: DataAttributesEnum | "";
    tool?: DataAttributesEnum | "";
    linewidth?: DataAttributesEnum | "";
    swatch?: DataAttributesEnum | "";
  };
}

type IEditorActions = IUpdateCanvasTool;

export const EditorContext = createContext<{
  state: IEditorState;
  dispatch: React.Dispatch<IEditorActions>;
}>({ state: initialState, dispatch: () => {} });

function reducer(state: IEditorState, action: IEditorActions): IEditorState {
  switch (action.type) {
    case EditorActType.UPDATE_CANVAS_TOOL:
      return {
        ...state,
        ...action.payload
      };
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
