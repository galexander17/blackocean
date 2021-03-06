import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="titleDiv">

        <p className="description">
       Welcome to the About page.
        </p>
        <Link href="/">
          <p>
            Go back to main page
          </p>
        </Link>
      </main>
    </div>
  )
}