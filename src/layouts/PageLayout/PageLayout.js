
import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import Header from '../../components/Header'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
<Header/>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout