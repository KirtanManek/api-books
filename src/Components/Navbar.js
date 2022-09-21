import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    var bid;

    return (<>
        <nav className="navbar navbar-light navbar-expand-lg bg-info sticky-top container-fluid">
            <div className="container-fluid">
                <Link className="navbar-brand active text-light" to="/">
                    Library Association of India
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-light bg-primary" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-light bg-primary" to="/books">Books List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-light bg-primary" to="/books/add">Add Book</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search book id" aria-label="Search" onChange={(e) => {
                            bid = e.target.value;
                        }} />
                        <input className="btn btn-outline-success" value="Search" type="submit" onClick={() => {
                            navigate('/books/' + bid);
                        }} />
                    </form>
                </div>
            </div>
        </nav>
    </>);
}