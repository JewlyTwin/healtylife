import React from 'react'
import Link from 'next/link'

const newupdate = () => (

<div className = "container">
<img width = "350px" src = "../static/img/newupdate.png"/>
    <div className="row center">
        <div className="col-xs-12 col-lg-4">
            <Link prefetch href="../pages/fact/factchilli.js">
            <img className = "fit" src = "../static/img/พริก(topic).jpg " width = "320px"/>
            </Link>
            <Link prefetch href="../pages/fact/factchilli.js">
            <a className = "Nithan fontsize-30px">พริกเล็ก แต่ประโยชน์ไม่เล็ก</a>
            </Link>
        </div>
        <div className="col-xs-12 col-lg-4">
            <Link prefetch href="../pages/fact/factorganic.js">
            <img className = "fit" src = "../static/img/ออร์แกนิก(topic).jpg" width = "320px"/>
            </Link>
            <Link prefetch href="../pages/fact/factorganic.js">
            <a className = "Nithan fontsize-30px">ผลิตภัณฑ์ออแกนิกคืออะไร ?</a>
            </Link>
        </div>
        <div className = "col-xs-12 col-lg-4">
                <Link prefetch href="../pages/fact/facthungry.js">
            <img className = "fit" src = "../static/img/หิวบ่อย(topic).jpg" width = "320px"/>
            </Link>
            <Link prefetch href="../pages/fact/facthungry.js">
            <a className = "Nithan fontsize-30px">หิวบ่อยมาจากสาเหตุอะไร ?</a>
            </Link>
        </div>
    </div>
</div>



)
 
export default newupdate