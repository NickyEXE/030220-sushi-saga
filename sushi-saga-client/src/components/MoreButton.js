import React from 'react'
import { connect } from 'react-redux'
import { moreSushis } from '../redux/actionCreator'

const MoreButton = (props) => {
    return <button onClick={props.moreSushis}>
            More sushi!
          </button>
}

export default connect(null, { moreSushis })(MoreButton)
