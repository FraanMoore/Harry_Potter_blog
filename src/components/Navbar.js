import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary" style={{background: "none"}}>
            <div className="container-fluid ">
                <Link className="navbar-brand text-warning fs-2" to={"/Home"}>Harry Potter </Link>

                <div>
                    <ul className="navbar-nav ">
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle btn btn-outline-warning text-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menú
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><Link to="/favorites" className="dropdown-item">Favoritos</Link></li>
                                <li><Link to="/characters" className="dropdown-item">Personajes</Link></li>
                                <li><Link to="/login" className="dropdown-item">Login</Link></li>
                                <li><Link to="/users" className="dropdown-item">Registrarse</Link></li>
                                <a style={{textDecoration: "none", color: "black", paddingLeft:"16px"}} href="/home">Cerrar sesión</a>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;