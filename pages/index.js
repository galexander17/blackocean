import Head from 'next/head'
import Link from 'next/link'
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainWrapper">
        <h1 className="title">
          Welcome to <a href="https://blackocean.us">Black Ocean!</a>
        </h1>

        <p className="description">
         Creating websites, and your brand.
        </p>
        <Link href="/About">
          <p>
            I develop your website, and your company's brand identity. Let's talk! 
          </p>
        </Link>
      </main>
    </div>
  )
}