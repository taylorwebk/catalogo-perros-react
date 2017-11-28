import React, {Component} from 'react'
import {Input, Container} from 'semantic-ui-react'
class Busqueda extends Component {
  render () {
    const {cambiarBusqueda} = this.props
    return (
      <Container>
        <Input
          icon='search'
          placeholder='Buscar raza...'
          size='big'
          onChange={cambiarBusqueda}
        />
      </Container>
    )
  }
}
export default Busqueda
