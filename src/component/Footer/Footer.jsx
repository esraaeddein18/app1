import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
  return (
<footer className={styles.foot}>
  <div className="row p-5 px-5 mb-5 ">
  <div className="col-md-4">
        <h2>LOCATION</h2>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
    </div>
    <div className="col-md-4">
        <h2>AROUND THE WEB</h2>
        <div className="icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-globe"></i>
        </div>
    </div>
    <div className="col-md-4">
    <h2>ABOUT FREELANCER</h2>
    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
  </div>
    
    <div className={styles.copy}>Copyright © Your Website 2021</div>
        
</footer>
  )
}


