import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>Home</h1>
    <h2>Hey my name is Mathias and I made this beautiful website</h2>
    <p>Did you know there are over 30 days in a year and over 12 seconds in a minute</p>
    <p>Math tests be like: Emma had 12 Apples and John took 3, What is the distance between the sun squared in factorials ¯\_(ツ)_/¯</p>
    <Link to='page-2' >Want to see the first few digits of pi?</Link>
    <br />
    <img src='/FatBastard.jpg' />
    <p>I had dinner like 15 minutes ago and I could not rember what I had for the life of me. It is like it never happend</p>
    <p>Hi</p>
  </Layout>
)

export default IndexPage
