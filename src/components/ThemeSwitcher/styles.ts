import styled from 'styled-components/native'

export const Container = styled.View`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 30px;
  right: 7.5px;
`
export const Button = styled.TouchableOpacity`
  position: absolute;

  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: ${props => props.theme.colors.li};
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px black;
  elevation: 5;
`
