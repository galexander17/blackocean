import Head from 'next/head'
import Link from 'next/link'
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="containerMain">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="navbar">
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Studio</li>
          <li>Contact</li>
          <li>Merchandise</li>
        </ul>
        <image>
      
        </image>
      </div>
      <div className="mainWrapper">
        <h1 className="title">
          Welcome to <a href="https://blackocean.us">Black Ocean!</a>
        </h1>

        <p className="description">
         Developing websites, and your brand.
        </p>
        <Link href="/About">
          <p className="linkDescription" >
            I develop your website, and your company's brand identity. Let's talk! 
          </p>
        </Link>
      </div>
    </div>
  )
}
