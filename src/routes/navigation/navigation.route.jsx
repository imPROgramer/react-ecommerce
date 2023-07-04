import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import './navigation.styles.scss';

import { ReactComponent as Logo} from '../../assests/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext} from '../../context/user.context';
import { signOutUser } from "../../utils/firebase.utils";
import CartDropdown from "../../components/cart-icon/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

function Navigation(){

    const {currentUser} = useContext(UserContext);
    const {isOpen} = useContext(CartContext);

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
                    <Link className="nav-link" to='/contact'>
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
                    <CartIcon/>
                </div>

                { isOpen && <CartDropdown/>}
            </div>
            <Outlet></Outlet>
        </Fragment>
    );
}

export default Navigation;