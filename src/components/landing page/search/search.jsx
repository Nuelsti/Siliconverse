// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './search.css';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Button, Navbar, Nav, Container } from 'react-bootstrap';

function Search() {

  return (
    <div className="search__main">    
        <div className="menu">
            <div className="item">
                <Nav.Link as ={Link} to ='/' className='link'>
                    <span className="itme"> Find Internship </span>
                    <svg viewBox="0 0 360 360" xmlSpace="preserve">
                        <g id="SVGRepo_iconCarrier">
                            <path
                            id="XMLID_225_"
                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                            ></path>
                        </g>
                    </svg>
                </Nav.Link>

                <div className="submenu">
                    <div className="submenu-item">
                        <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                    </div>
                    <div className="submenu-item">
                    <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                    </div>
                    <div className="submenu-item">
                    <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                    </div>
                    <div className="submenu-item">
                    <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                    </div>
                </div>
      
            </div>
        </div>

        <div className="search__bar">
            {/* first_searchbar */}
            <form action="#" className="search1">
            <button className="search1__button">
                <div className="search1__icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>magnifying-glass</title>
                    <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
                </svg>
                </div>
            </button>
            <input type="text" className="search1__input" placeholder="By Role title" />
            <button className="mic__button">
                <div className="mic__icon">
                <svg viewBox="0 0 360 360" xmlSpace="preserve">
                    <g id="SVGRepo_iconCarrier">
                    <path
                        id="XMLID_225_"
                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                    ></path>
                    </g>
                </svg>
                </div>                         
            </button>
            <div className="submenu">
                <div className="submenu-item">
                    <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                </div>
                <div className="submenu-item">
                    <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                </div>
                <div className="submenu-item">
                    <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                </div>
                <div className="submenu-item">
                    <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                </div>
            </div>

            </form>
            {/* second_searchbar */}
            <form action="#" className="search2">
            <button className="search2__button">
                <div className="search2__icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>magnifying-glass</title>
                    <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
                </svg>
                </div>
            </button>
            <input type="text" className="search2__input" placeholder="By Location" />
            <button className="mic__button">
                <div className="mic__icon">
                <svg viewBox="0 0 360 360" xmlSpace="preserve">
                    <g id="SVGRepo_iconCarrier">
                    <path
                        id="XMLID_225_"
                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                    ></path>
                    </g>
                </svg>
                </div>                         
            </button>
            <div className="submenu">
                <div className="submenu-item">
                    <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                </div>
                <div className="submenu-item">
                    <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                </div>
                <div className="submenu-item">
                    <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                </div>
                <div className="submenu-item">
                    <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                </div>
            </div>

            </form>
            {/* third_searchbar */}
            <form action="#" className="search3">
            <button className="search3__button">
                <div className="search3__icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>magnifying-glass</title>
                    <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
                </svg>
                </div>
            </button>
            <input type="text" className="search3__input" placeholder="By Community" />
            <button className="mic__button">
                <div className="mic__icon">
                <svg viewBox="0 0 360 360" xmlSpace="preserve">
                    <g id="SVGRepo_iconCarrier">
                    <path
                        id="XMLID_225_"
                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                    ></path>
                    </g>
                </svg>
                </div>                         
            </button>
            <div className="submenu">
                <div className="submenu-item">
                    <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                </div>
                <div className="submenu-item">
                    <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                </div>
                <div className="submenu-item">
                    <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                </div>
                <div className="submenu-item">
                    <Nav.Link as={Link} to="/" className="submenu-link"> Development </Nav.Link>
                </div>
            </div>

            </form>
            

            
        </div>
    </div>
   
  );
}

export default Search;