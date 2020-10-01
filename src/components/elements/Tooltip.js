import React, { Component } from 'react'
import { connect } from 'react-redux'



class Tooltip extends Component {
  render() {
    const { utils } = this.props
    return (
      <div id="tooltip" className="top">
	  <div className="tooltip-arrow" />
	  <div className="tooltip-label">ToolTip Component</div>
      </div>
    )
  }
}

export default connect(({ utils }) => ({ utils }), {})(Tooltip)
