/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import iconOne from "../assets/images/Icon.svg"
import iconTwo from "../assets/images/IconTwo.svg"
import iconThree from "../assets/images/IconThree.svg"
const SectionTwo = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center mt-5 gap-5 ">
        <div
          className="text-light rounded px-4 py-2 "
          style={{ backgroundColor: "#2B4B80", fontSize: "1.5rem" }}
        >
          Join our 6-months Software Engineering Bootcamp. Click{" "}
          <a href="#" style={{ color: "#FF5C97", textDecoration: "none" }}>
            here
          </a>{" "}
          to know more.{" "}
        </div>
        <div style={{ color: "#2B4B80", fontWeight: "bold", fontSize: "40px" }}>
          We're experts In:
        </div>
        <div>
          <div className="row">
            <div className="col">
              <div
                className="card border border-0 text-center "
                style={{ width: "18rem" }}
              >
                <img
                  src={iconOne}
                  className="card-img-top img-fluid w-25 mx-auto "
                  alt="iconOne"
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "24px",
                      color: "#2B4B80",
                      fontWeight: "600",
                    }}
                  >
                    Bespoke Software Development
                  </h5>
                  <p
                    className="card-text"
                    style={{ color: "#707B8E", fontWeight: "400" }}
                  >
                    Application Design and Development
                  </p>
                  <div
                    className="d-flex justify-content-center gap-2 mt-0"
                    style={{ color: "#C5CCD8" }}
                  >
                    <i className="bi bi-arrow-right-circle-fill"></i>
                    <p> GET STARTED</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card border border-0 text-center "
                style={{ width: "18rem" }}
              >
                <img
                  src={iconTwo}
                  className="card-img-top img-fluid w-25 mx-auto "
                  alt="iconOne"
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "24px",
                      color: "#2B4B80",
                      fontWeight: "600",
                    }}
                  >
                    Artificial Intelligence and Machine Learning
                  </h5>
                  <p
                    className="card-text"
                    style={{ color: "#2B4B80", fontWeight: "400" }}
                  >
                    Artificial Intelligence and Machine Learning development
                    and App integration.
                  </p>
                  <div
                    className="d-flex justify-content-center gap-2 mt-0"
                    style={{ color: "#7B40C0" }}
                  >
                    <i className="bi bi-arrow-right-circle-fill"></i>
                    <p> GET STARTED</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card border border-0 text-center "
                style={{ width: "18rem" }}
              >
                <img
                  src={iconThree}
                  className="card-img-top img-fluid w-25 mx-auto "
                  alt="iconOne"
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "24px",
                      color: "#2B4B80",
                      fontWeight: "600",
                    }}
                  >
                   Product Design and
                   Project Management
                  </h5>
                  <p
                    className="card-text"
                    style={{ color: "#707B8E", fontWeight: "400" }}
                  >
                    Product design, development and
                    lifecycle management.
                  </p>
                  <div
                    className="d-flex justify-content-center gap-2 mt-0"
                    style={{ color: "#C5CCD8" }}
                  >
                    <i className="bi bi-arrow-right-circle-fill"></i>
                    <p> GET STARTED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionTwo
