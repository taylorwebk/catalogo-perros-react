import React, {Component} from 'react'
import axios from 'axios'
import {Segment, Dimmer, Loader} from 'semantic-ui-react'

import ListaComp from './ListaComp'
import ErrorLista from './ErrorLista'
class Lista extends Component {
  constructor (args) {
    super(args)
    this.state = {
      mascotas: [],
      mensajeError: ''
    }
  }
  componentDidMount () {
    axios.get('https://dog.ceo/api/breeds/list')
    .then(res => {
      this.setState({
        mascotas: res.data.message
      })
    })
    .catch(err => {
      this.setState({
        mensajeError: err.message
      })
    })
  }
  render () {
    const {mascotas, mensajeError} = this.state
    const {filtro} = this.props
    let contenido
    if (mensajeError.length) {
      return <ErrorLista mensaje={mensajeError} />
    }
    if (mascotas.length > 0) {
      let contenidoFiltrado
      if (filtro.length) {
        contenidoFiltrado = mascotas.filter(
          (m) => !(m.indexOf(filtro) === -1)
        )
      } else {
        contenidoFiltrado = mascotas
      }
      contenido = <ListaComp lista={contenidoFiltrado} />
    } else {
      contenido = <Dimmer active inverted>
        <Loader inverted>Cargando...</Loader>
      </Dimmer>
    }
    return (
      <Segment>
        {contenido}
        <br />
        <br />
      </Segment>
    )
  }
}
export default Lista
