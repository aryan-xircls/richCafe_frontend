import React from 'react'

export default function ProCard() {
    return (
        <div className="procard_contaier">

            <div className='proCard border p-3 '>

                <div className="imgBox border">
                    <img src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100501.webp" alt="" />
                </div>
                <div className="details">

                    <div className='d-flex mt-3'>
                        <h5 className="title  w-75">Espresso cofeecofe ecofee</h5>
                        <h5 className="rs  w-25 ">Rs. 350</h5>
                    </div>
                    <p className=' fw-light lh-sm  mb-0 ' style={{ fontSize: '12px', height:'25px' }}>SHORT(Short Vienna Creamy Latte) .330 Kcal</p>
                    <div className='d-flex justify-content-between align-items-center mt-2 w-100 '>
                        <div className='d-flex align-items-center gap-2 '>
                            <h6 className='m-0 '>100ml </h6>
                            <h6 className='m-0 text-secondary fw-light '>200ml </h6>
                            <h6 className='m-0 text-secondary fw-light'>300ml </h6>
                        </div>
                        <div >
                            <button className='btn btn-primary btn-sm px-3'>Add to bag</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
