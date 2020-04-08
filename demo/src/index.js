import React, {Component} from 'react'
import {render} from 'react-dom'

// import Example1 from '../../src/components/Example1'
// import Example2 from '../../src/components/Example2'
import {Example1, Example2} from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>Demo component</h1>
      <Example1/>
      <Example2/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#app'))
