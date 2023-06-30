interface Iprops {
  char?: string;
  match?: string;
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

function Cell({ char, match }: Iprops) {
  return (
    <td
      className={`border text-center column-width ${getBackgroundClassName(
        match
      )}`}
    >
      {char ? char : ""}
    </td>
  );
}

export default Cell;
