import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 50 : 40}px;
  position: relative;
`

export const Title = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.text};
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`

export const BackButton = styled.TouchableOpacity`
  margin-top: 80px;
`

export const UserAvatarButton = styled.TouchableOpacity`
  /* margin-top: 32px; */
`

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;

  align-self: center;
`
