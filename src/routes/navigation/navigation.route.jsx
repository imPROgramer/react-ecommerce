import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import './navigation.styles.scss';
import {ReactComponent as Logo} from '../../assests/crown.svg';

function Navigation(){
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo></Logo>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    <Link className="nav-link" to='/shop'>
                        CONTACT
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    );
}

export default Navigation;