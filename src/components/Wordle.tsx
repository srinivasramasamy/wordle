import Word from "./Word";

function Wordle() {
  return (
    <div className="d-flex justify-content-center">
      <table className="table border fw-bold text-white table-width">
        <Word />
      </table>
    </div>
  );
}

export default Wordle;
