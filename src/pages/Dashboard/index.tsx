import React from 'react'
import { View, Button } from 'react-native'

import { useAuth } from '../../hooks/auth'

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth()

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Sair" onPress={signOut} />
    </View>
  )
}

export default Dashboard
