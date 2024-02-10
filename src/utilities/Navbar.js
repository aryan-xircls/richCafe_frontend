import React from 'react'
import { Coffee, Heart, ShoppingBag } from 'react-feather'
import { Container } from 'reactstrap'

export default function Navbar() {
    return (
        <div className='bg-brown position-fixed d-flex justify-content-center w-100 text-white' style={{zIndex:'999'}}>
            <Container className=' py-3 d-flex align-items-center  justify-content-between  '>
                <div className='d-flex align-items-center gap-2'>
                    {/* <img src="" alt="" /> */}
                    <Coffee size={30} color='white' />
                    <h3 className='ff-1 text-white fw-bol m-0'>RichCafe</h3>
                </div>

                <div className='d-flex gap-2'>
                    <div className="menuItem border py-1 px-3">Home</div>
                    <div className="menuItem border py-1 px-3">Coffee</div>
                    <div className="menuItem border py-1 px-3">About</div>
                </div>
                <div className='d-flex gap-2'>
                    <div className="menuItem  py-1 px-1 "><ShoppingBag size={23} /></div>
                    <div className="menuItem  py-1 px-1 "><Heart size={23} /></div>
                    <div className="menuItem border py-1 px-3">Login</div>
                </div>
            </Container>
        </div>
    )
}
