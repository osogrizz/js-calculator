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
  grid-template-columns: repeat(4, 80px);
  grid-gap: 10px;
  justify-content: center;
  padding: 2%;
  
  button {
    font-size: 1.5rem;
    height: 60px;
  }
`
const Equal = styled.div`
// display: grid;
// grid-template-columns:  repeat(2, 160px);
// grid-gap: 30px;
// justify-content: center;
margin: auto;

#equal {
  font-size: 1.5rem;
  width: 210px;
  height: 60px;
}
`
const CalcDisplay = styled.div`
  color: orange;
  font-size: 1.5rem;
`

export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: parseFloat(0, 10),
      operator: '',
      answer: [],
      display: 0,
    }
    this.handleClear = this.handleClear.bind(this)
    this.handleKeyPad = this.handleKeyPad.bind(this)
    this.handleMath = this.handleMath.bind(this)
    this.handleDecimal = this.handleDecimal.bind(this)
  }
  handleClear = (e) => {
    this.setState({
      amount: 0,
      operator: '',
      display: ''
    })
  }

  handleKeyPad = (e) => {
    // if 
    this.setState({
      amount:  parseFloat(this.state.amount += e.target.value, 10),
      display: parseFloat(this.state.amount, 10)
    })
  }

  handleMath = (e) => {
    this.setState({
      operator: e.target.value,

    })

  }

  handleDecimal = () => {
    this.setState({
      amount: `${this.state.amount}.`
    })
  }
  
  doMath = (e) => {
    console.log('Calculating!!!')
  }


  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`freecodecamp`, `application`, `calculator`]} />
          <div>

            <CalcDisplay id="display" style={{color: 'orange'}}>
            {this.state.amount}
            </CalcDisplay>

            <Keypad>
              <button id="one" value="1" onClick={this.handleKeyPad}>1</button>
              <button id="two" value="2" onClick={this.handleKeyPad}>2</button>
              <button id="three" value="3" onClick={this.handleKeyPad}>3</button>
              <button id="add" value="+" onClick={this.handleMath} data-action="add" >+</button>

              <button id="four" value="4" onClick={this.handleKeyPad}>4</button>
              <button id="five" value="5" onClick={this.handleKeyPad}>5</button>
              <button id="six" value="6" onClick={this.handleKeyPad}>6</button>
              <button id="subtract" value="-" onClick={this.handleMath} data-action="subtract" >-</button>


              <button id="seven" value="7" onClick={this.handleKeyPad}>7</button>
              <button id="eight" value="8" onClick={this.handleKeyPad}>8</button>
              <button id="nine"  value="9" onClick={this.handleKeyPad}>9</button>
              <button id="multiply" value="x" onClick={this.handleMath} data-action="multiply" >x</button>


              <button id="zero" value="0" onClick={this.handleKeyPad}>0</button>
              <button id="decimal" onClick={this.handleDecimal} data-action="decimal" >.</button>
              <button id="clear" onClick={this.handleClear} data-action="clear" >AC</button>
              <button id="divide" value="%" onClick={this.handleMath} data-action="divide" >÷</button>
            </Keypad>

            <Equal id="equals">
              <button id="equal" type="button" onClick={this.doMath}>=</button>
            </Equal>
          </div>
      </Layout>
    )
  }
} 
