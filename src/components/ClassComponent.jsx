import { Component } from 'react'
import withRouter from '../helpers/withRouter'

class ClassComponent extends Component {
  render() {
    console.log(this.props)
    return <h1>just a test...</h1>
  }
}

// export default ClassComponent

// normally this component, being a Class, shouldn't have access to location, navigate
// and params

// but, with our withRouter wrapper, we can enrich it with those values in the props!

export default withRouter(ClassComponent)
// now ClassComponent will have the same props as before, but also
// location, navigate and params
