import { Link } from "react-router-dom";

function NotfoundPage() {
    return (
        <div className="mt-5">
            <h1>whoops!</h1>
            <h3>404 Page Not Found</h3>
            <p>Try our <Link className="text-decoration-underline primary" to="/" >HomePage</Link></p>
        </div>
    )

}

export default NotfoundPage;