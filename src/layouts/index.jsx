import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled, {ThemeProvider} from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

import Hamburger from '../components/hamburger'
import theme from './theme'
import './index.sass'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`

const Header = styled.header`
  flex-grow: 1;
  width: 100%;
  height: 5rem;
`

const Main = styled.main`
  height: 100%;
  width: 100%;
`

const Footer = styled.footer`
 align-self: flex-end;
 flex-grow: 1; 
 width: 100%;
 height: 3rem;
`

const Menu = styled.nav`
  width: 100%;
  text-align: center;
`

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Grid fluid>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name='description' content='description' />
      </Helmet>

      <div className='container'>
        <header>
          <Row middle='xs' between='xs' xs={12} top='xs'>
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

        <footer>
          <Row middle='xs' around='xs' xs={12}>
            <Col xs={4}>
            </Col>
            <Col xs={8}>
              <nav>
                <Row middle='xs' around='xs' xs={8}>
                  <Col xs={3} center='xs'>
                    <Link to='/'>MENU 1</Link>
                  </Col>
                  <Col xs={3}>
                    <Link to='/'>MENU 2</Link>
                  </Col>
                  <Col xs={3}>
                    <Link to='/'>MENU 3</Link>
                  </Col>
                </Row>
              </nav>
            </Col>
          </Row>
        </footer>
      </div>
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
