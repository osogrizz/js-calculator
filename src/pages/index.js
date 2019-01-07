import React, { Component } from 'react'
import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import styled from 'styled-components'


const CalcWrapper = styled.div`
  display: grid;
  grid-template-columns: 330px;
  justify-content: center;
`
  
const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-gap: 2px;
  justify-content: center;
  padding: 2%;
  
  button {
    font-size: 1.5rem;
    height: 60px;
  }
`
const LastRow = styled.div`
  display: grid;
  grid-template-columns: 162px 80px 80px;
  grid-gap: 2px;
  justify-content: center;
  margin: auto;
`
const CalcDisplay = styled.div`
  display: grid;
  grid-template-columns: 320px;
  color: #fff;
  font-size: 1.8rem;
  padding: 8% 0 4%;
  justify-content: center;
  text-align: right;
`
const OpBtn = styled.button`
  background-color: orange;
  color: #fff;
  border: none;
`

const SpecBtn = styled.button`
  background-color: #444;
  border: none;
  color: #fff;
`
const NumBtn = styled.button`
  background-color: #888;
  border: none;
  color: #fff;
`

export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 0,
      operator: '',
      answer: [],
      dec: false,
      result: 0,
    }
    
  }

  handleClear = (e) => {
    this.setState({
      amount: 0,
      operator: '',
      dec: false,
      answer: [],
    })
  }

  handleKeyPad = (e) => {
    this.setState({ 
      amount: this.state.amount += e.target.value,
    })
    this.setState({
      amount: this.state.amount.replace(/0?/,'') ,
      answer: [...this.state.answer, ...this.state.amount],
    })
  }


  handleOpKey = (e) => {
    console.log('operator amount =', this.state.amount)

    this.setState({
      operator: e.target.value,
      dec: false,
      answer: this.state.answer[this.state.answer.length -1]
    })
    this.setState({
      amount: 0,
    })

    
    // return [...this.state.answer]
    console.log('answer =', this.state.answer.length -1)
  }
  
  handleDecimal = (e) => {
    this.setState({
      dec: true
    })

    if (this.state.dec === false) {
      
      this.setState({
        amount: this.state.amount + e.target.value
      })
    }
  }
  
  handleCalc = (e, previousState) => {
    let result = 0
    // let num1 = 
    let num2 = parseFloat(this.state.answer[this.state.answer.length -1])
    if ( this.state.operator === '+' ) {
      result = parseFloat(this.state.answer[0]) + num2
    } else if (this.state.operator === '-') {
      result = parseFloat(this.state.answer[0]) - num2
    } else if (this.state.operator === 'x') {
      result = parseFloat(this.state.answer[0]) * num2
    } else if (this.state.operator === '÷') {
      result = parseFloat(this.state.answer[0]) / num2
    }

    console.log('Calculating!!!')
    
    this.setState({
      dec: false,
      answer: [...this.state.answer, ...this.state.amount],
      amount: result,
      answer: [...this.state.answer, result]
    })
    console.log('result =', result);
    console.log('amount =', this.state.amount);
    console.log(this.state.answer);
  }


  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`freecodecamp`, `application`, `calculator`]} />
          <CalcWrapper>

            <CalcDisplay id="display">
            {/* <div>{this.state.result}</div>  */}
            {this.state.amount}
            </CalcDisplay>

            <Keypad>
              <SpecBtn id="clear" onClick={this.handleClear} data-action="clear">AC</SpecBtn>
              <SpecBtn id="negative" onClick={this.toggleNegative} data-action="negativToggle">+/-</SpecBtn>
              <SpecBtn id="percentage" onClick={this.toggleNegative} data-action="percentage">%</SpecBtn>
              <OpBtn id="add" value="+" onClick={this.handleOpKey} data-action="add">+</OpBtn>

              <NumBtn id="one" value="1" onClick={this.handleKeyPad}>1</NumBtn>
              <NumBtn id="two" value="2" onClick={this.handleKeyPad}>2</NumBtn>
              <NumBtn id="three" value="3" onClick={this.handleKeyPad}>3</NumBtn>
              <OpBtn id="subtract" value="-" onClick={this.handleOpKey} data-action="subtract">-</OpBtn>

              <NumBtn id="four" value="4" onClick={this.handleKeyPad}>4</NumBtn>
              <NumBtn id="five" value="5" onClick={this.handleKeyPad}>5</NumBtn>
              <NumBtn id="six" value="6" onClick={this.handleKeyPad}>6</NumBtn>
              <OpBtn id="multiply" value="x" onClick={this.handleOpKey} data-action="multiply">x</OpBtn>


              <NumBtn id="seven" value="7" onClick={this.handleKeyPad}>7</NumBtn>
              <NumBtn id="eight" value="8" onClick={this.handleKeyPad}>8</NumBtn>
              <NumBtn id="nine"  value="9" onClick={this.handleKeyPad}>9</NumBtn>
              <OpBtn id="divide" value="÷" onClick={this.handleOpKey} data-action="divide">÷</OpBtn>

              <LastRow>
                <NumBtn id="zero" value="0" onClick={this.handleKeyPad}>0</NumBtn>
                <NumBtn id="decimal" value="." onClick={this.handleDecimal} data-action="decimal">.</NumBtn>
                <OpBtn id="equals" type="button" onClick={this.handleCalc}>=</OpBtn>
              </LastRow>
            </Keypad>
          </CalcWrapper>
      </Layout>
    )
  }
} 
