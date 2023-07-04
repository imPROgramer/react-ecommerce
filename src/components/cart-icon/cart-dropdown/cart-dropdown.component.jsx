import './cart-dropdown.styles.scss';

import Button from '../../button/button.component';

function CartDropdown(){
    return (
        <div className='cart-dropdown-container'>
            <span className='empty-message'></span>
            <div className='cart-items'></div>
            <Button buttonType="inverted">Go To Checkout</Button>
        </div>
    )
}

export default CartDropdown;

