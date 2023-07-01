import { useEffect, useState } from "react";
import { Letter } from "../types/Letter";
import { Match } from "../types/Match";
import { Word } from "../types/Word";
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

  const onKeyDown = (e: KeyboardEvent) => {
    const code: number = e.keyCode;
    const firstNonSubmittedWord: Word | undefined = words.find((word) =>
      notSubmitted(word)
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
      if (firstNonSubmittedWord) {
        firstNonSubmittedWord.submitted = true;
        firstNonSubmittedWord.letters.map(
          (letter, index) =>
            (letter.match = matchWithSolution(letter.char, index))
        );
      }
    }
    setWords([...words]);
  };

  const matchWithSolution = (char: string, index: number): string => {
    const lowerCaseChar = char.toLowerCase();
    return solution.includes(lowerCaseChar)
      ? solution.charAt(index) === lowerCaseChar
        ? Match.PresentInSpot
        : Match.Present
      : Match.Absent;
  };

  const notSubmitted = (word: Word): boolean => {
    return !word.submitted;
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
