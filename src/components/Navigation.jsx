export default function NavVar() {
  return (
    <div className="main-container">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Portfolio">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Resume">
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}
