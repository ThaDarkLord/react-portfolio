import '../assets/styles/ProjectCard.css'
function ProjectCard(props) {
  console.log(props)
  return (
    <div className="card">
    <a href={props.cards.depoLink}><img src={props.cards.imgLink} className="card-img-top" alt="..." /></a>
    <div className="card-body">
      {props.cards.title}
      {/* {props.cards.githubLink} */}
    </div>
  </div>
  )
}

export default ProjectCard;
