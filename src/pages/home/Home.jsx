'use client'
import {useState, useEffect, useRef} from 'react'
import Header from "../../components/Header";
import Hero from './Hero'
import Popular from './Popular';
import SpecialOffer from './SpecialOffer';
import Blog from './Blog';
import TripPlanners from './TripPlanners';
import {AiFillStar} from 'react-icons/ai'
import Gallery from './Gallery';
import Experiences from './Experiences';
import Newsletter from './Newsletter';
import Footer from './Footer';

export default function Home() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    const menu = useRef()
    
    const handleMenuIconClick = ()=> setIsMenuOpen(true)

    useEffect(()=>{

      const handleResize = ()=> setWidth(window.innerWidth)
  
      window.addEventListener('load', handleResize)
      window.addEventListener('resize', handleResize)
    }, [width])

    useEffect(() => {
        if (!isMobile) return
        if (!isMenuOpen) return;
      
        function handleClickOutsideMenu(e){
          const noMenu = window.innerWidth - menu.current.scrollWidth;
          if (e.clientX <= noMenu) setIsMenuOpen(false);
        };
      
        window.addEventListener('click', handleClickOutsideMenu);
      
        return () => {
          window.removeEventListener('click', handleClickOutsideMenu);
        };
      }, [isMenuOpen]);
    
      useEffect(() => {
        function handleResize(){
          setIsMenuOpen(window.innerWidth >= 1152);
          setIsMobile(window.innerWidth < 1152);
        };
        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    function stars(number_of_stars){
      const starList = Array.from(
      { length: (number_of_stars - 1) / 1 + 1 },
      (i, index) => 1 + index * 1
      );
      return starList.map((item, mapI)=>{
        return( 
        <li className="star" key={mapI}>
          <AiFillStar className="star"/>
        </li>)
      })
    }

    return (
    <div className='home'>
      <Header 
        isMenuOpen={isMenuOpen} 
        handleMenuIconClick={handleMenuIconClick}
        menu={menu}
      />
      <Hero width={width}/>
      <Popular width={width}/>
      <SpecialOffer width={width} stars={stars}/>
      <Blog width={width}/>
      <TripPlanners width={width} stars={stars} isMobile={isMobile}/>
      <Gallery width={width}/>
      <Experiences stars={stars}/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
