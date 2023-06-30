import { useState } from "react";
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

  return (
    <div className="d-flex justify-content-center">
      <table className="table border fw-bold table-width">
        {words.map((word) => (
          <Row word={word} />
        ))}
      </table>
    </div>
  );
}

export default Wordle;
