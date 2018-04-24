import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Typist from 'react-typist'

const cursor = { show: false }

const IndexPage = ({ transition }) => (
  <div style={transition && transition.style}>
    CHROGO
    <Typist cursor={cursor}>
      <h1>黒衣あいうえおあいうえおあいうえおあいうえおあいうえお</h1>
    </Typist>
  </div>
)

IndexPage.propTypes = {
  transition: PropTypes.shape({
    style: PropTypes.object,
  }),
}

export default IndexPage
