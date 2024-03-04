import { Outlet } from 'react-router-dom';
import HeaderSet from './components/Header'; 
import Footer from './components/Footer'
// import HeaderSet from './components/Header';
function App(){
  return (
    <>

    <HeaderSet />
    <main className='mx-3'>
    <Outlet />
    </main>
    <Footer />
    </>
    
  );
}
export default App
