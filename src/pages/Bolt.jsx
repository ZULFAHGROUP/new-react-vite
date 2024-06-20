import BoltButton from "../shared/BoltButton"
import BoltCardAndText from "../shared/BoltCardAndText"

const Bolt = () => {
  return (
    <div className="w-100 text-center" style={{ height: "100vh" }}>
      <h1>Earn money with Bolt</h1>
      <div className="d-flex justify-content-center gap-3">
        <BoltButton text="Driver" />
        <BoltButton text="Courier" />
        <BoltButton text="Restaurant or store owner" />
        <BoltButton text="Fleet owner" />
      </div>
          <div className="mt-4">
          <BoltCardAndText />
      </div>
    </div>
  )
}

export default Bolt
