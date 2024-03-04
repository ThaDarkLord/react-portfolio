import {Link, useLocation} from 'react-router-dom'

export default function NavVar() {
  const currentPage = useLocation().pathname;

  return (
    <div className="main-container" >
      <ul className="nav justify-content-center" >
        <li className="nav-item">
         <Link style={{color: "white"}}
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >About Me</Link>
        </li>
        <li className="nav-item">
        <Link style={{color: "white"}}
          to="/portfolio"
          className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
        >Portfolio</Link>
        </li>
        <li className="nav-item">
        <Link style={{color: "white"}}
          to="/resume"
          className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
        >Resume</Link>
        </li>
        <li className="nav-item">
        <Link style={{color: "white"}}
          to="/contact"
          className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
        >About Me</Link>
        </li>
      </ul>
    </div>
  );
}
