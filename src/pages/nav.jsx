import logo from "../assets/images/zulfahLogo.svg"

const Nav = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container px-5">
          <a className="navbar-brand">
            <img src={logo} alt="logo" className="img-fluid" />
          </a>
          <div className="d-flex justify-contents-between gap-3 align-items-center  ">
            <a>Home</a>
            <a>About</a>
            <a>Team</a>
            <a>Produly Us</a>
            <a>Contact Us</a>

            <button type="button" className="btn btn-primary">
              SOFTWARE ACADEMY
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
