import React from 'react'

import { useAuth } from '../../hooks/auth'

import { Container, Button } from './styles'

const Dashboard: React.FC = () => {
  const { signOut } = useAuth()

  return (
    <Container>
      <Button title="Sair" onPress={signOut} />
    </Container>
  )
}

export default Dashboard
