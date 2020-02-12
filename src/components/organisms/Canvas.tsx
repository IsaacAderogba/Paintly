// modules
import React, { useRef, useEffect, useContext } from "react";

// components/logic

// styles
import { styled } from "../../~reusables/contexts/ThemeContext";
import {
  EditorContext,
  EditorActType
} from "../../~reusables/contexts/EditorContext";

const Canvas: React.FC = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const { dispatch } = useContext(EditorContext);

  useEffect(() => {
    if (canvasEl.current) {
      dispatch({
        type: EditorActType.SET_CANVAS_AND_CONTEXT,
        payload: {
          canvas: canvasEl.current,
          context: canvasEl.current.getContext("2d") as CanvasRenderingContext2D
        }
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
