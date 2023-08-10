
export default function Footer() {
  return (
    <footer>
        <div className="logo-copy">
            <img className="logo" src="/images/icons/logo.svg" alt="" />
            <span className="copyright">Copyright © Travellian 2020 All rights reserved</span>
        </div>
        <ul className="footer-menu">Menu
            {['Home', 'Explore', 'Travel', 'Blog', 'Pricing'].map(item=>{
                return <li>{item}</li>
            })}
        </ul>
        <ul className="footer-information">information
            {['Destination', 'Supports', 'Terms & Conditions', 'Privacy'].map(item=>{
                return <li>{item}</li>
            })}
        </ul>
        <ul className="footer-contact">Contact
            {['+123 456 789', 'info@travellian.com', '1245, New York, USA'].map(item=>{
                return <li>{item}</li>
            })}
        </ul>
        <ul className="social-icons">
            {['facebook', 'pinterest', 'twitter', 'instagram'].map(item=>{
                return <li><img src={`/images/icons/${item}-icon.svg`} alt={`${item}-icon`} /></li>
            })}
        </ul>

    </footer>
  )
}
