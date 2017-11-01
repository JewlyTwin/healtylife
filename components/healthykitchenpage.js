import React from 'react'
import Link from 'next/link'
import Footer from '../components/footer'

const healthykitchenpage = () => (

<div>
<div className = "container">
<p className = "fontcolorgrey fontsize-45px Akrobat">Healthy Kitchen</p>
<br className = "color-blue"/>
    <div className="row">
        <div className="col-xs-12 col-lg-4">
            <img className = "fit2" src = "../static/img/ซาลาเปาไส้กุ้งสับ.jpg " width = "320px" height = "280px"/>
            <br/><br/>
            <p className = "Nithan  fontsize-30px">ซาลาเปากุ้งสับ
            <Link prefetch href="../pages/kitchen/steambuns.js">
            <button type="button" className="btn right Nithan color-button">view more</button>
            </Link>
            </p>
            
        </div>
        <div className="col-xs-12 col-lg-4">
            <img className = "fit2" src = "../static/img/ไก่อบผลไม้.jpg" width = "320px" height = "280px"/>
            <br/><br/>
            <p className = "Nithan fontsize-30px">ไก่อบผลไม้
            <Link prefetch href="../pages/kitchen/steakchicken.js">
            <button type="button" className="btn pull-right Nithan color-button">view more</button>
            </Link>
            </p>

        </div>
        <br/><br/>
        <div className="col-xs-12 col-lg-4">
            <img className = "fit2" src = "../static/img/ข้าวไรท์เบอรี่มูน+มะม่วงน้ำดอกไม้.jpg" width = "320px" height = "280px"/>
            <br/><br/>
            <p className = "Nithan fontsize-30px">ข้าวไรท์เบอรี่มูน+มะม่วงน้ำดอกไม้
            <Link prefetch href="../pages/kitchen/riceberry+mango.js">
            <button type="button" className="btn pull-right Nithan color-button">view more</button>
            </Link>
            </p>

        </div>
    </div>
    <br/><br/>
    <div className="row">
        <div className="col-xs-12 col-lg-4">
            <img className = "fit2" src = "../static/img/bananamuffin.png" width = "320px" height = "280px"/>
            <br/><br/>
            <p className = "Nithan fontsize-30px">เค้กกล้วยหอม (คลีน 90%)
            <Link prefetch href="../pages/kitchen/bananamuffin.js">
            <button type="button" className="btn pull-right Nithan color-button">view more</button>
            </Link>
            </p>
        </div>
        <div className="col-xs-12 col-lg-4">
            <img className = "fit2" src = "../static/img/กล้วยหอมท็อปปิ้ง.jpg" width = "320px" height = "280px"/>
            <br/><br/>
            <p className = "Nithan fontsize-30px">กล้วยหอมท็อปปิ้งธัญพืช
            <Link prefetch href="../pages/kitchen/bananatopping.js">
            <button type="button" className="btn pull-right Nithan color-button">view more</button>
            </Link>
            </p>
        </div>
        <div className="col-xs-12 col-lg-4">
            <img className = "fit2" src = "../static/img/ดอลลี่อบไส้ผลไม้.jpg" width = "320px" height = "280px"/>
            <br/><br/>
            <p className = "Nithan fontsize-30px">ดอลลี่อบไส้ผลไม้
            <Link prefetch href="../pages/kitchen/dolly.js">
            <button type="button" className="btn pull-right Nithan color-button">view more</button>
            </Link>
            </p>
        </div>
    </div>
</div>
<Footer/>
</div>
)

export default healthykitchenpage