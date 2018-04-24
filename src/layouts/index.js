import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import {Grid, Row} from 'react-styled-flexboxgrid'
import {ThemeProvider} from 'styled-components'

import Hamburger from '../components/hamburger'
import theme from './theme'
import './index.sass'

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Grid fluid>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name='description' content='description' />
      </Helmet>

      <header>
        <Row middle='xs' between='xs' xs={12}>
          <Link to='/'>
            <h1>{data.dataYaml.corporate.name}</h1>
          </Link>
          <Link to='/'>
            <Hamburger />
          </Link>
        </Row>
      </header>

      <main>
        {children()}
      </main>
    </Grid>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }).isRequired,
    dataYaml: PropTypes.shape({
      corporate: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Layout

export const query = graphql`
  query LayoutQuery {
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
