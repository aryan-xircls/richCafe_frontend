import React from 'react';
import { Card, CardBody, Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { CartList } from '../components/SmallComponents';

export default function Cart(props) {
  const { modal, toggle } = props;


  return (
    <div className='custom-modal-right'>
      <Modal size="xl" isOpen={modal} toggle={toggle} className='right' centered={false} backdrop={false} fade={true}>
        <ModalHeader toggle={toggle} className='d-flex'> <h4 className=''> Coffee Bag </h4></ModalHeader>
        <ModalBody className='p-5' >
          <Row >
            <Col md="7">
              <Card style={{ minHeight: "350px", maxHeight: "500px", overflow: "auto" }} className='border-0'>
                <CardBody className='' >
                  <div className="d-flex flex-column gap-3">

                    <CartList />
                    <CartList />
                    <CartList />
                    <CartList />
                    <CartList />
                    <CartList />
                    <CartList />
                    <CartList />
                    <CartList />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="5" className=''>
              <Card style={{ minHeight: "350px" }} className='border-0'>
                <CardBody className='bg-brown-light   position-relative' >

                  <div className='mt-3 px-3 d-flex flex-column gap-2'>

                    <div className='d-flex justify-content-between'>
                      <h6 className="fw-normal" style={{ fontSize: "18px" }}>Total Items Cost</h6>
                      <h6 className="fw-normal" style={{ fontSize: "18px" }}>357</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <h6 className="fw-normal" style={{ fontSize: "18px" }}>Tax GST</h6>
                      <h6 className="fw-normal" style={{ fontSize: "18px" }}>357</h6>
                    </div>
                    <hr />
                    <div>
                      <div className='d-flex justify-content-between'>
                        <h6 className="fw-normal" style={{ fontSize: "18px" }}>Discount</h6>
                        <h6 className="fw-normal" style={{ fontSize: "18px" }}>-357</h6>
                      </div>
                      <div className='d-flex py-2'>
                        <input type="text" class="form-control rounded-0 " placeholder="Apply Counpon"  />
                        {/* <button className='btn btn-primary rounded-0 ' style={{width:"100px"}}>X</button> */}
                        <button className='btn btn-primary rounded-0 ' style={{width:"100px"}}>Apply</button>
                      </div>
                      <div className='d-flex justify-content-between mt-1'>
                        <h6 className="fw-normal" style={{ fontSize: "18px" }}>Applied discount</h6>
                        <h6 className="fw-normal" style={{ fontSize: "18px" }}>-357</h6>
                      </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                      <h6 className="fw-normal" style={{ fontSize: "18px" }}>Total Payable Amount</h6>
                      <h6 className="fw-normal" style={{ fontSize: "18px" }}>-357</h6>
                    </div>
                  </div>

                  <hr className='' />
                  <button className='btn btn-primary position-absolute bottom-0  rounded-1 fw-bold' style={{ width: "90%" }}>Buy Now</button>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </ModalBody>

      </Modal>
    </div>
  )
}
