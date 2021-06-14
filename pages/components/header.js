
import React from 'react';
import styles from '../../styles/Header.module.scss'
export default function Header() {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.navbar_header}>
                    <a className={styles.navbar_brand} href="#">KMMRCE</a>
                </div>
                <ul className={styles.navbar_items}>
                    <li className={styles.active}><a href="#">Platform</a></li>
                    <li><a href="#">Super Merchants</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Docs</a></li>
                </ul>
                <div className={styles.navbar_right}>
                    <a className={styles.navbar_btn} href="#">Request Demo</a>
                </div>
            </div>
        </div>
    )
}
