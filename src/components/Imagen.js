import React, {Component} from 'react'
import {Modal, Image, Dimmer, Loader, Header} from 'semantic-ui-react'
import axios from 'axios'

class Imagen extends Component {
  constructor (args) {
    super(args)
    this.state = {
      cargando: true,
      url: ''
    }
  }
  componentDidMount () {
    const {raza} = this.props
    axios.get(`https://dog.ceo/api/breed/${raza}/images/random`)
    .then(res => {
      this.setState({
        cargando: false,
        url: res.data.message
      })
    })
  }
  render () {
    const {raza, cerrarImagen} = this.props
    const {cargando, url} = this.state
    let contenido
    if (cargando) {
      contenido = <Dimmer active>
        <Loader size='massive'>Cargando Imagen...</Loader>
      </Dimmer>
    } else {
      contenido = <Image fluid src={url} />
    }
    return (
      <Modal open basic size='small' onClose={cerrarImagen} closeIcon>
        <Header>{raza.toUpperCase()}</Header>
        <Modal.Content>
          {contenido}
        </Modal.Content>
      </Modal>
    )
  }
}
export default Imagen
