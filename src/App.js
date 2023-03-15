import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import 'animate.css';
import Navbar from './component/navbar/Navbar';
import Hero from './component/herosection/Hero';
import Herosecond from './component/secondsection/Herosecond'
import Herothird from './component/thirdsection/Herothird';
import Foursection from './component/foursection/Foursection';
import Fivesection from './component/fivesection/Fivesection';
import MySlider from './component/slider/Slider';
import Costumers from './component/costumers/Costumers';
import Footer from './component/footer/Footer';
function App() {
  return (
    <>
<Navbar/>
<Hero/>
{/* <Herosecond/> */}
{/* <Herothird/> */}
{/* <Foursection/> */}
{/* <MySlider/> */}
{/* <Fivesection/> */}
{/* <Costumers/> */}
{/* <Footer/> */}
{/* <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
</Routes>
</BrowserRouter> */}
    
    
      
    </>
  );
}

export default App;
