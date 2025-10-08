import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>Page not Found</p>
            <Link to="/">Back to Home</Link>
        </div>
    )
}