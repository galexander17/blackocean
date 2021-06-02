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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
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
        <img class="headshot" src="/Gabriel-Headshot.png" alt="Gabriel Headshot"></img>
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
          <div class="thumbnail">
            <img class="thumbnailImage" src="/synergy.png" alt="Synergy"></img>
              <div class="thumbnailOverlay">
                <div class="thumbnailText">S.T.A.H.L:<br></br>Synergy</div>
              </div>
          </div>
          <div class="thumbnail">
            <img class="thumbnailImage" src="/impulse.png" alt="Impulse"></img>
              <div class="thumbnailOverlay">
                <div class="thumbnailText">Impulse</div>
              </div>
          </div>
          <div class="thumbnail">
            <img class="thumbnailImage" src="/tabdat.png" alt="Tabdat"></img>
              <div class="thumbnailOverlay">
                <div class="thumbnailText">Tabdat</div>
              </div>
          </div>
      </div>
      {/*End of about portfolio div*/}
      {/*Beginning of contact div*/}
      <div class="contact">
        <div class="contactElements">
          <h1 class="titleB">
            Let's dive in!
          </h1>
          <p class="descriptionB">
            Interested in what you see?<br></br><br></br>
            Want to learn more about what I do?<br></br><br></br>
            Fill out the form, and I'll be in touch!<br></br><br></br>
            Connect with me on social media for sneak peaks on new projects!
          </p>
           {/*Beginning of social media icons, using SVG code direct from Adobe XD Prototype*/}
          <div class="socialMedia">
            <svg class="socialMediaIcons" id="Group_11" data-name="Group 11" xmlns="http://www.w3.org/2000/svg" width="74.403" height="74" viewBox="0 0 74.403 74">
              <g id="Group_33" data-name="Group 33">
                <path id="Path_10" data-name="Path 10" d="M2301.231,1702.8c-5.635,0-11.292.308-16.9-.065-10.867-.723-17.922-7.075-19.091-17.893a176.4,176.4,0,0,1-.02-37.295c1.142-10.9,8.052-17.144,19.031-17.953a216.472,216.472,0,0,1,34.967.065c11.019.974,17.753,7.791,18.686,18.777a217.794,217.794,0,0,1,.042,35.362c-.85,10.917-7.736,17.922-18.639,18.832-5.985.5-12.048.089-18.074.089Zm-29.7-36.97h-.123c0,4.719-.009,9.439.008,14.158,0,.916.085,1.834.169,2.748.751,8.132,4.725,12.63,12.842,13.293a209.032,209.032,0,0,0,33.792.022c8.479-.682,12.749-5.3,13.208-13.814a301.362,301.362,0,0,0,0-32.245c-.456-8.535-5.227-13.334-13.695-13.816a274.664,274.664,0,0,0-32.635.02c-8.632.537-13.055,5.257-13.513,13.909C2271.3,1655.329,2271.527,1660.584,2271.527,1665.827Z" transform="translate(-2264.24 -1628.916)" fill="#1a1a1a"/>
                <path id="Path_11" data-name="Path 11" d="M2306.124,1690.006A18.8,18.8,0,0,1,2287.5,1670.3a18.934,18.934,0,1,1,18.623,19.709Zm12.561-18.773a12.287,12.287,0,1,0-24.573-.133,12.287,12.287,0,0,0,24.573.133Z" transform="translate(-2269.174 -1633.83)" fill="#1a1a1a"/>
                <path id="Path_12" data-name="Path 12" d="M2335.433,1654.45c-2.75-.225-4.431-1.661-4.454-4.424-.022-2.788,1.625-4.361,4.42-4.347a3.877,3.877,0,0,1,4.235,4.108C2339.72,1652.572,2338.165,1654.075,2335.433,1654.45Z" transform="translate(-2278.401 -1632.473)" fill="#1a1a1a"/>
              </g>
            </svg>
            <svg class="socialMediaIcons" xmlns="http://www.w3.org/2000/svg" width="89.244" height="74" viewBox="0 0 89.244 74">
              <path id="Path_13" data-name="Path 13" d="M3371.527,1384.215c-1.586.5-3.192.946-4.8,1.381-.453.122-1.029.308-1.283-.278-.235-.539.385-.646.658-.9a18.628,18.628,0,0,0,4.417-6.011c.221-.5.722-1,.152-1.491a1.3,1.3,0,0,0-1.565.092,38.537,38.537,0,0,1-7.314,2.961c-1.724.61-2.766.18-4.1-.893-2.877-2.315-6-4.281-9.961-3.994a13.04,13.04,0,0,0-4.169.031c-.43-.392-.929-.2-1.392-.132-8.6,1.241-16.13,10.757-15.367,19.4.262,2.974.262,2.98-2.745,2.767a21.254,21.254,0,0,1-2.286-.255,52.547,52.547,0,0,1-30.933-17.156c-1.507-1.706-1.916-1.621-2.781.458a17.67,17.67,0,0,0-.767,12.836c1.051,3.075,2.316,6.109,5.176,8.07l.014.012c.046.471.739.833.386,1.312s-.9.129-1.349-.007a28.758,28.758,0,0,1-2.789-.89c-.7-.292-1.411-.95-2.1-.351-.634.549-.323,1.45-.189,2.19,1.232,6.8,4.731,11.916,11.122,14.86.36.166.923.146.873.7-.044.5-.568.524-.951.647a5.549,5.549,0,0,1-2.687-.087c-1.383-.229-2.022.01-1.312,1.651a18.961,18.961,0,0,0,9.461,9.83c1.958.953,4.107,1.233,6.405,2.08-7.764,5.578-16.311,7.6-25.556,7.47a38.354,38.354,0,0,0,14.084,6.495c14.49,3.553,28.526,2.218,41.249-5.788,16.679-10.5,24.957-26.032,25.354-45.718a3.777,3.777,0,0,1,1.576-3.335,34.866,34.866,0,0,0,6.533-6.717c.341-.449.684-1.008.23-1.491C3372.386,1383.5,3371.966,1384.076,3371.527,1384.215Z" transform="translate(-3283.795 -1374.874)" fill="#1a1a1a"/>
            </svg>
            <svg  class="socialMediaIcons" xmlns="http://www.w3.org/2000/svg" width="105.74" height="74" viewBox="0 0 105.74 74">
              <path id="Path_14" data-name="Path 14" d="M2782.668,1552.439q18.378,0,36.756,0c9.259-.008,16.1,6.623,16.14,15.843q.086,21.155-.016,42.309a15.505,15.505,0,0,1-15.7,15.839c-24.02.048-48.041-.109-72.061-.017-6.1.023-11.259-1.5-14.937-6.624a14.417,14.417,0,0,1-2.937-8.529c-.01-14.426-.116-28.853.015-43.277.081-8.945,7.046-15.526,15.979-15.52q18.379.012,36.757,0Zm-10.492,34.866q0,8.7,0,17.391c0,.632-.219,1.4.384,1.786.659.421,1.227-.255,1.712-.574,8.717-5.733,17.39-11.531,26.12-17.242,1.716-1.122,1.345-1.763-.1-2.709q-12.9-8.42-25.75-16.922c-.586-.387-1.139-1.209-1.854-.841-.826.425-.5,1.429-.5,2.2Q2772.162,1578.85,2772.176,1587.305Z" transform="translate(-2729.868 -1552.437)" fill="#1a1a1a"/>
            </svg>
            {/*End of social media icons, using SVG code direct from Adobe XD Prototype*/}
          </div>
        </div>
        <div class="contactForm">
          <form action="/action_page.php">
            <div class="input-icons">
              <input type="text" id="name" name="firstname" placeholder="Your name"></input>
              <input type="text" id="phone" name="phonenumber" placeholder="Your phone number"></input>
              <input type="text" id="email" name="emailaddress" placeholder="Your email address"></input>
              <textarea id="message" name="message" placeholder="Your message"></textarea>
            </div>
            <input class="btnB" type="submit" value="SUBMIT"></input>
          </form>
        </div>
      </div>
      {/*End of contact div*/}
      {/*Beginning of footer div*/} 
      <div class="footer">
        <div class="footerElements">
        <img class="footerImage" src="/Black Ocean-Horizontal Logo.png" alt="BlackOcean"></img>
          <p class="descriptionA">
            10280 NW 9th Street Cir<br></br>Miami, FL, 33172
          </p>
          {/*Beginning of social media icons, using SVG code direct from Adobe XD Prototype*/}
          <div class="socialMedia">
            <svg class="socialMediaIconsFooter" id="Group_11" data-name="Group 11" xmlns="http://www.w3.org/2000/svg" width="74.403" height="74" viewBox="0 0 74.403 74">
              <g id="Group_33" data-name="Group 33">
                <path id="Path_10" data-name="Path 10" d="M2301.231,1702.8c-5.635,0-11.292.308-16.9-.065-10.867-.723-17.922-7.075-19.091-17.893a176.4,176.4,0,0,1-.02-37.295c1.142-10.9,8.052-17.144,19.031-17.953a216.472,216.472,0,0,1,34.967.065c11.019.974,17.753,7.791,18.686,18.777a217.794,217.794,0,0,1,.042,35.362c-.85,10.917-7.736,17.922-18.639,18.832-5.985.5-12.048.089-18.074.089Zm-29.7-36.97h-.123c0,4.719-.009,9.439.008,14.158,0,.916.085,1.834.169,2.748.751,8.132,4.725,12.63,12.842,13.293a209.032,209.032,0,0,0,33.792.022c8.479-.682,12.749-5.3,13.208-13.814a301.362,301.362,0,0,0,0-32.245c-.456-8.535-5.227-13.334-13.695-13.816a274.664,274.664,0,0,0-32.635.02c-8.632.537-13.055,5.257-13.513,13.909C2271.3,1655.329,2271.527,1660.584,2271.527,1665.827Z" transform="translate(-2264.24 -1628.916)" fill="#E8E8E8"/>
                <path id="Path_11" data-name="Path 11" d="M2306.124,1690.006A18.8,18.8,0,0,1,2287.5,1670.3a18.934,18.934,0,1,1,18.623,19.709Zm12.561-18.773a12.287,12.287,0,1,0-24.573-.133,12.287,12.287,0,0,0,24.573.133Z" transform="translate(-2269.174 -1633.83)" fill="#E8E8E8"/>
                <path id="Path_12" data-name="Path 12" d="M2335.433,1654.45c-2.75-.225-4.431-1.661-4.454-4.424-.022-2.788,1.625-4.361,4.42-4.347a3.877,3.877,0,0,1,4.235,4.108C2339.72,1652.572,2338.165,1654.075,2335.433,1654.45Z" transform="translate(-2278.401 -1632.473)" fill="#E8E8E8"/>
              </g>
            </svg>
            <svg class="socialMediaIconsFooter" xmlns="http://www.w3.org/2000/svg" width="89.244" height="74" viewBox="0 0 89.244 74">
              <path id="Path_13" data-name="Path 13" d="M3371.527,1384.215c-1.586.5-3.192.946-4.8,1.381-.453.122-1.029.308-1.283-.278-.235-.539.385-.646.658-.9a18.628,18.628,0,0,0,4.417-6.011c.221-.5.722-1,.152-1.491a1.3,1.3,0,0,0-1.565.092,38.537,38.537,0,0,1-7.314,2.961c-1.724.61-2.766.18-4.1-.893-2.877-2.315-6-4.281-9.961-3.994a13.04,13.04,0,0,0-4.169.031c-.43-.392-.929-.2-1.392-.132-8.6,1.241-16.13,10.757-15.367,19.4.262,2.974.262,2.98-2.745,2.767a21.254,21.254,0,0,1-2.286-.255,52.547,52.547,0,0,1-30.933-17.156c-1.507-1.706-1.916-1.621-2.781.458a17.67,17.67,0,0,0-.767,12.836c1.051,3.075,2.316,6.109,5.176,8.07l.014.012c.046.471.739.833.386,1.312s-.9.129-1.349-.007a28.758,28.758,0,0,1-2.789-.89c-.7-.292-1.411-.95-2.1-.351-.634.549-.323,1.45-.189,2.19,1.232,6.8,4.731,11.916,11.122,14.86.36.166.923.146.873.7-.044.5-.568.524-.951.647a5.549,5.549,0,0,1-2.687-.087c-1.383-.229-2.022.01-1.312,1.651a18.961,18.961,0,0,0,9.461,9.83c1.958.953,4.107,1.233,6.405,2.08-7.764,5.578-16.311,7.6-25.556,7.47a38.354,38.354,0,0,0,14.084,6.495c14.49,3.553,28.526,2.218,41.249-5.788,16.679-10.5,24.957-26.032,25.354-45.718a3.777,3.777,0,0,1,1.576-3.335,34.866,34.866,0,0,0,6.533-6.717c.341-.449.684-1.008.23-1.491C3372.386,1383.5,3371.966,1384.076,3371.527,1384.215Z" transform="translate(-3283.795 -1374.874)" fill="#E8E8E8"/>
            </svg>
            <svg  class="socialMediaIconsFooter" xmlns="http://www.w3.org/2000/svg" width="105.74" height="74" viewBox="0 0 105.74 74">
              <path id="Path_14" data-name="Path 14" d="M2782.668,1552.439q18.378,0,36.756,0c9.259-.008,16.1,6.623,16.14,15.843q.086,21.155-.016,42.309a15.505,15.505,0,0,1-15.7,15.839c-24.02.048-48.041-.109-72.061-.017-6.1.023-11.259-1.5-14.937-6.624a14.417,14.417,0,0,1-2.937-8.529c-.01-14.426-.116-28.853.015-43.277.081-8.945,7.046-15.526,15.979-15.52q18.379.012,36.757,0Zm-10.492,34.866q0,8.7,0,17.391c0,.632-.219,1.4.384,1.786.659.421,1.227-.255,1.712-.574,8.717-5.733,17.39-11.531,26.12-17.242,1.716-1.122,1.345-1.763-.1-2.709q-12.9-8.42-25.75-16.922c-.586-.387-1.139-1.209-1.854-.841-.826.425-.5,1.429-.5,2.2Q2772.162,1578.85,2772.176,1587.305Z" transform="translate(-2729.868 -1552.437)" fill="#E8E8E8"/>
            </svg>
            {/*End of social media icons, using SVG code direct from Adobe XD Prototype*/}
        </div>
        <p class="descriptionA">Copyright 2021-2022 Black Ocean LLC</p>
      </div>
    </div>
  </div>
  )
}
