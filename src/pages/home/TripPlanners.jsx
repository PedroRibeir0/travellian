import MainH2 from "../../components/MainH2";
import MainParagraph from "../../components/MainParagraph";

export default function TripPlanners() {
  return (
    <section className="trip-planners">
        <div className="texts">
            <MainH2 text={'Trip Planners'} line/>
            <MainParagraph text={'20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start traveling, start throwing off the bowlines.'}/>
            <button className="trip-planners-button">View all trip planners</button>
        </div>
    </section>
  )
}
