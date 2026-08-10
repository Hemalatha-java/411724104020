import { Link } from "react-router-dom";

function RichDad() {
  return (
    <div>
      <h1>Rich Dad Poor Dad</h1>

      <h3>Author: Robert Kiyosaki</h3>

      <h3>Genre: Finance</h3>

      <p>
        Learn the difference between working for money and making money work
        for you through investing and financial education.
      </p>

      <Link to="/books">← Back to Books</Link>

      <br /><br />

      <Link to="/books/the-alchemist">← Previous</Link>

      {" | "}

      <Link to="/books/ikigai">Next →</Link>
    </div>
  );
}

export default RichDad;