import { deleteCode, enterCode } from "../data/Data";
import Key from "./Key";

function Keypad() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex gap-1">
          <Key keyChar="Q" />
          <Key keyChar="W" />
          <Key keyChar="E" />
          <Key keyChar="R" />
          <Key keyChar="T" />
          <Key keyChar="Y" />
          <Key keyChar="U" />
          <Key keyChar="I" />
          <Key keyChar="O" />
          <Key keyChar="P" />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-1">
        <div className="d-flex gap-1">
          <Key keyChar="A" />
          <Key keyChar="S" />
          <Key keyChar="D" />
          <Key keyChar="F" />
          <Key keyChar="G" />
          <Key keyChar="H" />
          <Key keyChar="J" />
          <Key keyChar="K" />
          <Key keyChar="L" />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-1">
        <div className="d-flex gap-1">
          <Key keyChar={enterCode} />
          <Key keyChar="Z" />
          <Key keyChar="X" />
          <Key keyChar="C" />
          <Key keyChar="V" />
          <Key keyChar="B" />
          <Key keyChar="N" />
          <Key keyChar="M" />
          <Key keyChar={deleteCode} />
        </div>
      </div>
    </>
  );
}

export default Keypad;
