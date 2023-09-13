import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark py-4">
    <Link class={styles.brand} to="#">START FRAMEWORK</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="item text-white d-flex gap-5 mx-auto fw-bold">
        <Link class={styles.btn} to="ABOUT">ABOUT</Link>
        <Link class={styles.btn} to="PORTFOLIO">PORTFOLIO</Link>
        <Link class={styles.btn} to="CONTACT">CONTACT</Link>
      </div>
    </div>
  </nav>
  )
}
