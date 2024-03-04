
function ProjectCard(props) {
  console.log(props)
  return (
    <div className="card"  style={{width: '18rem', border: "none",backgroundColor: "green"}}>
    <a href={props.cards.depoLink}><img src={props.cards.imgLink} className="card-img-top" alt="..." /></a>
    <div className="card-body">
      {props.cards.title}
      {/* {props.cards.githubLink} */}
    </div>
  </div>
  )
}

export default ProjectCard;
