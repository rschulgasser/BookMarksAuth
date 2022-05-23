import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext} from './AuthContext';



const Layout = (props) => {
const {user}=useAuthContext();
console.log(user);
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <a className="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">BookMark</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link to='/' className='nav-link text-light'>
                                        Home
                                    </Link>
                                </li>
                                {user!==null&&<> <li className="nav-item">
                                    <Link to='/logout' className='nav-link text-light'>
                                    Logout
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/mybookmarks' className='nav-link text-light'>
                                    MyBookMarks
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/addbookmark' className='nav-link text-light'>
                                    AddBookMark
                                    </Link>
                                </li>

                                </> }
                                  {user===null&& <>
                                <li className="nav-item">
                                    <Link to='/signup' className='nav-link text-light'>
                                    Signup
                                    </Link>
                                </li>
                                  <li className="nav-item">
                                    <Link to='/login' className='nav-link text-light'>
                                    Login
                                    </Link>
                                </li>
                                </>
                                }
                               
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="container" style={{ marginTop: 60 }}>
                {props.children}
            </div>

        </div>
    )
}

export default Layout;