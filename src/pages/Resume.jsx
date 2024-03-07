import '../assets/styles/resume.css'
import ResumePdf from '../assets/img/ResumeCopyn.png'
export default function Resume (){
    return(


      <div className="container text-center ">
  <div className="row">
    <div className="col">
    <h2>Experience</h2>
         <ul>
         <li>Front End Development</li>
          <li>Back End Development</li>
        <li>Full-Stack Development</li>
    </ul>
       <h2>Languages</h2>
        <ul>
          <li>Javascript</li>
           <li>React</li>
           <li>HTML</li>
           <li>Css</li>

    </ul>
       <h2>Skills</h2>
       <ul>
          <li>Determined</li>
           <li>Resourceful</li>
           <li>Attentive</li>
        </ul>
    </div>
    <div className="col text-center resume">
    <button className="dloButton">
        <a className="button" href={ResumePdf}>
          Download Resume
      </a>
   </button>
    </div>
  </div>
   </div>
    )
}