import React from 'react'
import img1 from '../../Assets/bg.jpg'
export default function LowerFooter() {
  let year = new Date().getFullYear()
  return (
    <footer  style={{backgroundImage:`url(${img1})`}}>
    <div className="container" >
      <div className="row">
        <div className="col" style={{height:"10px"}} >
          <p className=" text-center text-white">&copy;{year}. All Rights Reserved.</p>
        </div>
      </div>
    </div>
    </footer>
  )
}