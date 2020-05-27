import styled from 'styled-components/native'

export const Container = styled.View`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 35px;
  right: 15px;
`
export const Button = styled.TouchableOpacity`
  position: absolute;

  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: ${props => props.theme.colors.li};
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px black;
  elevation: 5;
`
