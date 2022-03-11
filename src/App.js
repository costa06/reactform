import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Home from './component/Home';
import Headernav from './component/Headernav';
import Footerpage from './component/Footerpage';
import Navroute from './component/Navroute';




function App() {
  return (
    <>
   <header>
     <Headernav/>
   </header>
   <main>
      <Navroute/>
   </main>
   <footer>
     <Footerpage/>
   </footer>
    </>
  );
}

export default App;
