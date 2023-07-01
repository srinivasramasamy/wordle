import { Letter } from "./Letter";
import { Match } from "./Match";

export class Word {
  letters: Letter[];
  submitted: boolean;

  constructor(letters: Letter[], submitted: boolean = false) {
    this.letters = letters;
    this.submitted = submitted;
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
      } else if (solutionArray.includes(letter.char)) {
        letter.match = Match.Present;
      } else {
        letter.match = Match.Absent;
      }
    });
  }
}
