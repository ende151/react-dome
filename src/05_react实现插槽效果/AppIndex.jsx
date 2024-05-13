import React, { Component } from 'react'
import './style.css'
import PropTypes from 'prop-types'

export class AppIndex extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props
    return (
      // <div className='nav-bar'>
      //   <div className="left"> {children} </div>
      //   <div className="left"> {children[0]} </div>
      //   <div className="center"> {children[1]} </div>
      //   <div className="right"> {children[2]} </div>
      // </div>
      <div className='nav-bar'>
        <div className="left"> {leftSlot} </div>
        <div className="center"> {centerSlot} </div>
        <div className="right"> {rightSlot} </div>
      </div>
    )
  }
}
AppIndex.propTypes = {
  children: PropTypes.element
}
export default AppIndex
