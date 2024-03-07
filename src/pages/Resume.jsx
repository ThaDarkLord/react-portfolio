import '../assets/styles/resume.css'
export default function Resume (){
    return(


      <div class="container">
  <div class="row">
    <div class="col">
    <h2>Experience</h2>
         <ul>
         <li>Javascript</li>
          <li>React</li>
        <li>Html/Css</li>
    </ul>
       <h2>Projects</h2>
        <ul>
          <li>Musical Event Tracker</li>
           <li>Custom Grit</li>
    </ul>
       <h2>Skills</h2>
       <ul>
          <li></li>
           <li></li>
           <li></li>
        </ul>
    </div>
    <div class="col text-center resume">
    <button className="dloButton">
        <a className="button" href="../assets/Resume/ResumeOfficial.pdf" download = "ResumeOfficial.pdf">
          Download Resume
      </a>
   </button>
    </div>
  </div>
   </div>
    )
}