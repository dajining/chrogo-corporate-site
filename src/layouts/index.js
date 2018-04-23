import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import BrandName from '../components/brand-name'
import Hamburger from '../components/hamburger'
import Header from '../components/header'
import Main from '../components/main'
import './index.scss'

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

  render () {
    const activeMenu = this.props.location.pathname.includes('menu')

    return (
      <div>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Header>
          <Link to='/'>
            <BrandName>
              {this.props.data.dataYaml.corporate.name}
            </BrandName>
          </Link>

          <Link to={activeMenu ? '/' : '/menu'}>
            <Hamburger active={activeMenu} />
          </Link>
        </Header>

        {this.props.children()}
      </div>
    )
  }
}

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
