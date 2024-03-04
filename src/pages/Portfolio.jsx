import ProjectCard from "../components/ProjectCard";
import grit from "../assets/img/CustomGrit.png";
import poss from "../assets/img/EndlessPoss.png";
import event from "../assets/img/eventTracker.png";
import horiseon from "../assets/img/horiseon.png";
import quiz from "../assets/img/quizTron.png";
import save from "../assets/img/saveNote.gif";
const projects = [
  {
    title: "Custom Grit",
    imgLink: grit,
    githubLink: "https://github.com/ThaDarkLord/custom-grit",
    depoLink: "https://damp-spire-43145-9f06d97d997c.herokuapp.com/",
  },
  {
    title: "Endless Possibilities",
    imgLink: poss,
    githubLink: "https://github.com/ThaDarkLord/the-endless-possibility",
    depoLink: "https://thadarklord.github.io/the-endless-possibility/",
  },
  {
    title: "Event Tracker",
    imgLink: event,
    githubLink: "https://github.com/ThaDarkLord/event-tracker",
    depoLink: "https://thadarklord.github.io/event-tracker/index.html",
  },
  {
    title: "Horiseon Refactor",
    imgLink: horiseon,
    githubLink:
      "https://github.com/ThaDarkLord/horiseon-accessability-restructure",
    depoLink:
      "https://thadarklord.github.io/horiseon-accessability-restructure",
  },
  {
    title: "Quiz-o-Tron",
    imgLink: quiz,
    githubLink: "https://github.com/ThaDarkLord/Quiz-o-tron",
    depoLink: "ms",
  },
  {
    title: "SaveNote",
    imgLink: save,
    githubLink: "https://github.com/ThaDarkLord/save-a-note",
    depoLink: "https://save-a-note-f7329a29b01b.herokuapp.com/",
  },
];

export default function Portfolio() {
  return (
    <ul>
      {projects.map((project) => {
        return <ProjectCard cards={project} key={project.title}/>;
      })}
    </ul>
  );
}
