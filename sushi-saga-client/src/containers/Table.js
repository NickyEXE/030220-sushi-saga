import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = () => {
    return props.eatenSushis.map((sushi, index) => {
      return <div className="empty-plate" key={sushi.id} style={{ top: -7 * index }}/>
    })
  }

  // total: 0, [{price: 10}, {price: 30}, {price: 42}]
  // (0, {price: 10})
  // // 10
  // total: 10, [{price: 30}, {price: 42}]
  // 10 + 30
  // total: 40, [{price: 42}]
  // 82

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.amountRemaining } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array
            */
            renderPlates()
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
