export default function Header({isMenuOpen, handleMenuIconClick, menu}) {

  function Menu(){
    return(
      <nav className="nav-menu" ref={menu}>
        <ul className="menu-container">
          {['Home', 'Explore', 'Travel', 'Blog', 'Pricing'].map(item=><li key={item} className="menu-opt">{item}</li>)}
        </ul>
        <div className="login-buttons">
          <button className="login">Login</button>
          <button className="sing-up">Sing up</button>
        </div>
    </nav>
    )
  }

  return (
    <>
    <header>
      <img className="logo" src="/images/icons/logo.svg" alt="" />
      <img className="menu-icon" src="/images/icons/menu-icon.svg" alt="menu-icon" onClick={handleMenuIconClick}/>
    </header>
    {isMenuOpen && <Menu/>}
    </>
  )
}
