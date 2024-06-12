import Footer from "./footer"
import Nav from "./nav"
import Section from "./section"
import SectionThree from "./sectionThree"
import SectionTwo from "./sectionTwo"
import SectionFour from "./sectionFour"

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
