import React, { Component } from 'react'
import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import styled from 'styled-components'

  
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
      amount: 0,
      numZero: false,
      operator: '',
      answer: [],
      dec: false
    }
    
  }
  handleClear = (e) => {
    this.setState({
      amount: 0,
      operator: '',
      dec: false
      // answer: this.state.answer = []
    })
  }

  handleKeyPad = (e) => {
    this.setState({
      amount: this.state.amount += e.target.value,
      amount: this.state.amount.replace(/0?/,'') 
    })
    
    
  }

  handleOpKey = (e, previousState) => {
    console.log(this.state.amount)
    let tally = this.state.answer.push(this.state.amount)
    this.setState({
      answer: [],
      amount: 0,
      dec: false
    })
    console.log(e.target.value)
    console.log(this.state.answer)
    console.log('Your tally is:', tally)
  }
  
  handleDecimal = (e) => {
    console.log('Add me .')
    this.setState({
      dec: true
    })

    if (this.state.dec == false) {
      this.setState({
        amount: this.state.amount + '.'
      })
    }
  }
  
  doMath = (e) => {
    this.setState({
      // answer: this.state.answer.push(e.target.amount),
      // amount: 0
    })
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
              <button id="add" value="+" onClick={this.handleOpKey} data-action="add" >+</button>

              <button id="four" value="4" onClick={this.handleKeyPad}>4</button>
              <button id="five" value="5" onClick={this.handleKeyPad}>5</button>
              <button id="six" value="6" onClick={this.handleKeyPad}>6</button>
              <button id="subtract" value="-" onClick={this.handleOpKey} data-action="subtract" >-</button>


              <button id="seven" value="7" onClick={this.handleKeyPad}>7</button>
              <button id="eight" value="8" onClick={this.handleKeyPad}>8</button>
              <button id="nine"  value="9" onClick={this.handleKeyPad}>9</button>
              <button id="multiply" value="x" onClick={this.handleOpKey} data-action="multiply" >x</button>


              <button id="zero" value="0" onClick={this.handleKeyPad}>0</button>
              <button id="decimal" onClick={this.handleDecimal} data-action="decimal" >.</button>
              <button id="clear" onClick={this.handleClear} data-action="clear" >AC</button>
              <button id="divide" value="÷" onClick={this.handleOpKey} data-action="divide" >÷</button>
            </Keypad>

            <Equal id="equals">
              <button id="equal" type="button" onClick={this.doMath}>=</button>
            </Equal>
          </div>
      </Layout>
    )
  }
} 
