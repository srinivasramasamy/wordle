import { Letter } from "./Letter";

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
}
