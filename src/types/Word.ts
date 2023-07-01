import { Letter } from "./Letter";
import { Match } from "./Match";

export class Word {
  letters: Letter[];
  submitted: boolean;
  matched: boolean;

  constructor(
    letters: Letter[],
    submitted: boolean = false,
    matched: boolean = false
  ) {
    this.letters = letters;
    this.submitted = submitted;
    this.matched = matched;
  }

  hasNoEmptyLetters(): boolean {
    return this.letters.find((letter) => letter.char.length === 0)
      ? false
      : true;
  }

  notSubmitted(): boolean {
    return !this.submitted;
  }

  matchWith(solution: string) {
    const solutionArray: string[] = solution.toUpperCase().split("");

    this.letters.forEach((letter, index) => {
      if (letter.char === solutionArray.at(index)) {
        letter.match = Match.PresentInSpot;
        solutionArray[index] = "";
        this.matched = true;
      } else if (solutionArray.includes(letter.char)) {
        solutionArray[solutionArray.indexOf(letter.char)] = "";
        letter.match = Match.Present;
        this.matched = false;
      } else {
        letter.match = Match.Absent;
        this.matched = false;
      }
    });
  }
}
