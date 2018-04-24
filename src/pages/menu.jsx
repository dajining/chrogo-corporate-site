import React from 'react'
import Link from 'gatsby-link'

export default class MenuPage extends React.PureComponent {
  render() {
    return (
      <div style={this.props.transition && this.props.transition.style}>
        <h1>animals</h1>
        <div>
          <Link to="/">HOME</Link>
        </div>
        <div>
          <Link to="/dog/">Go to dog</Link>
        </div>
        <div>
          <Link to="/long-page/">Go to long page</Link>
        </div>
      </div>
    )
  }
}
