import Row from "./Row";

function Wordle() {
  return (
    <div className="d-flex justify-content-center">
      <table className="table border fw-bold text-white table-width">
        <Row />
      </table>
    </div>
  );
}

export default Wordle;
