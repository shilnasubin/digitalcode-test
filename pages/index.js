import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Footer from './components/footer'
import Header from './components/header'
import AOS from 'aos';
import { useEffect } from "react";



export default function Home() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  
  return (
    <div>
      <Header/> 
      <div className="platform">
          <div className="description" data-aos="zoom-in">
              <h1><span>KMMRCE</span> is an enterprise level digital platform that provides a turnkey solution to online retailing.</h1>
              <button className="km-btn">Request Demo &gt;</button>
          </div>
          <div className="img-block">
              <div className="img-rotation"></div>
              <img src="speaker.png"/>
          </div>
      </div>
      <div className="sell-digital">
          <img src="1.png" className="img-1" data-aos="flip-up"></img>
          <img src="2.png" className="img-2" data-aos="flip-up"></img>
          <img src="3.png" className="img-3" data-aos="flip-up"></img>
          <img src="4.png" className="img-4" data-aos="flip-up"></img>
          <img src="5.png" className="img-5" data-aos="flip-up"></img>
          <img src="6.png" className="img-6" data-aos="flip-up"></img>
          <span data-aos="slide-up">Platform</span>
          <h2 data-aos="slide-up">Sell digital or physical inventory, with configurable or simple attributes, in a way that suits your business.</h2>
          <button className="km-white-btn" data-aos="slide-up">Explore the Platform ›</button>
      </div>
      <Footer/>
    </div>
  )
}
