import React from 'react'
import wcthseries from '../../src/componet/image/icons/watch-series5-logo.png'
import applecard from '../../src/componet/image/icons/apple-tv-logo.png'

function Leftwrapr() {
  return (
    <div>
          <section class="threedsection2 container-fluid  m-2">

<div class="owterwrapr row">
    <div class="leftside col-sm-12 col-lg-5 m-2">

        <div class="logo">
            <img src={wcthseries} alt=""/>

        </div>

        <div class="descrption">
            With the new Always-On Retina display.<br/>
                    You’ve never seen a watch like this.

        </div>

       <div className="Linksright  text-center row">
            <div className="lernmoreleft  col-lg-6 col-sm-6">
                <li><a href="">LearnMore</a></li>

            </div>
            <div className="lernmoreleft col-lg-6 col-sm-6">
                <li><a href="">Buy</a></li>

            </div>
        </div>
      


    </div>
    {/* <!-- ..............................right side --> */}
    <div class="rightside col-sm-12 col-lg-5 m-2">
        

        <div class="logo">
            <img src={applecard} alt=""/>
            

        </div>

        <div class="descrption">
            With the new Always-On Retina display.<br/>
                    You’ve never seen a watch like this.

        </div>

        <div className="Linksleft " >
        <div className="lernmoreleft">
            <li><a href="">LearnMore</a></li>

        </div>
        
        <div className="lernmoreleft">
            <li><a href="">Buy</a></li>

        </div>
    </div>


    </div>

</div>

</section>
      
    </div>
  )
}

export default Leftwrapr
