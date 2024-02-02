import Key from "./Key";

function Keypad() {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex gap-1">
        <Key keyChar="Q" keyCode={81} />
      </div>
    </div>
  );
}

export default Keypad;
