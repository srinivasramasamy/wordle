import Cell from "./Cell";

function Row() {
  return (
    <tr className="row-height">
      <Cell char="A" match="presentInSpot" />
      <Cell char="P" match="absent" />
      <Cell char="P" match="present" />
      <Cell char="L" match="absent" />
      <Cell char="E" match="absent" />
    </tr>
  );
}

export default Row;
