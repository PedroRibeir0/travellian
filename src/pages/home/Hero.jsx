import { useState, useEffect } from "react"

export default function Hero() {

  const [current, setCurrent] = useState(0)
  const intervalTime = 3500

  let width = window.innerWidth

  const backgroundImages = [1,2,3,4].map(item=>{
    return `/images/home-bg/home-bg-${width <= 428 ? 'mobile' : width <= 1152 ? 'tablet' : 'desktop'}-${item}.jpg`
  })

  useEffect(()=>{

    function changeBackgroundImage(){

      if (current == backgroundImages.length -1){
        setCurrent(0)
        return
      }
      setCurrent(current + 1)
    }

    const bgInterval = setInterval(changeBackgroundImage, intervalTime)

    return ()=>{
      clearInterval(bgInterval)
    }
  }, [current])

  return (
    <section 
      className="hero" 
      style={{backgroundImage: `url(${backgroundImages[current]})`}}>
        <h1>Start your unforgettable journey with us.</h1>
        <p>The best travel for your journey begins now</p>
        
        <form className="travel-info-form">
          
        </form>
        
    </section>
  )
}
