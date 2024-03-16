import React, { useState } from 'react'
import { Coffee, Heart, ShoppingBag } from 'react-feather'
import { Container } from 'reactstrap'
import './navbar.scss'
import Cart from '../pages/Cart';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [useActiveMenu, setActiveMenu] = useState('home');

    return (
        <div className='bg-grey-dark position-fixed d-flex justify-content-center w-100 text-white' style={{ zIndex: '999' }}>
            <Container className=' py-3 d-flex align-items-center  justify-content-between  '>
                <div className='d-flex align-items-center gap-2'>
                    {/* <img src="" alt="" /> */}
                    <Coffee size={30} color='white' />
                    <h3 className='ff-1 text-white fw-bol m-0'>RichCafe</h3>
                </div>

                <div className='d-flex gap-2'>
                    <NavLink to='/' className="menuItem  py-1 px-3">Home</NavLink>
                    <NavLink to='/menu' className="menuItem  py-1 px-3">Menus</NavLink>
                    <div className="menuItem  py-1 px-3">About</div>
                </div>
                <div className='d-flex gap-2'>
                    <div className="menuItem notify_con  py-1 px-1 " onClick={toggle}><div className='notify_count'>1</div><ShoppingBag size={23} /></div>
                    <div className="menuItem  py-1 px-1 "><Heart size={23} /></div>
                    <div className="menuItem active  py-1 px-3">Login</div>
                </div>
            </Container>
            <Cart modal={modal} toggle={toggle} />
        </div>
    )
}
