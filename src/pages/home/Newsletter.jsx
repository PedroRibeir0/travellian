import MainH2 from "../../components/MainH2";

export default function Newsletter() {
  return (
    <div className="newsletter">
        <MainH2 text={'Our Newsletter'}/>
        <form className="newsletter-form">
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="email"/>
            </div>
            <button className="subscribe-button">Subscribe</button>
        </form>
    </div>
  )
}
