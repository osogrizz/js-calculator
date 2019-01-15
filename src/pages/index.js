import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'


const CalcWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  display: grid;
  width: 326px;
  grid-template-columns: auto;
  justify-content: center;
  box-shadow: 0px 5px 44px 0px rgba(0,0,0,0.8);
  border-radius: 10px;
`
  
const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-gap: 2px;
  justify-content: center;
  
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
  height: 80px;
  font-size: 2.3rem;
  padding: 8% 0 4%;
  justify-content: center;
  text-align: right;
  padding-right: 40px;
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

const MathView = styled.div`
  color: #777;
  padding-top: 8px;
  height: 35px;
`

export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 0,
      values: [],
      operator: '',
      history: '',
      dec: false,
    }
  }

  handleClear = (e) => {
    console.log('Clear!!!');
    this.setState({
      amount: 0,
      values: [],
      operator: '',
      history: '',
      dec: false
    })
  }

  handleDecimal = (e) => {
    
    if (!this.state.dec) {
      console.log(`Decimal!`);
      this.setState({
        history: this.state.history + e.target.value,
        amount: this.state.amount += e.target.value,
        dec: true
      })
    }
    
  }

  handleKeyPad = (e) => {
    console.log(`Numbaaahs! ${e.target.value} `);
    this.setState({
      history: this.state.history + e.target.value,
      amount: this.state.amount += e.target.value,
    }, () => {
      this.setState({
        amount: this.state.amount.replace(/0?/,'')
      })
    })

  }


  handleOpKey = (e) => {
   console.log(`Smooth Operator ${e.target.value}`);
   this.setState({
     dec: false,
     amount: 0,
   })
    
  }
  
  handleCalc = (e, previousState) => {
    console.log(`Calculating!!!`);
  }


  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`freecodecamp`, `application`, `calculator`]} />
          <CalcWrapper>

            <MathView>{this.state.history}</MathView> 
            <CalcDisplay id="display">
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
              <OpBtn id="multiply" value="*" onClick={this.handleOpKey} data-action="multiply">x</OpBtn>


              <NumBtn id="seven" value="7" onClick={this.handleKeyPad}>7</NumBtn>
              <NumBtn id="eight" value="8" onClick={this.handleKeyPad}>8</NumBtn>
              <NumBtn id="nine"  value="9" onClick={this.handleKeyPad}>9</NumBtn>
              <OpBtn id="divide" value="/" onClick={this.handleOpKey} data-action="divide">÷</OpBtn>

              <LastRow>
                <NumBtn id="zero" value="0" onClick={this.handleKeyPad}>0</NumBtn>
                <NumBtn id="decimal" value="." onClick={this.handleDecimal} data-action="decimal">.</NumBtn>
                <OpBtn id="equals" value="=" type="button" onClick={this.handleCalc}>=</OpBtn>
              </LastRow>

            </Keypad>
          </CalcWrapper>
      </Layout>
    )
  }
} 
