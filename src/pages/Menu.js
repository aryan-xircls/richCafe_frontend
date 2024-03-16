import React from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'react-feather'
import { Col, Container, Row } from 'reactstrap'
import { CatgCard } from '../components/SmallComponents'
import bg2 from './img/bg2.png'
import ProCard from '../components/ProCard'
import { catgData, dummyProducts } from '../data'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Menu() {
  return (
    <div>
      <div className=' d-flex justify-content-center align-items-center py-5'  >
        <Container className='bg-brown-light2 mt-5 rounded-3 px-5 py-2'>
          <Row className=' justify-content-between  align-items-center flex-column-reverse flex-md-row' >
            <Col md="6">
              <h1 className='display-5 ff-1 text-brown fw-bolder '>Awaken Your Senses with Our Coffee</h1>
              <div>
                <button className='btn btn-lg btn-brown text-white d-flex  px-5 mt-4'> <p className='m-0'>Order Now</p> <div className='ms-2'><ArrowUpRight size={25} /></div></button>
              </div>
            </Col>
            <Col md="6" className=' d-flex justify-content-center align-items-center' >
              <img src={bg2} style={{ maxWidth: "400px" }} alt="" />
            </Col>
          </Row>
          <div></div>
        </Container>
      </div>

      {/* category */}
      <Container className='mt-5'>
        <div className='d-flex justify-content-between '>

          <h3 className='ff-1'>Handcrafted Curations</h3>
          <div className='d-flex  gap-3'>
            <div className="swiper-button swiper-button-prev2 center "><ChevronLeft /> </div>
            <div className="swiper-button swiper-button-next2 center "><ChevronRight /> </div>
          </div>
        </div>
        <div className='d-flex flex-wrap justify-content-center justify-content-md-start flex-grow-1  gap-5 mt-3'>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={5}
            navigation={{
              nextEl: '.swiper-button-next2',
              prevEl: '.swiper-button-prev2',
              clickable: true, // Allow clicking on the navigation buttons
            }}
          >


            {
              catgData.map((data) => {
                return (<SwiperSlide><CatgCard data={data} /></SwiperSlide>)
              })
            }
          </Swiper>


        </div>
      </Container>


      {/* products */}
      <Container className='mt-100'>
        <h3 className='ff-1'>Espresso</h3>
        <div className='d-flex flex-wrap justify-content-center justify-content-md-start flex-grow-1  gap-3 mt-3'>
          {
            dummyProducts.map((data) => {
              return (<ProCard data={data} />)
            })
          }
        </div>
      </Container>
    </div>
  )
}
