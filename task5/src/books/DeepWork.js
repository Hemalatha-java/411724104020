import { Link } from "react-router-dom";

function DeepWork() {
  return (
    <div>
      <h1>Deep Work</h1>

      <h3>Author: Cal Newport</h3>

      <h3>Genre: Productivity</h3>

      <p>
        Learn how focused work without distractions can improve productivity
        and help achieve professional success.
      </p>

      <Link to="/books">← Back to Books</Link>

      <br /><br />

      <Link to="/books/ikigai">← Previous</Link>

      {" | "}

      <Link to="/books/the-psychology-of-money">Next →</Link>
    </div>
  );
}

export default DeepWork;