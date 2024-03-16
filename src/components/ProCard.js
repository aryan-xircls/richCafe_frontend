import React, { useState } from 'react'
import { Heart, ShoppingBag } from 'react-feather'
import dummyImg from './img/dummyImg.png'

export default function ProCard({ data }) {
    const [Counter, setCounter] = useState(0)
    const [useML, setML] = useState(data.sizes[0])

    const add = () => {
        if (Counter < 10) {
            setCounter((prev) => prev + 1)
        }
    }
    const minus = () => {
        if (Counter >= 1) {
            setCounter((Counter - 1))
        }
    }
    return (
        <div className="procard_contaier">

            <div className='proCard  p-3'>

                <div className="imgBox">
                    <img src={data.img || dummyImg} alt={data.img ? "Product Image" : "Server Error"} />
                </div>

                <div className='like'>
                    <Heart color='white' size={15} />
                </div>
                <div className="details position-relative ">

                    <div className='d-flex mt-3'>
                        <h5 className="fs-  w-75" style={{ fontSize: "18px" }}>{data.name}</h5>
                        <h5 className="rs  w-25  text-end">₹ {data.price}</h5>
                    </div>
                    <p className=' fw-lig lh-sm  mb-0 text-secondary' style={{ fontSize: '11px', height: '25px' }}>{data.description}</p>
                    <div className='d-flex justify-content-between align-items-center position-absolute bottom-0 mb-4 w-100 '>
                        <div className='d-flex align-items-center justify-content-start gap-1 '>
                            {
                                data.sizes.map((size) => {
                                    return (<h6 onClick={() => setML(size)} className={`ml ${useML === size && 'active'}`}>{size} </h6>)
                                })
                            }

                        </div>
                        <div >
                            {
                                Counter === 0 && <button onClick={add} className='btn btn-primary btn-sm px-3 rounded  ' style={{ color: "#171717", fontWeight: "500" }}><ShoppingBag color="white" size={18} /></button>
                                // Counter === 0 && <button onClick={add} className='btn btn-primary btn-sm px-3  ' style={{color:"#171717", fontWeight:"500"}}>Add to bag</button>
                            }
                            {
                                Counter > 0 && <div className='d-flex'>
                                    <button onClick={minus} className='btn btn-primary btn-sm px-3 text-white'>-</button>
                                    <div className=' btn-sm px-3'>{Counter}</div>
                                    <button onClick={add} className='btn btn-primary btn-sm px-3 text-white'>+</button>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
