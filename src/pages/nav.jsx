import logo from "../assets/images/zulfahLogo.svg"
import Button from "../shared/button"

const Nav = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="px-20 sm:px-5">
          <a className="navbar-brand">
            <img src={logo} alt="logo" className="img-fluid" />
          </a>
          <div className="flex justify-contents-between gap-3 items-center   ">
            <a>Home</a>
            <a>About</a>
            <a>Team</a>
            <a>Produly Us</a>
            <a>Contact Us</a>

            <Button
              backgroundColor="btn-primary"
              title="SOFTWARE ACADEMY"
              textColor="text-success"
            />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
