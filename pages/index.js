import Head from 'next/head'
import Link from 'next/link'
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="containerMain">
      <Head>
        <title>Black Ocean Studios</title>
        <link rel="icon" href="/squid.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="navbar">
        <ul>
          <li><a href="/About">ABOUT</a></li>
          <li><a href="/Services">RESUME</a></li>
          <li><a href="/Portfolio">PORTFOLIO</a></li>
          <li><a href="/Contact">CONTACT</a></li>
        </ul>
      </div>
      <div className="containerMainElements">
          <h1 className="title">
            Welcome to<br></br>Black Ocean Studios
          </h1>
          <p className="description">
            We transform your ideas into reality through cutting edge design.<br></br><br></br>
            The world is filled with uncertainty, a black ocean: we help you navigate the murky waters and discover your voice, your website, your app.<br></br><br></br>
            Ready to dive in?
          </p>
          <button class="btnLearnMore"><span>LEARN MORE</span></button>
      </div>
    </div>
  )
}
