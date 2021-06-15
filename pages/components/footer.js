import React from 'react'
import styles from '../../styles/Footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <img src="icon.svg"></img>
                </div>
                <div className={styles.right}>
                <ul>
                    <li>
                        <h6>Product</h6>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Tech Stack</a></li>
                            <li><a href="#">super Merchants</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h6>About Us</h6>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">sectors</a></li>
                            <li><a href="#">careers</a></li>
                            <li><a href="#">contact</a></li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h6>Doore</h6>
                        <ul>
                            <li><a href="#">Voluptate</a></li>
                            <li><a href="#">Cilum</a></li>
                            <li><a href="#">Pariatur</a></li>
                            <li><a href="#">Nulla</a></li>
                            <li><a href="#">Irure</a></li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h6>Tertiary</h6>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Homterms & Conditions</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                        </ul>
                    </li>
                </ul>
             </div>
             </div>
             <div className={styles.bottom}>
                <p className={styles.left}>© Kmmrce</p>
                <p className={styles.left}>Site By Six</p>
             </div>
        </div>
    )
}
