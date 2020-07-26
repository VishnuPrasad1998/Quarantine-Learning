import React, { Component } from 'react'
import UpdatedComponents from './withHoc'

class HoverComponent extends Component {    
    render() {
              const { count, incrementCount } = this.props
              return(
                  <div>
                      <h2 onMouseOver={incrementCount}>{this.props.name}hOVEREED {count} times </h2>
                  </div>
              ) 

    }
}
export default UpdatedComponents(HoverComponent, 4)