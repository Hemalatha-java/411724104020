import { Link } from "react-router-dom";

function PsychologyMoney() {
  return (
    <div>
      <h1>The Psychology of Money</h1>

      <h3>Author: Morgan Housel</h3>

      <h3>Genre: Finance</h3>

      <p>
        Understand how people's emotions and behavior influence financial
        decisions and long-term wealth creation.
      </p>

      <Link to="/books">← Back to Books</Link>

      <br /><br />

      <Link to="/books/deep-work">← Previous</Link>
    </div>
  );
}

export default PsychologyMoney;