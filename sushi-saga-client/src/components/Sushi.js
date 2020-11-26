import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { eat } from "../redux/actionCreator"

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

// const mdp = (dispatch) => ({
//   eat: (id) => dispatch(eat(id))
// })

export default connect(null, { eat })(Sushi)
