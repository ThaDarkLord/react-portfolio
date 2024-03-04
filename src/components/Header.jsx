import NavVar from './Navigation.jsx';


export default function HeaderSet(){
    return(
        <header className="container"style={{backgroundColor: 'red'}}>
            <h1 style={{textAlign: "left"}}>Daniel J. Sykes</h1>
            <NavVar />
        </header>
    );
}