import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReactTooltip from 'react-tooltip'


class Tooltip extends Component {
  render() {
    const { utils } = this.props
    /* The whole goal of this component is to rerender tooltip when a new modal
       opens or a hidden element is rendered, because otherwise it won't appear. */
    //const key = utils.showModal
    //console.log("rerender tooltip")
    //key={key} 
    return (
      <ReactTooltip type="dark" effect="solid" delayShow={0} />
    )
  }
}

export default connect(({ utils }) => ({ utils }), {})(Tooltip)
