import { storeDatas } from "../data/storeDatas"
import StoreCard from "../shared/storeCard"

const Stores = () => {

    const filtered = storeDatas.filter(data => data.category === "men's clothing")

  return (
    <div  className="container-fluid row py-5 " style={{ minHeight: "100vh" }}>
      {filtered.map((storeData) => (
        <div key={storeData.id} className="col-3">
          <StoreCard  {...storeData} />
        </div>
      ))}
    </div>
  )
}

export default Stores
