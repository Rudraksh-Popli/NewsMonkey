import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" end className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/business" end className="nav-link">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/entertainment" end className="nav-link">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/health" end className="nav-link">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/science" end className="nav-link">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sports" end className="nav-link">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/technology" end className="nav-link">Technology</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavBar;
