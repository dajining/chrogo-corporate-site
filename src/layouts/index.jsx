import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PageTransition from 'react-router-page-transition'

import Main from '../components/main'
import Header from '../components/header'
import BrandName from '../components/brand-name'
import Hamburger from '../components/hamburger'
import './index.scss'

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    dataYaml {
      corporate {
        name
      }
    }
  }
`

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.object.isRequired,
      }).isRequired,
      dataYaml: PropTypes.shape({
        corporate: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }

  state = {
    active: false,
  }

  render = () => (
    <Main>
      <Helmet
        title={this.props.data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />

      <Header>
        <BrandName>
          <Link to='/'>{this.props.data.dataYaml.corporate.name}</Link>
        </BrandName>
        <Hamburger
          active={this.state.active}
          onClick={() => this.setState({ active: !this.state.active })}
        />
      </Header>

      <PageTransition>
        {this.props.children()}
      </PageTransition>
    </Main>
  )
}
