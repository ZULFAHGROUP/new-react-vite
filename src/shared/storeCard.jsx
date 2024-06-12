/* eslint-disable react/prop-types */
const StoreCard = ({ title,price,description,image,color}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
              <h5 className={`card-title ${color}`}>{ title}</h5>
              <p className="card-title fs-4 ">&#8358;{price}</p>
        <p className="card-text">
          {description}
        </p>
      </div>
    </div>
  )
}

export default StoreCard
