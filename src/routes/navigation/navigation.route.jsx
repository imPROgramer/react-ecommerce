import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import './navigation.styles.scss';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import { UserContext} from '../../context/user.context';
import { signOutUser } from "../../utils/firebase.utils";

function Navigation(){

    const {currentUser} = useContext(UserContext);

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
                    {
                        currentUser? (
                            <span className="nav-link" onClick={signOutUser}>
                                SIGN OUT
                            </span>)
                            :(
                            <Link className="nav-link" to='/auth'>
                                SIGN IN
                            </Link>
                            )
                    }
                    
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    );
}

export default Navigation;