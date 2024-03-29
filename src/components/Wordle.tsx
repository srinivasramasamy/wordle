import { useEffect, useState } from "react";
import { allowedWords } from "../data/Data";
import { Letter } from "../types/Letter";
import { Word } from "../types/Word";
import Help from "./Help";
import Keypad from "./Keypad";
import Row from "./Row";

interface Iprops {
  solution: string;
}

function Wordle({ solution }: Iprops) {
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
  const [error, setError] = useState<string>("");
  const [showHelp, setShowHelp] = useState<boolean>(false);

  const joinLetterChars = (word: Word): string => {
    return word.letters.map((letter) => letter.char).join("");
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const notMatched: boolean = words.find((word) => word.matched)
      ? false
      : true;
    if (notMatched) {
      const code: number = e.keyCode;
      const firstNonSubmittedWord: Word | undefined = words.find((word) =>
        word.notSubmitted()
      );
      const backSpace: boolean = code === 8;
      const enter: boolean = code === 13;
      const smallOrUpperCaseAlphabets =
        (code > 64 && code < 91) || (code > 96 && code < 123);

      if (smallOrUpperCaseAlphabets) {
        const firstEmptyLetter: Letter = firstNonSubmittedWord?.letters.find(
          (letter) => letter.char === ""
        )!;

        if (firstEmptyLetter) {
          firstEmptyLetter.char = e.key.toUpperCase();
        }
      } else if (backSpace) {
        const lastNonEmptyLetter: Letter =
          firstNonSubmittedWord?.letters.findLast(
            (letter) => letter.char.length > 0
          )!;

        if (lastNonEmptyLetter) {
          lastNonEmptyLetter.char = "";
        }
      } else if (enter) {
        if (
          firstNonSubmittedWord &&
          firstNonSubmittedWord.hasNoEmptyLetters() &&
          allowedWords.includes(
            joinLetterChars(firstNonSubmittedWord).toLowerCase()
          )
        ) {
          firstNonSubmittedWord.submitted = true;
          firstNonSubmittedWord.matchWith(solution);
          setError("");
        } else {
          setError("Must be a 5 letter word");
        }
      }
      setWords([...words]);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div className=" d-flex justify-content-center">
        <button type="button" className="btn" onClick={() => setShowHelp(true)}>
          <h1>Wordle</h1>
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <table className="table fw-bold table-width">
          <tbody>
            {words.map((word, index) => (
              <Row word={word} key={index} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        {words.find((word) => word.matched) ? (
          <b>Awesome!!!</b>
        ) : words.every((word) => word.submitted) ? (
          <b>{solution.toUpperCase()}</b>
        ) : (
          <div className="text-danger">{error}</div>
        )}
      </div>
      {showHelp ? <Help setShowHelp={setShowHelp} /> : ""}
      <Keypad />
    </>
  );
}

export default Wordle;
