import React from 'react'
import {Container, Message} from 'semantic-ui-react'
const ErrorLista = ({mensaje}) => {
  return (
    <Container textAlign='left'>
      <br />
      <Message
        compact
        error
        icon='frown'
        header='Se produjo el siguiente error:'
        content={mensaje}
      />
    </Container>
  )
}
export default ErrorLista
