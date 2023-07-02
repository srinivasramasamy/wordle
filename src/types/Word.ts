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
    let matched: boolean = true;
    this.letters.forEach((letter, index) => {
      if (letter.char === solutionArray.at(index)) {
        letter.match = Match.PresentInSpot;
        solutionArray[index] = "";
      } else if (solutionArray.includes(letter.char)) {
        solutionArray[solutionArray.indexOf(letter.char)] = "";
        letter.match = Match.Present;
        matched = false;
      } else {
        letter.match = Match.Absent;
        matched = false;
      }
      this.matched = matched;
    });
  }
}
