import React, { Component } from 'react'
import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 0

    }
    this.handleClear = this.handleClear.bind(this)
  }
  handleClear = (e) => {
    this.setState({
      amount: 0
    })
  }

  handleKeyPad = (e) => {
    this.setState({
      amount: parseInt(this.state.amount += e.target.value, 10)
    })
  }
  

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div>
            <h1>JS Calculator</h1>
            <div id="display">
            {this.state.amount}
            </div>

            <div>
              <button id="clear" onClick={this.handleClear} value={this.state.amount}>AC</button>

              <button id="zero" value="0" onClick={this.handleKeyPad}>0</button>
              <button id="one" value="1" onClick={this.handleKeyPad}>1</button>
              <button id="two" value="2" onClick={this.handleKeyPad}>2</button>
              <button id="three" value="3" onClick={this.handleKeyPad}>3</button>
              <button id="four" value="4" onClick={this.handleKeyPad}>4</button>
              <button id="five" value="5" onClick={this.handleKeyPad}>5</button>
              <button id="six" value="6" onClick={this.handleKeyPad}>6</button>
              <button id="seven" value="7" onClick={this.handleKeyPad}>7</button>
              <button id="eight" value="8" onClick={this.handleKeyPad}>8</button>
              <button id="nine"  value="9" onClick={this.handleKeyPad}>9</button>
              <button id="decimal" value="." onClick={this.handleKeyPad}>.</button>
            </div>

            <div>
              <button id="add">+</button>
              <button id="subtract">-</button>
              <button id="multiply">x</button>
              <button id="divide">%</button>
            </div>

            <div id="equals">
              <button type="button">=</button>
            </div>
          </div>
      </Layout>
    )
  }
}
