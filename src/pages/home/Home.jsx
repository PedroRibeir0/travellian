'use client'
import {useState, useEffect, useRef} from 'react'
import Header from "../../components/Header";
import Hero from './Hero'

export default function Home() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const menu = useRef()
    
    const handleMenuIconClick = ()=> setIsMenuOpen(true)

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

    return (
    <div className='home'>
      <Header 
        isMenuOpen={isMenuOpen} 
        handleMenuIconClick={handleMenuIconClick}
        menu={menu}
      />
      <Hero/>
    </div>
  )
}
