import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import Hotel from './pages/Hotel';
import Visa from './pages/visa';
import Checkout from './pages/checkout';


function App() {
 
  return ( <BrowserRouter>
  <nav className='flex font-serif bg-slate-600 text-white h-[100px] gap-8 justify-center  '>
    <h2 className='font-serif text-2xl mt-[30px] text-blue-500 mr-[50px]'>Travelbeta</h2>
    <Link to='/' className='mt-[35px]'>Hotel</Link>
    <Link to='/visa' className='mt-[35px]'>Visa</Link>
    <Link to='/checkout' className='mt-[35px]'>Checkout</Link>
  
  
  </nav>
 
    <>
   <Routes>
     <Route path='/' element={<Hotel />}/>
     <Route path='/visa' element={<Visa/>}/>
     <Route path='/checkout' element={<Checkout/>}/>
   </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
