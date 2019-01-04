import React, { Component } from 'react'
import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div>
            <h1>JS Calculator</h1>
            <div id="display">
            </div>
            <div>
              <button id="clear">AC</button>
              <button id="zero">0</button>
              <button id="one">1</button>
              <button id="two">2</button>
              <button id="three">3</button>
              <button id="four">4</button>
              <button id="five">5</button>
              <button id="six">6</button>
              <button id="seven">7</button>
              <button id="eight">8</button>
              <button id="nine">9</button>
              <button id="decimal">.</button>
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
