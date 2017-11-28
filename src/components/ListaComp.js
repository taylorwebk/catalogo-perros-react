import React, {Component} from 'react'
import {List, Button, Icon} from 'semantic-ui-react'
import Imagen from './Imagen'
class ListaComp extends Component {
  constructor (args) {
    super(args)
    this.state = {
      mostrarImagen: false,
      raza: ''
    }
    this.mostrarImagen = this.mostrarImagen.bind(this)
    this.cerrarImagen = this.cerrarImagen.bind(this)
  }
  mostrarImagen (raza) {
    this.setState({
      mostrarImagen: true,
      raza: raza
    })
  }
  cerrarImagen () {
    this.setState({
      mostrarImagen: false
    })
  }
  render () {
    const {lista} = this.props
    const {mostrarImagen, raza} = this.state
    let contenido = lista.map((raza, i) => (
      <List.Item key={i}>
        <List.Content floated='right'>
          <Button
            color='brown'
            inverted
            onClick={() => { this.mostrarImagen(raza) }}
          >
            Ver Foto
          </Button>
        </List.Content>
        <Icon circular name='paw' />
        <List.Content>
          {raza}
        </List.Content>
      </List.Item>
    ))
    return (
      <List divided verticalAlign='middle'>
        {contenido}
        {mostrarImagen ? <Imagen cerrarImagen={this.cerrarImagen} raza={raza} /> : null}
      </List>
    )
  }
}
export default ListaComp
