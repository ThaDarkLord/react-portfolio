import MyPhoto from "../assets/img/me.png"
import '../assets/styles/aboutme.css';
export default function AboutMe (){
    return(
        <div className="container">
        <div className="row">
          <div className="col-4 leftSide">
            <img src={MyPhoto} alt="picture of Daniel" className="imgpic col"></img>
          </div>
          <div className="col-8">
          Hello there, 
        <br />
         Daniel Sykes is the name. welcome my portfolio! I am a 31 year old rookie developer looking to continue exploring and expanding knowledge in the coding community. I am passionate about sports and fitness. I enjoy coding because it allows me to challenege and apply my knowledge.
         <br/>
         <br/>

          I will give you a quick run down on how this page works so you can get right to the good stuff. Above, there is a navigation bar that has a couple routes that you can take. You are already at the about me page so no need to hit that one while you are here. Next in line there is the Portfolio route which will take you to a few of my latest pieces of work. After that we have the resume route where you can view the list of accomplishments and skills that I have acquired. Lastly we have the contact route where you have the ability to engage with me via email. 
          </div>
        </div>
        </div>
    )
}
