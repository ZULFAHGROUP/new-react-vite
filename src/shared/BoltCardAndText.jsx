import BoltDescription from "./BoltDescription"

const BoltCardAndText = () => {
  const details = [
    {
      numbering: 1,
      title: "Drive more, earn more",
      text: "Our 150+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.",
    },
    {
      numbering: 2,
      title: "Set your schedule",
      text: "Drive for as long and as often as you like. Weekdays; weekends; evenings — fit driving around your lifestyle.",
    },
    {
      numbering: 3,
      title: "Get paid each week",
      text: "You’ll receive your earnings at the end of each week — no need to wait around for payday.",
    },
  ]

  return (
    <div className="container d-flex w-100 justify-content-between  ">
      <div className="w-50  rounded overflow-hidden ">
        <img
          src="https://bolt.eu/static/dbd8bd233040ef350fbe8692cbec3475/1e482/feature-car.webp"
          alt="img"
          className="img-fluid "
        />
      </div>
      <div className="text-start">
        <h2>Drive and earn money</h2>

        {details.map((detail) => (
          <BoltDescription key={detail.numbering} {...detail} />
        ))}
      </div>
    </div>
  )
}

export default BoltCardAndText
