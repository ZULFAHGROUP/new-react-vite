/* eslint-disable react/no-unescaped-entities */
import sectionOneImg from "../assets/images/contact-vector.png.png"

const Section = () => {
  return (
    <>
      <div className="container d-flex align-items-center ">
        <div className="">
          <h1
            className=" "
            style={{
              color: "#2B4B80",
              width: "37rem",
              fontSize: "65px",
              fontWeight: "bold",
            }}
          >
            We're an Innovative Software Company
          </h1>
          <p style={{ width: "28rem" }}>
            Our customers are at the heart of what we do and we differentiate
            ourselves by the passion, attention to details and creativity woven
            into our products.
          </p>
        </div>
        <div className="">
          <img src={sectionOneImg} alt="" className="img-fluid" />
        </div>
      </div>
    </>
  )
}

export default Section
