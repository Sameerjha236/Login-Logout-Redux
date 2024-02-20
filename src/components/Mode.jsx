import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";
const Mode = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="Mode">
      <input
        type="text"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      />
      <button
        onClick={() => {
          dispatch(changeColor(color));
          setColor("");
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default Mode;
