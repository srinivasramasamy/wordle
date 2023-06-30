import { Letter } from "./Letter";

export class Word {
  letters: Letter[];

  constructor(letters: Letter[]) {
    this.letters = letters;
  }
}
