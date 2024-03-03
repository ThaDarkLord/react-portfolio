import grit from "../assets/img/CustomGrit.png";
import poss from "../assets/img/EndlessPoss.png";
import event from "../assets/img/eventTracker.png";
import horiseon from "../assets/img/horiseon.png";
import quiz from "../assets/img/quizTron.png";
import save from "../assets/img/saveNote.gif";

function ProjectCard() {
  return (
    <div className="main-container" style={{backgroundColor: "orange"}}>
      <div className="container row d-flex justify-content-center">
        <div className="card"  style={{width: '18rem', border: "none",backgroundColor: "orange"}}>
          <a href="https://damp-spire-43145-9f06d97d997c.herokuapp.com/"><img src={grit} className="card-img-top" alt="..." /></a>
          <div className="card-body">
          </div>
        </div>
        <div className="card"  style={{width: '18rem', border: "none",backgroundColor: "orange"}}>
          <a href="https://thadarklord.github.io/the-endless-possibility/"><img src={poss} className="card-img-top" alt="..." /></a>
          <div className="card-body">
          </div>
        </div>
        <div className="card"  style={{width: '18rem', border: "none", backgroundColor: "orange"}}>
          <a href=""><img src={quiz} className="card-img-top" alt="..." /></a>
          <div className="card-body">
          </div>
        </div>
        <div className="card"  style={{width: '18rem', border: "none", backgroundColor: "orange"}}>
          <a href="https://save-a-note-f7329a29b01b.herokuapp.com/.herokuapp.com/"><img src={save} className="card-img-top" alt="..." /></a>
          <div className="card-body">
          </div>
        </div>
        <div className="card"  style={{width: '18rem', border: "none", backgroundColor: "orange"}}>
          <a href="https://thadarklord.github.io/event-tracker/index.html"><img src={event} className="card-img-top" alt="..." /></a>
          <div className="card-body">
          </div>
        </div>
        <div className="card"  style={{width: '18rem', border: "none",backgroundColor: "orange"}}>
          <a href="https://thadarklord.github.io/horiseon-accessability-restructure"><img src={horiseon} className="card-img-top" alt="..." /></a>
          <div className="card-body">
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
