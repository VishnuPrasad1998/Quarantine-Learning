import React, { Component } from 'react'
import UpdatedComponents from './withHoc'

class ClickComponent extends Component {
    render() {
              const { count, incrementCount } = this.props
              return <button onClick={incrementCount}>{this.props.name} Clicked {count} times </button>  

    }
}
export default UpdatedComponents(ClickComponent, 5)