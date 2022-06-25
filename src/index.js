import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text, Circle } from "react-konva";

const App = () => {
  const [text, setText] = useState("");
  const ref = useRef();
  const handelListen = () => {
    ref.listening(true);
    ref.listening(false);
  };
  const handelDontListen = () => {};
  return (
    <>
      <div id="buttons">
        <button onClick={handelListen} id="listen">
          Listen
        </button>
        <button onClick={handelDontListen} id="dontdontListen">
          Dont' Listen
        </button>
      </div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text
            text={text}
            x={70}
            y={20}
            fontSize={24}
            fontFamily={"Calibri"}
            fill={"black"}
          />
          <Circle
            x={150}
            y={100}
            radius={50}
            ScaleX={2}
            fill={"red"}
            stroke={"black"}
            strokeWidth={4}
            strokeScaleEnabled={false}
            onMouseOver={() => setText("Mouse Over")}
            onMouseOut={() => setText("Mouse Out")}
            listening={false}
            ref={ref}
          />
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
