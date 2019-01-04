import React, { Component } from 'react'
import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import styled from 'styled-components'

const Display = styled.div`
  display: grid;

`

const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 120px);
  grid-gap: 10px;
  justify-content: center;
`

export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 0,
      operator: '',
      display: '',
      answer: []
    }
    this.handleClear = this.handleClear.bind(this)
    this.handleKeyPad = this.handleKeyPad.bind(this)
    this.handleMath = this.handleMath.bind(this)
  }
  handleClear = (e) => {
    this.setState({
      amount: 0,
      operator: '',

    })
  }

  handleKeyPad = (e) => {
    this.setState({
      amount: parseFloat(this.state.amount += e.target.value, 10),

    })
  }

  handleMath = (e) => {
    this.setState({
      operator: e.target.value,

    })

  }

  handleDecimal = (e) => {
    this.setState({
      // amount: this.state.amount.concat('.')
    })
  }
  


  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`freecodecamp`, `application`, `calculator`]} />
          <div>

            <div style={{color: 'orange'}}>{this.state.display}</div>
            <div id="display" style={{color: '#fff'}}>
            {this.state.amount}
            </div>

            <Keypad>
              <button id="one" value="1" onClick={this.handleKeyPad}>1</button>
              <button id="two" value="2" onClick={this.handleKeyPad}>2</button>
              <button id="three" value="3" onClick={this.handleKeyPad}>3</button>
              <button id="four" value="4" onClick={this.handleKeyPad}>4</button>
              <button id="five" value="5" onClick={this.handleKeyPad}>5</button>
              <button id="six" value="6" onClick={this.handleKeyPad}>6</button>
              <button id="seven" value="7" onClick={this.handleKeyPad}>7</button>
              <button id="eight" value="8" onClick={this.handleKeyPad}>8</button>
              <button id="nine"  value="9" onClick={this.handleKeyPad}>9</button>
              <button id="zero" value="0" onClick={this.handleKeyPad}>0</button>
              <button id="decimal" value="." onClick={this.handleDecimal}>.</button>
              <button id="clear" onClick={this.handleClear} value={this.state.amount}>AC</button>
            </Keypad>

            <div>
              <button id="add" value="+" onClick={this.handleMath} >+</button>
              <button id="subtract" value="-" onClick={this.handleMath} >-</button>
              <button id="multiply" value="x" onClick={this.handleMath} >x</button>
              <button id="divide" value="%" onClick={this.handleMath} >%</button>
            </div>

            <div id="equals">
              <button type="button" onClick={this.doMath}>=</button>
            </div>
          </div>
      </Layout>
    )
  }
}
