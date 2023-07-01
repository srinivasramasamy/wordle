import { Letter } from "../types/Letter";
import { Match } from "../types/Match";

interface Iprops {
  letter?: Letter;
}

const getBackgroundClassName = (match: string | undefined): string => {
  switch (match) {
    case Match.PresentInSpot:
      return "bg-success";
    case Match.Present:
      return "bg-warning";
    case Match.Absent:
      return "bg-secondary";
    default:
      return "";
  }
};

function Cell({ letter }: Iprops) {
  return (
    <td
      className={`border border-dark border-2 text-center align-middle column-width fs-4 text ${
        letter?.match ? "text-white" : ""
      } ${getBackgroundClassName(letter?.match)}`}
    >
      {letter?.char ? letter.char : ""}
    </td>
  );
}

export default Cell;
