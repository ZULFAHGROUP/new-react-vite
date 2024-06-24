/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { cardDatas } from "../data/cardData"
import Card from "../shared/card"

const SectionThree = () => {
  return (
    <div className="flex flex-column items-center  mt-5 gap-5">
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
        <div className="px-20 row px-5 ">
          <div className="row">
            {cardDatas.map((cardData) => {
              return (
                <div key={cardData.id} className="col-6">
                  <Card
                    image={cardData.image}
                    title={cardData.title}
                    text={cardData.text}
                  />
                </div>
              )
            })}
          </div>

          {/* <div className="row">
            {cardDatas.map((cardData,i) => {
              return (
                <div className="col-6">
                  <Card
                    // key={cardData.id}
                    key={i}
                    // image={cardData.image}
                    // title={cardData.title}
                    // text={cardData.text}
                    {...cardData}
                  />
                </div>
              )
            })}
          </div> */}

          {/* <div className="col-6">
            <Card
              image={iconOne}
              title="Increase Revenue"
              text="  Increasing revenues are a sign of good financial health of a
            business. The quality operational service tactics at Zulfah
            can help you minimize costs and boost your business revenues.."
            />
          </div>
          <div className="col-6">
            <Card
              image={iconFour}
              title="Boost Efficiency"
              text=" We are commited to bringing changes that will drastically
                  improve the levels of productivity and efficiency in your
                  business."
            />
          </div>

          <div className="col-6">
            <Card
              image={iconThree}
              title="Create Happy Customers"
              text="   Customers have been coming to Zulfah for first-class custom
                  software services for over the years. Our projects result in
                  improved business efficiency, increased ROI cost-
                  effectiveness, and risk mitigation."
            />
          </div>
          <div className="col-6">
            <Card
              image={iconFive}
              title="Create High-Performance Solutions"
              text="     We use a proven collaborative model that is flexible and
                  scalable. This makes our digital solutions effective even on
                  projects with small teams. We rely on multi-disciplinary
                  software developers, time-proven processes, and effective
                  tools and techniques to ensure the highest level of quality."
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default SectionThree
