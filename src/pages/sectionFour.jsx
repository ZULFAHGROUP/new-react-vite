/* eslint-disable no-unused-vars */
import "../css/four.css"
import access from "../assets/images/access.png.png"
import meristem from "../assets/images/meristem.png.png"
import acci from "../assets/images/acci.jpg.png"
import niqs from "../assets/images/niqs.jpg.png"
import afriglobal from "../assets/images/afriglobal.jpeg.png"
import rsz from "../assets/images/rsz.png"
import Button from "../shared/button"

const SectionFour = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center mt-5 gap-5">
        <div className="text-center" style={{ color: "#2B4B80" }}>
          <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>Our Partners</h1>
          <p style={{ fontWeight: "400" }}>
            Join other top companies who trust us to deliver top-notch services
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <img src={access} alt="access" style={{ width: "10%" }} />
          <img src={meristem} alt="meristem" style={{ width: "10%" }} />
          <img src={niqs} alt="niqs" style={{ width: "10%" }} />
          <img src={afriglobal} alt="afriglobal" style={{ width: "10%" }} />
          <img src={acci} alt="acci" style={{ width: "10%" }} />
          <img src={rsz} alt="rsz" style={{ width: "10%" }} />
        </div>

        <div
          className=" grad d-flex justify-content-between align-items-center text-light rounded px-4 py-4 "
          style={{
            backgroundColor: "#2B4B80",
            fontSize: "1.5rem",
            width: "40rem",
          }}
        >
          <h4>Have a project in mind?</h4>
          {/* <button type="button" className="btn btn-light">
            Contact us
          </button> */}
          <Button
            backgroundColor="btn-light"
            title="Contact us"
            textColor="text-danger"
          />
        </div>
      </div>
    </>
  )
}

export default SectionFour
