import MainH2 from "../../components/MainH2";
import MainParagraph from "../../components/MainParagraph";
import SeeMoreButton from "../../components/SeeMoreButton";

export default function Blog({width}) {
  return (
    <section className="blog">
        <MainH2 text={'Our blog'} line/>
        <MainParagraph text={'An insight the incredible experience in the world'}/>
        <div className="blog-highlight">
          <picture>
              <img src={`/images/blog/blog-img-${
                  width < 768 ? 'mobile' : width < 1152 ? 'tablet' : width < 1440 ? 'desktop-s' : width < 1840 ? 'desktop-m' : 'desktop-b'
              }.jpg`} alt="" className="blog-img"/>
          </picture>
          <div className="blog-texts">
              <MainH2 text={'Beautiful Italy Let’s travel'}/>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues.</p>
              <SeeMoreButton text={'read more'}/>
          </div>
        </div>
    </section>
  )
}