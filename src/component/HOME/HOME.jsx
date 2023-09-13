import React from 'react'
import img from '../../Assets/images/avataaars.png'
import style from  './Hme.module.css'
export default function HOME() {
  return (


        <div className={style.home}>
            <img src={img} alt=''/>
            <h2 className={style.name}>START FRAMEWORK </h2>
            <div class={style.flex}>
                <div class ={style.brd}></div>
                <div class ={style.brd}></div>
            </div>
            <p className={style.p}>Graphic Artist - Web Designer - Illustrator</p>
        </div>


  )
}
