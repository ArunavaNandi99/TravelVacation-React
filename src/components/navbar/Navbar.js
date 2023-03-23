import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {

    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>Travel Vacation</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                            </li>
                        </ul>
                        
                        <Link id="button" className="btn btn-outline-success" to={'/signin'} type="submit">Sign In</Link>
                        <Link id="button" className="btn btn-outline-success" to={'/signup'} type="submit">Sign Up</Link>
                        
                        {/* <Link id="button" className="btn btn-outline-success" to={'/signin'} type="submit">Sign In</Link>
                        <Link id="button" className="btn btn-outline-success" to={'/signup'} type="submit">Sign Up</Link> */}



                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar