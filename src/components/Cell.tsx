import { Letter } from "../types/Letter";

interface Iprops {
  letter?: Letter;
}

const getBackgroundClassName = (match: string | undefined): string => {
  switch (match) {
    case "presentInSpot":
      return "bg-success";
    case "present":
      return "bg-warning";
    case "absent":
      return "bg-secondary";
    default:
      return "";
  }
};

function Cell({ letter }: Iprops) {
  return (
    <td
      className={`border text-center align-middle column-width ${
        letter?.match ? "text-white" : ""
      } ${getBackgroundClassName(letter?.match)}`}
    >
      {letter?.char ? letter.char : ""}
    </td>
  );
}

export default Cell;
