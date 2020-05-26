import 'react-native-gesture-handler'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Light from './styles/themes/light'
import Dark from './styles/themes/dark'

import Routes from './routes'

import AppProvider from './hooks'

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={Light}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#312e38"
          translucent
        />
        <AppProvider>
          <View style={{ flex: 1, backgroundColor: '#312e38' }}>
            <Routes />
          </View>
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
