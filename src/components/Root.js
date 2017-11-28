import React, { Component } from 'react'
import {Container} from 'semantic-ui-react'

import Encabezado from './Encabezado'
import Busqueda from './Busqueda'
import Lista from './Lista'

class Root extends Component {
  constructor (args) {
    super(args)
    this.state = {
      buscar: ''
    }
    this.cambiarBusqueda = this.cambiarBusqueda.bind(this)
  }
  cambiarBusqueda (e, {value}) {
    this.setState({
      buscar: value
    })
  }
  render () {
    const {buscar} = this.state
    return (
      <Container textAlign='center'>
        <Encabezado />
        <Busqueda cambiarBusqueda={this.cambiarBusqueda} />
        <Lista filtro={buscar} />
      </Container>
    )
  }
}

export default Root
