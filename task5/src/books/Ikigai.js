import { Link } from "react-router-dom";

function Ikigai() {
  return (
    <div>
      <h1>Ikigai</h1>

      <h3>Author: Hector Garcia & Francesc Miralles</h3>

      <h3>Genre: Lifestyle</h3>

      <p>
        Discover the Japanese concept of Ikigai and learn how to live a longer,
        happier, and more meaningful life.
      </p>

      <Link to="/books">← Back to Books</Link>

      <br /><br />

      <Link to="/books/rich-dad-poor-dad">← Previous</Link>

      {" | "}

      <Link to="/books/deep-work">Next →</Link>
    </div>
  );
}

export default Ikigai;