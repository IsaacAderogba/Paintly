import React, { createContext, useReducer } from "react";
import DataAttributesEnum from "../constants/dataAttributes";
import Paint from "../classes/Paint";

// available state
interface IEditorState {
  paint: Paint | null;
  commands: string;
  shape: string;
  tool: string;
  linewidth: string;
  brushWidth: string;
  swatch: string;
}

const initialState: IEditorState = {
  paint: null,
  commands: "",
  shape: DataAttributesEnum.line,
  tool: "",
  linewidth: DataAttributesEnum.lineWidth1,
  brushWidth: DataAttributesEnum.brushWidth1,
  swatch: DataAttributesEnum.black
};

// available types
export enum EditorActType {
  UPDATE_CANVAS_TOOL = "UPDATE_CANVAS_TOOL",
  SET_CANVAS_AND_CONTEXT = "SET_CANVAS_AND_CONTEXT"
}

interface ISetCanvasAndContext {
  type: EditorActType.SET_CANVAS_AND_CONTEXT;
  payload: Paint;
}
// avaiable actions
interface IUpdateCanvasTool {
  type: EditorActType.UPDATE_CANVAS_TOOL;
  payload: {
    commands?: DataAttributesEnum | "";
    shape?: DataAttributesEnum | "";
    tool?: DataAttributesEnum | "";
    linewidth?: DataAttributesEnum | "";
    brushWidth?: DataAttributesEnum | "";
    swatch?: DataAttributesEnum | "";
  };
}

type IEditorActions = IUpdateCanvasTool | ISetCanvasAndContext;

export const EditorContext = createContext<{
  state: IEditorState;
  dispatch: React.Dispatch<IEditorActions>;
}>({ state: initialState, dispatch: () => {} });

function reducer(state: IEditorState, action: IEditorActions): IEditorState {
  switch (action.type) {
    case EditorActType.UPDATE_CANVAS_TOOL:
      // updates the paint tool where necessary
      if (
        state.paint &&
        ("tool" in action.payload || "shape" in action.payload)
      ) {
        if (action.payload.tool) {
          state.paint.activeTool = action.payload.tool;
        } else if (action.payload.shape) {
          state.paint.activeTool = action.payload.shape;
        }
      }

      if (state.paint && action.payload.linewidth)
        state.paint.lineWidth = action.payload.linewidth;

      if (state.paint && action.payload.brushWidth)
        state.paint.brushWidth = action.payload.brushWidth;

      if (state.paint && action.payload.swatch)
        state.paint.swatch = action.payload.swatch;

      return {
        ...state,
        ...action.payload
      };
    case EditorActType.SET_CANVAS_AND_CONTEXT:
      action.payload.init(state.shape ? state.shape : state.tool);
      return {
        ...state,
        paint: action.payload
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
