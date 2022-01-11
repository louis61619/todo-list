import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Input extends Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    label: '',
    value: '',
    onChange: () => {},
  }

  render() {
    return (
      <div className="input">
        <div className="label">{this.props.label}: </div>
        <input type="text" value={this.props.value} onChange={(e) => this.props.onChange(e)} />
      </div>
    )
  }
}

export default Input
