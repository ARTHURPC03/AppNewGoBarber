/* eslint-disable @typescript-eslint/explicit-function-return-type */
import 'react-native-gesture-handler'

import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import ThemeSwitcher from './components/ThemeSwitcher'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import Routes from './routes'

import AppProvider from './hooks'

const App: React.FC = () => {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#312e38"
          translucent
        />
        <AppProvider>
          <View
            style={{
              flex: 1,
              backgroundColor: '#312e38',
            }}
          >
            <Routes />
            <ThemeSwitcher toggleTheme={toggleTheme} />
          </View>
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
