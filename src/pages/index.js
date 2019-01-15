import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'


const CalcWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  margin-top: 100px;
  display: grid;
  width: 326px;
  grid-template-columns: auto;
  justify-content: center;
  box-shadow: 0px 5px 44px 0px rgba(0,0,0,0.8);
  border-radius: 10px;
  background: #222;
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
  // background: #222;
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
  // background: #222;
`

export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 0,
      values: [],
      prevOperator: '',
      operator: '',
      history: '',
      dec: false,
    }
  }

  handleClear = (e) => {
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
      this.setState({
        history: this.state.history + e.target.value, // eslint-disable-next-line
        amount: this.state.amount += e.target.value,
        dec: true
      })
    }
    
  }

  handleKeyPad = (e) => {
    this.setState({
      history: this.state.history + e.target.value, // eslint-disable-next-line
      amount: this.state.amount += e.target.value,
    }, () => {
      this.setState({
        amount: this.state.amount.replace(/0?/,'')
      })
    })

  }

  handleOpKey = (e) => {
    this.setState({
      prevOperator: this.state.operator
    }, () => {
      console.log(this.state.prevOperator);

    })

    console.log(`Smooth Operator ${e.target.value}`);
    if (this.state.values.length + 1  > 1) {
      console.log(this.state.values.length);
      
      //let num1 = this.state.values[1] //=== this.state.values.length -1)
      //let num2 = this.state.values[0] //=== newVal)

      this.setState({
        values: [...this.state.values]
      }, () => {
        let num1 = parseFloat(this.state.values[0])
        let num2 = parseFloat(this.state.values[1])
        let result = 0
        console.log('values =', this.state.values);

        if (this.state.prevOperator === '+') {
          result = num1 + num2
          console.log('result =', result);
          // this.setState({
          //   dec: false,
          //   values: result
          //   // amount: result,
          // })
        }
        if (this.state.prevOperator === '-') {
          result = num1 - num2
          console.log('result =', result);
          // this.setState({
          //   dec: false,
          //   values: result
          //   // amount: result,
          // })
        }
        if (this.state.prevOperator === '*') {
          result = num1 * num2
          console.log('result =', result);
          // this.setState({
          //   dec: false,
          //   values: result
          //   // amount: result,
          // })
        }
        if (this.state.prevOperator === '/') {
          result = num1 / num2
          console.log('result =', result);
          // this.setState({
          //   dec: false,
          //   values: result
          //   // amount: result,
          // })
        }
        this.setState({
          // dec: false,
          // values: [...this.state.values, result],
          // amount: result,
        }, () => {
          console.log('new values =', this.state.values);
          
        })
        
      })
    }
    
    
    this.setState({
      operator: e.target.value,
      dec: false,
      amount: 0,
      history: this.state.history + e.target.value,
      values: [...this.state.values, ...this.state.amount]
    })
    
  }
  
  handleCalc = (e, previousState) => {
    this.setState({
      values: [...this.state.values, ...this.state.amount],
    }, () => {
      console.log(this.state.values);
      console.log(this.state.values[0]);
      console.log(this.state.values[1]);
      let num1 = parseFloat(this.state.values[0])
      let num2 = parseFloat(this.state.values[1])
      let result = 0

      if ( this.state.operator  === '+'  ) {
        result = num1 + num2
      } 
      if (this.state.operator === '-') {
        result = num1 - num2
      }
      if (this.state.operator === '*') {
        result = num1 * num2
      }
      if (this.state.operator === '/') {
        result = num1 / num2
      }
      
      this.setState({
        dec: false,
        amount: result,
        values: [],
      })
    })
    this.setState({
      values: [this.state.values, ...this.state.amount]
    })
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
