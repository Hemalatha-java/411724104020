import { Link } from "react-router-dom";

function Alchemist() {
  return (
    <div>
      <h1>The Alchemist</h1>

      <h3>Author: Paulo Coelho</h3>

      <h3>Genre: Fiction</h3>

      <p>
        The story of a shepherd named Santiago who travels the world to find
        his treasure and discover his destiny.
      </p>

      <Link to="/books">← Back to Books</Link>

      <br /><br />

      <Link to="/books/atomic-habits">← Previous</Link>

      {" | "}

      <Link to="/books/rich-dad-poor-dad">Next →</Link>
    </div>
  );
}

export default Alchemist;