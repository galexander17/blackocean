import Head from 'next/head'
import Link from 'next/link'
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Black Ocean Studios</title>
        <link rel="icon" href="/squid.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="home">
        <div className="navbar">
          <ul>
            <li><a href="/About">ABOUT</a></li>
            <li><a href="/Services">RESUME</a></li>
            <li><a href="/Portfolio">PORTFOLIO</a></li>
            <li><a href="/Contact">CONTACT</a></li>
          </ul>
        </div>
        <div className="homeElements">
          <h1 className="titleA">
            Welcome to<br></br>Black Ocean Studios
          </h1>
          <p className="descriptionA">
            We transform your ideas into reality through cutting edge design.<br></br><br></br>
            The world is filled with uncertainty, a black ocean: we help you navigate the murky waters and discover your voice, your website, your app.<br></br><br></br>
            Ready to dive in?
          </p>
          <button class="btnA"><span>LEARN MORE</span></button>
        </div>
      </div>
      {/*End of home div*/}
      {/*Beginning of about div*/}
      <div class="about">
        <div class="aboutElements">
          <h1 class="titleB">
            Hi, I'm Gabriel
          </h1>
          <p class="descriptionB">
            I am a UI designer, with a focus on modern, simple & efficient websites, applications & identity systems.<br></br><br></br>
            My passion stems from capturing, captivating & converting customers through design.<br></br><br></br>
            The world is blooming with technology, pushing the boundaries of our imaginations. We must always stay ahead of the curve, and aim to innovate:<br></br><br></br>
            To venture into the black ocean.
          </p>
          <button class="btnB"><span>EXPLORE RESUME</span></button>
        </div>
      </div>
      {/*End of about div*/}
      {/*Beginning of portfolio div*/}
      <div class="projects">
        <div class="projectsElements">
          <h1 class="titleA">
            Projects
          </h1>
          <p class="descriptionA">
            Here is a collection of UI projects ranging from mobile apps, to web apps.<br></br><br></br>
            Hover over each project and click to expand.<br></br><br></br>
          </p>
        </div>
      </div>
      {/*End of about portfolio*/}
      {/*Beginning of contact div*/}
    </div>
  )
}
