import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import { connect } from 'react-redux'
import { getSushis } from '../redux/actionCreator'

class SushiContainer extends Component {

  componentDidMount(){
    this.props.getSushis()
  }

  render(){
    const {sushis, offset} = this.props
    const fourSushis = sushis.slice(offset, offset + 4)
    const sushiCards = fourSushis.map(sushi => <Sushi {...sushi} key={sushi.id} />)
    return (
      <Fragment>
        <div className="belt">
          { sushiCards }
          <MoreButton />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  sushis: state.sushis,
  offset: state.offset
})

// const mapDispatchToProps = (dispatch) => ({
//   // setSushis: (sushis) => dispatch({type: "SET_SUSHIS", payload: {sushis}}),
//   getSushis: () => dispatch(getSushis())
// })

export default connect(mapStateToProps, {getSushis})(SushiContainer)
