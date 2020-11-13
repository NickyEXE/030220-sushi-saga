import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    offset: 0
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      const newSushis = sushis.map(sushi => ({...sushi, eaten: false}))
      this.setState({sushis: newSushis})
    })
  }

  fourSushis = () => {
    const {sushis, offset} = this.state
    return sushis.slice(offset, offset + 4)
  }

  moreSushis = () => {
    const {offset, sushis} = this.state
    if (offset + 4 < sushis.length - 1){
      this.setState({ offset: offset + 4 })
    }
    else {
      this.setState({ offset: 0 })
    }
  }

  eat = (id) => {
    const sushis = this.state.sushis.map(sushi => {
      if (sushi.id === id){
        if (sushi.price < this.amountRemaining()){
          sushi.eaten = true
        }
      }
      return sushi
    })
    this.setState({sushis})
  }

  eatenSushis = () => this.state.sushis.filter(sushi => sushi.eaten)

  amountRemaining = () => 200 - this.eatenSushis().reduce((total, nextSushi) => total + nextSushi.price, 0)

  render() {
    console.log(this.state.sushis)
    return (
      <div className="app">
        <SushiContainer sushis={this.fourSushis()} eat={this.eat} moreSushis={this.moreSushis} />
        <Table amountRemaining={this.amountRemaining()} eatenSushis={this.eatenSushis()}/>
      </div>
    );
  }
}

export default App;
