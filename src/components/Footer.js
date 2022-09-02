import React from 'react'
import '../App.css';

function Footer() {
  return (
    <div>
        <footer className='text-white py-4 main-footer'>
            <div className="ant-col txt-white txt-center pb-10 ant-col-xs-24 ant-col-md-24 ant-col-lg-24">
              Created With Love by Felipe Martinez
              <img src="./images/dlatam.png" alt="Fotter" className='mx-2' />
            </div>
        </footer>
    </div>
  )
}

export default Footer