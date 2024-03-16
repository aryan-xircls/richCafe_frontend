import React, { useState } from 'react';
import { Trash } from 'react-feather';
import { Button, Modal, ModalFooter, ModalHeader } from 'reactstrap';

export const CatgCard = ({data}) => {
  return (
    <div className='catgCard  p-1 text-center'>
      <div className="imgBox">
        <img src={data.img} alt="" />
      </div>
      <h5 className='mt-2'>{data.name}</h5>
    </div>
  )
}
export const CartList = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div className='d-flex align-items-center  border-0 position-relative bg-brown-light border shadow-sm rounded-1 ' >

      <div className=' rounded-2 ' style={{ width: "130px", height: "80px" }}>
        <img style={{ width: "100%", height: "100%" }} className='object-fit-cover rounded-2 ' src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100501.webp" alt="" />
      </div>
      <div className='p-2 ps-3'>
        <h6 className="fw-normal" style={{ fontSize: "18px" }}>Espresso cofee cofe ecofee</h6>
        <div className='d-flex   gap-3 mt-1'>
          <h6 className='fs-7 fw-normal m-0'>Qty : 200ml x 3</h6>
        </div>
        <h6 className='mt-2'>Rs 359</h6>
      </div>
      <Trash onClick={toggle} size={18} className='pointer position-absolute top-0 end-0 mt-3 me-4 hover-grey-red' />
      <ConfirmModal modal={modal} toggle={toggle}/>
    </div>
  )
}


export const ConfirmModal = (props) => {
  const { modal, toggle } = props;

  return (
    <Modal  isOpen={modal} toggle={toggle}  centered={true} backdrop={true} fade={false}>
      <ModalHeader toggle={toggle} className='d-flex border-0'> <h4 className=''> Are you sure want to delete coffee </h4></ModalHeader>
      <ModalFooter>
          <button className='btn me-2' color="secondary" onClick={toggle}>
            No
          </button>
          <Button color="btn btn-primary text-white px-4" onClick={toggle}>
            Yes
          </Button>
        </ModalFooter>
    </Modal>
  )
}

