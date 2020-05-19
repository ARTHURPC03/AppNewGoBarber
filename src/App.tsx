import React from 'react'
import { View, Text, StatusBar } from 'react-native'

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#312e38"
        translucent
      />
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Text>Oi</Text>
      </View>
    </>
  )
}

export default App
