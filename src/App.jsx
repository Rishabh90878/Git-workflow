import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero/Hero'
import Products from './components/Navbar/Products/Products'
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './components/Navbar/TopProducts/TopProducts';
import Banner from './components/Navbar/Banner/Banner';
import Subscribe from './components/Navbar/Subscribe/Subscribe';
import Testimonials from './components/Navbar/Testimonials/Testimonials';
import Footer from './components/Navbar/Footer/Footer';
import Popup from "./components/Navbar/Popup/Popup"
const App = () => {
  const[orderPopup,setOrderpopup] = React.useState(false);
  const handleOrderPopup = () =>{setOrderpopup(orderPopup)}
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Products/>
      <Testimonials/>
      <Footer/>
       <Popup orderpopup={orderPopup} setOrderPopup = {setOrderpopup}/>
    </div>
  )
}

export default App