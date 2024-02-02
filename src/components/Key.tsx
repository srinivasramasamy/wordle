interface Iprops {
  keyChar: string;
  keyCode: number;
}

function Key({ keyChar, keyCode }: Iprops) {
  const onKeyPress = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: keyChar,
        keyCode: keyCode,
      })
    );
  };

  return (
    <div
      className="text-center align-middle column-width fs-3 bg-secondary text-black"
      role="button"
      onClick={onKeyPress}
    >
      {keyChar}
    </div>
  );
}

export default Key;
