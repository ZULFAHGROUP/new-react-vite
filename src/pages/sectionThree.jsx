/* eslint-disable no-unused-vars */
import iconThree from "../assets/images/IconThree.svg"
import iconFour from "../assets/images/IconFour.svg"
import iconOne from "../assets/images/Icon.svg"
import iconFive from "../assets/images/IconFive.svg"

const SectionThree = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-5 gap-5">
      <div
        className="text-light rounded px-4 py-2 "
        style={{ backgroundColor: "#FF5C97", fontSize: "1.5rem" }}
      >
        Our Services
      </div>

      <div style={{ color: "#2B4B80", fontWeight: "bold", fontSize: "40px" }}>
        We Help Companies:
      </div>

      <div>
        <div className="container row px-5 ">
          <div className="col-6">
            <div className="d-flex gap-3">
              <div className="">
                <img src={iconThree} alt="iconThree" className="img-fluid" />
              </div>
              <div className="" style={{ color: "#2B4B80" }}>
                <h3>Increase Revenue</h3>
                <p style={{ fontWeight: "400", width: "20rem" }}>
                  Increasing revenues are a sign of good financial health of a
                  business. The quality operational service tactics at Zulfah
                  can help you minimize costs and boost your business revenues..
                </p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex gap-3">
              <div className="">
                <img src={iconFour} alt="iconFour" className="img-fluid" />
              </div>
              <div className="" style={{ color: "#2B4B80" }}>
                <h3>Boost Efficiency</h3>
                <p style={{ fontWeight: "400", width: "20rem" }}>
                  We are commited to bringing changes that will drastically
                  improve the levels of productivity and efficiency in your
                  business.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex gap-3">
              <div className="">
                <img src={iconOne} alt="iconOne" className="img-fluid" />
              </div>
              <div className="" style={{ color: "#2B4B80" }}>
                <h3>Create Happy Customers</h3>
                <p style={{ fontWeight: "400", width: "20rem" }}>
                  Customers have been coming to Zulfah for first-class custom
                  software services for over the years. Our projects result in
                  improved business efficiency, increased ROI cost-
                  effectiveness, and risk mitigation.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex gap-3">
              <div className="">
                <img src={iconFive} alt="iconFive" className="img-fluid" />
              </div>
              <div className="" style={{ color: "#2B4B80" }}>
                <h3>Create High-Performance Solutions</h3>
                <p style={{ fontWeight: "400", width: "20rem" }}>
                  We use a proven collaborative model that is flexible and
                  scalable. This makes our digital solutions effective even on
                  projects with small teams. We rely on multi-disciplinary
                  software developers, time-proven processes, and effective
                  tools and techniques to ensure the highest level of quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree
