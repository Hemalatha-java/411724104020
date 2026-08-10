import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Online Book Store</h1>

      <p>Welcome to our bookstore.</p>

      <Link to="/books">Books</Link><br /><br />

      <Link to="/authors">Authors</Link><br /><br />

      <Link to="/about">About</Link>

    </div>
  );
}

export default Home;