import React, { useContext } from 'react'
import { Switch } from 'react-native'
import { ThemeContext } from 'styled-components'

import Icon from 'react-native-vector-icons/Feather'

import { Container, Button } from './styles'

interface Props {
  toggleTheme(): void
}

const ThemeSwitcher: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      <Button onPress={toggleTheme}>
        <Icon
          name={title === 'light' ? 'sun' : 'moon'}
          size={30}
          color="#ff9000"
        />
      </Button>
    </Container>
  )
}

export default ThemeSwitcher
