import React from 'react'
import tv from '../../src/componet/image/icons/apple-tv-logo.png'

function Rightside() {
  return (
    <div>
        
<section className="threedsection container-fluid m-2">

<div className="owterwrapr row">
    <div className="leftside5 col-sm-12 col-lg-5 m-2">

        <div className="logo">
            <img src={tv} alt=""/>

        </div>

        <div className="descrption">
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
    {/* <!-- ..............................right side --> */}
    <div className="rightside6 col-sm-12 col-lg-6 m-2">

        <div className="logo">
             <img src={tv} />

        </div>

        <div className="descrption">
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

export default Rightside
