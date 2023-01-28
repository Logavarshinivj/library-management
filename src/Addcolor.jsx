import { useState } from 'react';
import { ColorBox } from "./ColorBox";

export function Addcolor() {

  const [color, setColor] = useState("orange");
  const styles = {
    backgroundColor: color,
  };
  const [colorList, setColorList] = useState(["crimson", "red", "green"]);
  return (
    <div>
      <input type="text" style={styles} onChange={(event) => setColor(event.target.value)} value={color} />
      <button onClick={() => (setColorList([...colorList, color]))}>ADD COLOR</button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}

    </div>


  );
}
