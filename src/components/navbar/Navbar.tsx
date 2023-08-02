import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>PandaLove</span>
      </div>
      <div className="icons">
      <img src="/search.svg" alt="" className="icon"/>
      <img src="/app.svg" alt="" className="icon"/>
      <img src="/expand.svg" alt="" className="icon"/>
      <div className="notification">
        <img src="/notifications.svg" alt="" />
        <span>1</span>
      </div>
      <div className="user">
        <img src="https://res.cloudinary.com/dqjh46sk5/image/upload/v1690320760/k0yt3fqg7ilfttbrohdf.jpg" alt="" />
      </div>
      <img src="/settings.svg" alt="" className="icon"/>
      </div>
    </div>
  )
}
export default Navbar