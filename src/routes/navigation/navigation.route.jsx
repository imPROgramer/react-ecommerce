import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Logo} from '../../assests/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext} from '../../context/user.context';
import { signOutUser } from "../../utils/firebase.utils";
import CartDropdown from "../../components/cart-icon/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

// import './navigation.styles.scss';

import { NavigationContainer, 
        LogoContainer,
        NavLinks,NavLink } from "./navigation.styles";

function Navigation(){

    const {currentUser} = useContext(UserContext);
    const {isOpen} = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo></Logo>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    <NavLink to='/contact'>
                        CONTACT
                    </NavLink>
                    {
                        currentUser? (
                            <NavLink as='span' onClick={signOutUser}>
                                SIGN OUT
                            </NavLink>)
                            :(
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                            )
                    }
                    <CartIcon/>
                </NavLinks>

                { isOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet></Outlet>
        </Fragment>
    );
}

export default Navigation;