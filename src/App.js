import logo from './logo.svg';
import './App.css';
import './styles/navbar.css';
import './styles/fonts.css';
import './styles/page-main.css';
import Navbar from './components/Navbar';
import Page_main from './pages/main';
import Carousel from './pages/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Page_main/>
      {/* <Carousel/> */}
    </div>
  );
}

export default App;
