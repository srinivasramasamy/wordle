import { keyCodes } from "../data/Data";

interface Iprops {
  keyChar: string;
}

function Key({ keyChar }: Iprops) {
  const onKeyPress = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: keyChar,
        keyCode: keyCodes.get(keyChar),
      })
    );
  };

  return (
    <div
      className="text-center align-middle key-width key-height p-2 fs-5 bg-secondary text-black"
      role="button"
      onClick={onKeyPress}
    >
      {keyChar}
    </div>
  );
}

export default Key;
