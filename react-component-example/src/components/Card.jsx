import './Card.css'
 
export default function Card({imageURL,courseName,description}){
  return(
    <>
    <div className="card">
      <div className="card-image">
        <img src={imageURL}/>
        <h2>{courseName}</h2>
        <p>{description}</p>
        </div>
        </div>
            
    </>
  )
}

