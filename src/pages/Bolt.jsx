import { useState } from "react"
import BoltButton from "../shared/BoltButton"
import BoltCardAndText from "../shared/BoltCardAndText"

const Bolt = () => {
  const allMyDetails = [
    {
      id: 1,
      image:
        "https://bolt.eu/static/dbd8bd233040ef350fbe8692cbec3475/1e482/feature-car.webp",
      header: "Drive and earn money",
      details: [
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
      ],
    },
    {
      id: 2,
      image:
        "https://bolt.eu/static/bd7db0a3dfc3fdb460fd3dcdd353db18/1e482/feature-courier.webp",
      header: "Make money delivering food",
      details: [
        {
          numbering: 1,
          title: "Earn extra income, fast",
          text: "There’s no subscription fee. You’ll receive your earnings at the end of each week.",
        },
        {
          numbering: 2,
          title: "Make money whenever you like",
          text: "You decide when and how often you deliver — weekdays, evenings, weekends, or just the occasional hour — it’s up to you.",
        },
        {
          numbering: 3,
          title: "Deliver your way",
          text: "Bike, scooter or car — you choose how to make deliveries.",
        },
      ],
    },
    {
      id: 3,
      image:
        "https://bolt.eu/static/64bd80dc26b2419e926d744915ea71d6/1e482/feature-restaurant-payment.webp",
      header: "Increase your sales",
      details: [
        {
          numbering: 1,
          title: "Reach new customers",
          text: "Millions of our users are ordering food or goods from restaurants and stores just like yours.",
        },
        {
          numbering: 2,
          title: "Increase your earnings",
          text: "Our large network of users brings more customers and business to you.",
        },
        {
          numbering: 3,
          title: "Let us handle delivery",
          text: "We’ll take care of the logistics, while you focus on running your business.",
        },
      ],
    },
    {
      id: 4,
      image:
        "https://bolt.eu/static/8727ed14828b20b12521cb1f41d0821e/1e482/feature-tesla-fleet.webp",
      header: "Grow your transport business",
      details: [
        {
          numbering: 1,
          title: "Boost your earnings",
          text: "Our large rider community means more orders per day and higher earnings.",
        },
        {
          numbering: 2,
          title: "Manage your assets",
          text: "Easily view your vehicles, drivers and their current status.",
        },
        {
          numbering: 3,
          title: "Keep track of performance",
          text: "Get easy access to each driver’s completed trips, invoices, and payout information.",
        },
      ],
    },
  ]

  const boltDetails = [
    {
      id: 1,
      text: "Driver",
    },
    {
      id: 2,
      text: "Courier",
    },
    {
      id: 3,
      text: "Restaurant or store owner",
    },
    {
      id: 4,
      text: "Fleet owner",
    },
  ]
  const [tabs, setTabs] = useState(1)

  function updateTabs(whatTab) {
    setTabs(whatTab)
  }

  return (
    <div className="w-full text-center h-[100vh] ">
      <h1  className="text-[2rem] font-bold " >Earn money with Bolt</h1>
      <div className="flex justify-center gap-3">
        {/* <BoltButton text="Driver" onClick={() => updateTabs(1)} />
        <BoltButton text="Courier" onClick={() => updateTabs(2)} />
        <BoltButton
          text="Restaurant or store owner"
          onClick={() => updateTabs(3)}
        />
        <BoltButton text="Fleet owner" onClick={() => updateTabs(4)} /> */}

        {boltDetails.map((boltDetail) => (
          <BoltButton
            key={boltDetail.id}
            {...boltDetail}
            onClick={() => updateTabs(boltDetail.id)}
            className={tabs === boltDetail.id ? "border-none bg-black text-white " : "bg-white boder-[#cfd3d9] "}
         
          />
        ))}
      </div>
      <div className="mt-4">
        {allMyDetails.map(
          (allMyDetail) =>
            tabs === allMyDetail.id && (
              <BoltCardAndText key={allMyDetail.id} {...allMyDetail} />
            )
        )}
      </div>
    </div>
  )
}

export default Bolt
