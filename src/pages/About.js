import "./Pages.css"
// import Resume from "../components/Images/MjocResume.pdf"


function Page() {
  return (
    <div class="container">
      <div id="pageHeader">
        <br></br>
        <h1>About Me</h1>

        <img id="profilePic" alt="IMG.9798.png" src={"/Assets/Images/IMG_9798.jpg"}/>
    
        

          <div class="text">

            <p>I am a Chartered Professional Accountant by training and have spent 40 years working with and for various Canadian
            multinationals in Vancouver, Toronto, Montreal and London UK; mostly in the field of taxation. I retired from
            corporate life in 2020 and have been learning new skills to finish up a number of ideas and projects I have in
            mind. I signed up for the U of T Bootcamp to develop skills in javascript so that I can add more functionality
            to tax related sites that I developed in my spare time. Through work, I have travelled extensively and visited many
            parts of Canada and other countries, including the US, Australia, China, Hong Kong, Singapore, Spain, Italy,
            France, the UK, Ireland, Germany, South Africa, Luxembourg, Switzerland and Brazil. Once the course has been completed
            and the Covid-19 Pandemic is under control, I hope to travel again with my wife, Michaeleen as we visit new places
            and friends around the world.</p>
<br></br>
          </div>
          <section id="contact-info" >
            <h2>Contact Info:</h2>
            <div class="list">
              <ul >

                <li class="List"><strong>Email: </strong><a
                  href="mailto:Michael.j.oconnor@gaarmageddon.com">Michael.j.oconnor@me.com</a></li>
                <li class="List"><strong>LinkedIn: </strong><a
                  href="https://www.linkedin.com/in/michael-j-o-connor-cpa-ca-1063773b/" target="blank">Michael J. O'Connor, CPA, CA</a></li>
                <li class="List"><strong>GitHub: </strong><a
                  href="https://github.com/Emjayosee" target="blank">Emjayosee</a></li>
                <li class="List"><strong>Phone: </strong>647 398 0854</li>
                <li class="List"><strong>ZOOM: </strong>494 292 9313</li>
                <li class="List"><strong>CV (See Attached): </strong><a class="PDF" href="/Assets/Images/MjocResume.pdf" target="blank">PDF</a></li>

              </ul>
            <br></br>
            </div>
          </section>
      </div>
      </div>
    )
}



export default Page;