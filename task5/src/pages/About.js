import { Link } from "react-router-dom";

function About() {
    return (
        <div>

            <h1>About</h1>

            <p>
                This bookstore contains famous books and authors.
            </p>

            <Link to="/">Home</Link>

            <br /><br />

            <Link to="/books">Books</Link>

        </div>
    );
}

export default About;