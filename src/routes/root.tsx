import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom';
import Home from '../views/home';
import About from '../views/about';
import Work from '../views/work';
import Holistic from '../views/holistic';
import Fryer from '../views/fryer';


 const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<About/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/HolisticStudio" element={<Holistic/>}/>
        <Route path="/Fryer" element={<Fryer/>}/>

      </>
  
    )
  );
  
  export default router;
  