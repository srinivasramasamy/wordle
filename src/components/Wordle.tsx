import { useEffect, useState } from "react";
import { Letter } from "../types/Letter";
import { Word } from "../types/Word";
import Row from "./Row";

function Wordle() {
  const buildEmptyWord = (): Word => {
    return new Word([
      new Letter("", ""),
      new Letter("", ""),
      new Letter("", ""),
      new Letter("", ""),
      new Letter("", ""),
    ]);
  };
  const [words, setWords] = useState<Word[]>([
    buildEmptyWord(),
    buildEmptyWord(),
    buildEmptyWord(),
    buildEmptyWord(),
    buildEmptyWord(),
    buildEmptyWord(),
  ]);

  const onKeyDown = (e: KeyboardEvent) => {
    const firstEmptyLetter: Letter = words[0].letters.find(
      (letter) => letter.char === ""
    )!;

    if (firstEmptyLetter) {
      firstEmptyLetter.char = e.key.toUpperCase();
    }

    setWords([...words]);
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <table className="table border fw-bold table-width">
        <tbody>
          {words.map((word) => (
            <Row word={word} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Wordle;
