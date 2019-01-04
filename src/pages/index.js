import React from 'react'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <h1>JS Calculator</h1>
      <div>
        <buttton id="zero"></buttton>
        <button id="one"></button>
        <button id="two"></button>
        <button id="three"></button>
        <button id="four"></button>
        <button id="five"></button>
        <button id="six"></button>
        <button id="seven"></button>
        <button id="eight"></button>
        <button id="nine"></button>
      </div>
      <div>
        <button id="add"></button>
        <button id="subtract"></button>
        <button id="multiply"></button>
        <button id="divide"></button>
      </div>
      <div id="equals">
        <button type="button">=</button>
      </div>
    </div>
    
    
  </Layout>
)

export default IndexPage

