
import { Link } from "react-router-dom";

function AtomicHabits() {
  return (
    <div>
      <h1>Atomic Habits</h1>

      <h3>Author: James Clear</h3>

      <h3>Genre: Self Help</h3>

      <p>
        Atomic Habits teaches how small daily habits can create remarkable
        results and help break bad habits.
      </p>

      <Link to="/books">← Back to Books</Link>

      <br /><br />

      <Link to="/books/the-alchemist">Next →</Link>
    </div>
  );
}

export default AtomicHabits;