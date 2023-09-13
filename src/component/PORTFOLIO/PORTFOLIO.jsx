import React from 'react'
import img1 from '../../Assets/images/poert1.png'
import img2 from  '../../Assets/images/port2.png'
import img3 from '../../Assets/images/port3.png'
import styles from './PORTFOLIO.module.css'

export default function Portfolio() {
  return (
    <>
    <div className="container p-5">
    <h2 className={styles.port}>PORTFOLIO COMPONENT</h2>
      <div className="brd"></div>
      <div class={styles.flex}>
                <div class ={styles.brd}></div>
                <i class="fa-solid fa-star"></i>
                <div class ={styles.brd}></div>
      </div>
      <div className="row gy-5 gx-5 mt-3">
          <div className="col-md-4">
            <div className={styles.layer}>
              
              <img src={img1 } alt="" width={330}/> 
              <div className={styles.icon}>
                <i className=''></i>
              </div>

            </div>
          </div>
          <div className="col-md-4">
            <div className={styles.layer}>
              <i className=''></i>
              <img src={img2 } alt="" width={330}/>
            </div>
          </div>
          <div className="col-md-4">
            <div className={styles.layer}>
              <i className=''></i>
              <img src={img3 } alt="" width={330}/>
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.layer}>
              <i className=''></i>
              <img src={img1 } alt="" width={330}/>
            </div>
          </div>
          <div className="col-md-4">
            <div className={styles.layer}>
              <i className=''></i>
              <img src={img2 } alt="" width={330}/>
            </div>
          </div>
          <div className="col-md-4">
            <div className={styles.layer}>
              <i className=''></i>
              <img src={img3 } alt="" width={330}/>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
