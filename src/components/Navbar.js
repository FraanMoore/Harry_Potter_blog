import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary" style={{background: "none"}}>
            <div className="container-fluid ">
                <Link className="navbar-brand text-warning fs-2" to={"/Home"}>Harry Potter </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" />

                <div  className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav ">
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Favoritos
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;