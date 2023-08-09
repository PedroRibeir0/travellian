import MainH2 from "../../components/MainH2";
import MainParagraph from "../../components/MainParagraph";
import SeeMoreButton from "../../components/SeeMoreButton";

export default function Gallery({width}) {
  return (
    <section className="gallery">
        <MainH2 text={'Destination Gallery'} line/>
        <MainParagraph text={'Our photo gallery on trip'}/>
        {width >= 1152 && <SeeMoreButton text={'go to gallery'}/>}
        <ul className="gallery-list">
            {[1,2,3,4].map(item=>{
                return <li key={item} className="gallery-item"><img 
                className="item-img"
                src={`/images/gallery/gallery-img-${item}-${
                    width < 428 ? 'mobile': width < 1152 ? 'tablet' : 'desktop'
                }.jpg`} 
                alt="" /></li>
            })}
        </ul>
    </section>
  )
}
