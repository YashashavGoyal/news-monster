import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">News Monster</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="/">About</a>
                                </li> */}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li><Link className="dropdown-item" to='/'>general</Link></li>
                                        <li><Link className="dropdown-item" to='/sports'>sports</Link></li>
                                        <li><Link className="dropdown-item" to='/science'>science</Link></li>
                                        <li><Link className="dropdown-item" to='/business'>business</Link></li>
                                        <li><Link className="dropdown-item" to='/technology'>technology</Link></li>
                                        <li><Link className="dropdown-item" to='/health'>health</Link></li>
                                        <li><Link className="dropdown-item" to='/entertainment'>entertainment</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item">Search It By Yourself</a></li>
                                    </ul>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Link</a>
                                </li> */}
                            </ul>
                            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
