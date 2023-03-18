import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import 'animate.css';
import Navbar from './component/navbar/Navbar';
import InJustDays from './component/herosection/Hero';
import WhyLandInterior from './component/secondsection/Herosecond'
import Whatwedo from './component/thirdsection/Herothird';
import Projects from './component/foursection/Foursection';
import Blog from './component/slider/Slider';
import Product from './component/fivesection/Fivesection';
import Costumers from './component/costumers/Costumers';
import Footer from './component/footer/Footer';
function App() {
  return (
    <>
<Navbar/>
<InJustDays/>
<WhyLandInterior/>
<Whatwedo/>
<Projects/>
<Blog/>
<Product/>
<Costumers/>
<Footer/>
{/* <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
</Routes>
</BrowserRouter> */}
    
    
      
    </>
  );
}

export default App;
