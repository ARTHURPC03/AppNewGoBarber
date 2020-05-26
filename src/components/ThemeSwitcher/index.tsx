import React, { useContext } from 'react'
import { Switch } from 'react-native'
import { ThemeContext } from 'styled-components'
import { Container } from './styles'

interface Props {
  toggleTheme(): void
}

const ThemeSwitcher: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      <Switch onValueChange={toggleTheme} />
    </Container>
  )
}

export default ThemeSwitcher
