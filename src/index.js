import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text, Circle } from "react-konva";

const App = () => {
  const [text, setText] = useState("");

  const handelListen = (e) => {
    e.listening = true;
  };
  const handelDontListen = (e) => {
    e.listening = false;
  };
  return (
    <>
      <div>
        <button onClick={handelListen}>Listen</button>
        <button onClick={handelDontListen}>Dont' Listen</button>
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
          />
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
