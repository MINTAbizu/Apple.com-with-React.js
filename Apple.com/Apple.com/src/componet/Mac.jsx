import React from 'react'
import '../componet/style.css'
import mac from '../../src/componet/image/home/macbook-pro.jpg'
function Mac() {
  return (
    <div>
        {/* <!-- home section --> */}

<section className="macpro11 container-fluid">
    <div className="internalwrapr row">
        <div className="model text-center">
            <h1>16 inch model</h1>

        </div>
        <div className="title text-center" >
            <h2>MAc Book Pro</h2>
            

        </div>
        <div className="descrption text-center">
            <h2>the best for the brightest</h2>
        </div>
       
        <div className="mackbookimage text-center">
            <img src={mac} alt=""/>
        </div>

        <div className="Links  text-center row">
            <div className="lernmore  col-lg-6 col-sm-6">
                <li><a href="">LearnMore</a></li>

            </div>
            <div className="Buy col-lg-6 col-sm-6">
                <li><a href="">Buy</a></li>

            </div>
        </div>

    </div>

</section>
      
    </div>
  )
}

export default Mac
