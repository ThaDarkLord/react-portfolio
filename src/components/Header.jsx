// import NavVar from './Navigation.jsx';
import '../assets/styles/header.css'
import {Link, useLocation} from 'react-router-dom'
export default function HeaderSet(){
  const currentPage = useLocation().pathname;
    return(
        <header className="container">
             <div className="main-container new col-" >
            <h1>Daniel J. Sykes</h1>
      <ul className="nav justify-content-left">
        <li className="nav-item">
         <Link 
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        ><div className='text'>About Me</div> </Link>
        </li>
        <li className="nav-item">
        <Link 
          to="/portfolio"
          className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
        ><div className='text'>Portfolio</div></Link>
        </li>
        <li className="nav-item">
        <Link
          to="/resume"
          className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
        ><div className='text'>Resume</div></Link>
        </li>
        <li className="nav-item">
        <Link
          to="/contact"
          className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
        ><div className='text'>Contact</div></Link>
        </li>
      </ul>
      
    </div>
        </header>
    );
}