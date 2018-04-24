import React from 'react'
import Link from 'gatsby-link'

export default class IndexPage extends React.PureComponent {
  render() {
    return (
      <div style={this.props.transition && this.props.transition.style}>
        CHROGO
      </div>
    )
  }
}
