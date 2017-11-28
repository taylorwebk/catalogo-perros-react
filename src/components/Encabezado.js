import React, {Component} from 'react'
import {Header, Icon} from 'semantic-ui-react'
class Encabezado extends Component {
  render () {
    return (
      <Header color='brown' as='h1' icon>
        <br />
        <Icon name='paw' color='brown' />
        <Header.Content>
          Catalogo de Perros
        </Header.Content>
        <Header.Subheader>
          Catalodo de mascotas caninas para ver sus fotos.
        </Header.Subheader>
      </Header>
    )
  }
}
export default Encabezado
