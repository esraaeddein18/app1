import React from 'react'
import styles from './About.module.css'
export default function About() {
  return (
    <>
        <div className={styles.about}>
        <div className="container">
            <h1 class={styles.text}>ABOUT COMPONENT</h1>
            <div class={styles.flex}>
                <div class ={styles.brd}></div>
                <div class ={styles.brd}></div>
            </div>
            <div className="row px-5">
                <div className="col-md-5 w-50">
                <p class="mb-5">Freelancer is a free bootstrap theme created by Route. The download includes
                    the complete source files including HTML, CSS, and JavaScript as well as 
                    optional SASS stylesheets for easy customization.
                </p>
                </div>
                <div className="col-md-5 ">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the 
                        complete source files including HTML, CSS, and JavaScript as well as optional 
                        SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
        </div>
        

    </>
  )
}
