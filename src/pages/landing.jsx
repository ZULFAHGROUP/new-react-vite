import Footer from "./footer"
import Nav from "./nav"
import Section from "./section"
import SectionFour from "./sectionFour"
import SectionThree from "./sectionThree"
import SectionTwo from "./sectionTwo"

const Landing = () => {
  return (
    <>
      <div>
        <Nav />
        <Section />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
      </div>
    </>
  )
}

export default Landing
