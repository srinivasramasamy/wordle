import { Letter } from "./Letter";

export class Word {
  letters: Letter[];
  submitted: boolean;

  constructor(letters: Letter[], submitted: boolean = false) {
    this.letters = letters;
    this.submitted = submitted;
  }
}
