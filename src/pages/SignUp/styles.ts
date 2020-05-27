import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`

export const Title = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.text};
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${props => props.theme.colors.background};
  border-top-width: 1px;
  border-color: ${props => props.theme.colors.li};
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const BackToSignInText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  font-family: 'RoboSlab-Regular';
  margin-left: 16px;
`
