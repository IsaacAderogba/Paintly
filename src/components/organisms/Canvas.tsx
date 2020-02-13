// modules
import React, { useRef, useEffect, useContext } from "react";

// components/logic
import Paint from "../../~reusables/classes/Paint";
import {
  EditorContext,
  EditorActType
} from "../../~reusables/contexts/EditorContext";

// styles
import { styled } from "../../~reusables/contexts/ThemeContext";

const Canvas: React.FC = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const { dispatch } = useContext(EditorContext);

  useEffect(() => {
    if (canvasEl.current) {
      canvasEl.current.width = canvasEl.current.offsetWidth;
      canvasEl.current.height = canvasEl.current.offsetHeight;
      dispatch({
        type: EditorActType.SET_CANVAS_AND_CONTEXT,
        payload: new Paint(canvasEl.current)
      });
    }
  }, [dispatch]);

  return (
    <StyledCanvas ref={canvasEl} id="canvas">
      hi
    </StyledCanvas>
  );
};

const StyledCanvas = styled.canvas`
  width: 640px;
  height: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  background: white;
  transform: translate(-50%, -50%);
`;

export default Canvas;
