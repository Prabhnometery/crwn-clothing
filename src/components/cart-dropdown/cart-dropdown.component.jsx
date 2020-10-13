import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GOT TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;

