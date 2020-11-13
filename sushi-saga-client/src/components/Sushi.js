import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {name, img_url, price, eaten, eat, id} = props
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => eat(id)}>
        { !eaten && <img src={img_url} alt={name} width="100%" /> }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
