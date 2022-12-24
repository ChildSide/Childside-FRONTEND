import React from 'react'
import './donate.scss'
const Donate = () => {
  return (
    <div className="page" style={{height:'92vh'}}>

        <div style={{height:'20px'}}></div>
      <div className="align-middle container cont">
        <h1 className="heading-one">
          Your Empathy and Support is Already more than what we Need.
        </h1>
        <p className='text-white'>
          Every day we bring hope to millions of children in the world's hardest places as a sign of God's unconditional love.
        </p>

        <div className='d-flex justify-content-center align-items-center gap-4 scan'>
          <div style={{ height: "40vh" }} className="img-scan">

            <img src={require('../../assets/paytm.jpeg')} alt="" width={"200px"} />
          </div>
          <button className='btn btn-success donate-btn btn-lg'>
            <a href={require("../../assets/qrcode.jpeg")} download="qrcode" style={{textDecoration:'none'}} className="text-white">
            Scan/Download to Donate
            </a>
            </button>
             {/* <img src={require('../../assets/study.jpeg')} className="w-25" alt="" />
            <img src={require('../../assets/study2.jpeg')} className="w-25" alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default Donate