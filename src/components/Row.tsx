import { Word } from "../types/Word";
import Cell from "./Cell";

interface Iprops {
  word?: Word;
}

function Row({ word }: Iprops) {
  return (
    <tr className="row-height">
      {word?.letters.map((letter) => (
        <Cell letter={letter} />
      ))}
    </tr>
  );
}

export default Row;
