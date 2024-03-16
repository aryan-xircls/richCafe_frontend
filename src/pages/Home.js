import React from 'react'
import { ArrowUpRight } from 'react-feather'
import { Col, Container, Row } from 'reactstrap'
import HeroImg from './img/heroImg.png'
import { CatgCard } from '../components/SmallComponents'
import ProCard from '../components/ProCard'
import Cart from './Cart'
import { catgData, dummyProducts } from '../data'
export default function Home() {
  return (
    <div>
      <div className='bg-grey-dark d-flex justify-content-center align-items-center py-5'  >
        <Container className=' mt-5'>
          <Row className=' justify-content-between  align-items-center flex-column-reverse flex-md-row' >
            <Col md="6">
              <h1 className='display-4 ff-1 text-white fw-bolder '>Awaken Your Senses with Our Coffee</h1>
              <h5 className='  text-white  fw-lighter mt-4'>Welcome to [RichCafe], where every sip tells a story. We invite you to embark on a journey through the rich and diverse world of coffee, where passion meets perfection.</h5>
              <div>
                <div className='hero-btn fs-6 mt-5'> <p>Order Now</p> <div><ArrowUpRight size={15} /></div></div>
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
        <div className='d-flex flex-wrap justify-content-center justify-content-md-start flex-grow-1  gap-5 mt-3'>
          {
            catgData.map((data) => {
              return (<CatgCard data={data} />)
            })
          }
        </div>
      </Container>




      <div className='hero2 bg-grey-dark  d-flex justify-content-center align-items-center py-5 mt-100'  >
        <Container className=' py-5'>
          <Row className=' justify-content-between  align-items-center flex-column-reverse flex-md-row' >
            <Col md="6" className=' d-flex justify-content-center align-items-center' >
              <Row className='gy-2'>
                <Col md="12" className=''>
                  <div className='imgBox' >
                    <img src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100501.webp" alt="" />
                  </div>
                </Col>
                <Col md="6" className=''>
                  <div className='imgBox' >
                    <img src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100501.webp" alt="" />
                  </div>
                </Col>
                <Col md="6" className=''>
                  <div className='imgBox' >
                    <img src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100501.webp" alt="" />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <h1 className='display-6 ff-1 text-white  '>Indulge in Our Morning Delights</h1>
              <h6 className='  text-white  fw-lighter mt-4'>Savor the perfect morning with our artisanal coffee, freshly baked toast, and aromatic teas. Delight in a harmonious blend of flavors that kick-start your day with a touch of indulgence.</h6>
              <div>
                <div className='hero-btn fs-6 mt-4'> <p>Explore Menu</p> <div><ArrowUpRight size={15} /></div></div>
              </div>
            </Col>

          </Row>
          <div></div>
        </Container>
      </div>


      {/* products */}
      <Container className='mt-100'>
        <h3 className='ff-1'>Latest </h3>
        <div className='d-flex flex-wrap justify-content-center justify-content-md-start flex-grow-1  gap-3 mt-3'>
          {
            dummyProducts.slice(0, 4).map((data) => {
              return (<ProCard data={data} />)
            })
          }
        </div>
      </Container>
    </div>
  )
}
