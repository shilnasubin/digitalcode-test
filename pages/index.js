import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Footer from './components/footer'
import Header from './components/header'

export default function Home() {
  return (
    <div>
      <Header/> 
      <div className="platform">
          
      </div>
      <Footer/>
    </div>
  )
}
