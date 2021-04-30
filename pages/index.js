import Head from 'next/head'
import Link from 'next/link'
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="containerMain">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="navbar">
        <ul>
          <li><a href="/About">About</a></li>
          <li><a href="/Services">Services</a></li>
          <li><a href="/Portfolio">Portfolio</a></li>
          <li><a href="/Studio">Studio</a></li>
          <li><a href="/Contact">Contact</a></li>
          <li><a href="/Merchandise">Merchandise</a></li>
        </ul>
        <image src="/public/Black Ocean Icon-Large-01.png" alt="image here"></image>
      </div>
        <div className="mainWrapper">
          <h1 className="title">
            Welcome to <br></br>Black Ocean
          </h1>
          <p className="description">
            Your ideas.<br></br>Your passion.<br></br>Your brand.<br></br>Brought to life.
          </p>
        </div>
    </div>
  )
}
