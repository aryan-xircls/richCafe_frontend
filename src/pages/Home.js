import React from 'react'
import { ArrowUpRight } from 'react-feather'
import { Col, Container, Row } from 'reactstrap'
import HeroImg from './img/heroImg.png'
import CatgCard from '../components/CatgCard'
import ProCard from '../components/ProCard'
export default function Home() {
  return (
    <div>
      <div className='bg-brown d-flex justify-content-center align-items-center py-5'  >
        <Container className=' mt-5'>

          <Row className=' justify-content-between  align-items-center flex-column-reverse flex-md-row' >
            <Col md="6">
              <h1 className='display-4 ff-1 text-white fw-bolder '>Awaken Your Senses with Our Coffee</h1>
              <h5 className='  text-white  fw-lighter mt-4'>Welcome to [RichCafe], where every sip tells a story. We invite you to embark on a journey through the rich and diverse world of coffee, where passion meets perfection.</h5>
              <div>
                <div className='hero-btn fs-6 mt-4'> <p>Order Now</p> <div><ArrowUpRight size={15} /></div></div>
              </div>
            </Col>
            <Col md="6" className=' d-flex justify-content-center align-items-center' >
              <img src={HeroImg} alt="" />
            </Col>
          </Row>


          <div></div>
        </Container>
      </div>


      {/* category */}
      <Container className='mt-100'>
        <h3 className='ff-1'>Handcrafted Curations</h3>
        <div className='d-flex  gap-5 mt-3'>
          <CatgCard />
          <CatgCard />
          <CatgCard />
          <CatgCard />
          <CatgCard />
        </div>
      </Container>


        {/* products */}
        <Container className='mt-100'>
        <h3 className='ff-1'>Latest Offerings</h3>
        <div className='d-flex  gap-5 mt-3'>
          <ProCard />
          <ProCard />
          <ProCard />
          <ProCard />
        </div>
      </Container>
    </div>
  )
}
