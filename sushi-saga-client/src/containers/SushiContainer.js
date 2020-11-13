import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const {sushis, moreSushis, eat} = props

  const sushiCards = sushis.map(sushi => <Sushi {...sushi} key={sushi.id} eat={eat} />)

  return (
    <Fragment>
      <div className="belt">
        { sushiCards }
        <MoreButton moreSushis={moreSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
