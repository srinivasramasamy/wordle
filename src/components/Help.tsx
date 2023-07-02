import { Letter } from "../types/Letter";
import { Match } from "../types/Match";
import Cell from "./Cell";

interface Ipros {
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
}

function Help({ setShowHelp }: Ipros) {
  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">How To Play</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setShowHelp(false)}
            ></button>
          </div>
          <div className="modal-body">
            <li>Guess the Wordle in 6 tries.</li>
            <li>Each guess must be a valid 5-letter word.</li>
            <li>
              The color of the tiles will change to show how close your guess
              was to the word.
            </li>
            <br />
            <b>Examples</b>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <Cell letter={new Letter("A", Match.PresentInSpot)} />
                  <td>A is in the word and in the correct spot.</td>
                </tr>
                <tr>
                  <Cell letter={new Letter("U", Match.Present)} />
                  <td>U is in the word but in the wrong spot.</td>
                </tr>
                <tr>
                  <Cell letter={new Letter("I", Match.Absent)} />
                  <td>I is not in the word in any spot.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
