import MyPhoto from "../assets/img/me.png"

export default function AboutMe (){
    return(
        <div className="main-container">
            <div className="col row" style={{ backgroundColor: "green", padding: '' }}>
            <h3>A little about me</h3>

                <img src={MyPhoto} style={{maxWidth: '15%', borderRadius: "60rem"}} alt="picture of Daniel" className="col"></img>
            <p className="col">Hello there, 
                <br />
                 Daniel Sykes is the name. welcome my portfolio! I am a 31 year old rookie developer looking to continue exploring and expanding knowledge in the coding community. I am passionate about sports and fitness. I enjoy coding because it allows me to challenege and apply my knowledge.
                 <br/>
                 <br/>

                  I will give you a quick run down on how this page works so you can get right to the good stuff. Above, there is a navigation bar that has a couple routes that you can take. You are already at the about me page so no need to hit that one while you are here. Next in line there is the Portfolio route which will take you to a few of my latest pieces of work. After that we have the resume route where you can view the list of accomplishments and skills that I have acquired. Lastly we have the contact route where you have the ability to engage with me via email. 
            </p>
            </div>
           
        </div>
    )
}