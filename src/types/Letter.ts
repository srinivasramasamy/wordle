class Letter {
  char: string;
  match: string | undefined;

  constructor(char: string, match: string | undefined) {
    this.char = char;
    this.match = match;
  }
}
