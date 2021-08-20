import React from 'react'
import "./AboutMe.scss"

const AboutMe = () => {
  return (
    <section class="aboutMe" id="about">
      <h2>ABOUT</h2>
      <div class="profile-flex">
        <div class="profile">
          
          <h3>Who am I?</h3>
          <article>
            I'm a Developer with a passion for all things tech I love
            creating intuitive, dynamic user experiences. I'm a graduate
            from _nology boot-camp and have experience of using the following languages
            
          </article>
        </div>
        <div class="skills">
          

          <div >
            <div >
              <ul class="chart--horiz">
                
                  <span ><img src="/assets/react.png" alt="" /> </span>
                
                
                  <span ><img src="/assets/javascript.png" alt="" /> </span>
                
                
                  <span ><img src="/assets/html5.png" alt="" /></span>
                
                  <span ><img src="/assets/css3.png" alt="" />  </span>

                  <span ><img src="/assets//sass.png" alt="" /> </span>
               
                  <span ><img src="/assets/Java_logo_PNG2.png" alt="" />  </span>
           
                  <span ><img src="/assets/npm.png" alt="" /> </span>
              
                  <span ><img src="/assets//github.png" alt="" /> </span>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>



















    // <div className="AboutMe" id="aboutme">

    // <h2>About me</h2>

    //   <img src="/assets/html5.png" alt="" />
    //   <img src="/assets/css3.png" alt="" />
    //   <img src="/assets/sass.png" alt="" />
    //   <img src="/assets/javascript.png" alt="" />
    //   <img src="/assets/react.png" alt="" />
    //   <img src="/assets/java_logo_PNG2.png" alt="" />
    //   <img src="/assets/github.png" alt="" />
    //   <img src="/assets/npm.png" alt="" />
    // </div>
  )
}

export default AboutMe
