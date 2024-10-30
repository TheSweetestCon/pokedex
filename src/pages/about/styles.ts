import styled from 'styled-components/native'
import { css } from 'styled-components/native';
import * as Progress from 'react-native-progress'


type PropsType = {
    type:
      | 'grass'
      | 'fire'
      | 'water'
      | 'poison'
      | 'normal'
      | 'bug'
      | 'flying'
      | 'electric'
      | 'ground';
  };

  export const Header = styled.View<PropsType>`
    ${({ theme, type }) => css`
        background: ${theme.colors.backgroundCard[type]};
        height: 290px;
        padding: 30px;

        flex-direction: row;
        align-items: center;
        

        position: relative;
    `}
`;
export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 75px;
    left: 30px;
`;

export const ContentImage = styled.View`
    top: 25px;
    left: 15px;
    position: relative;
`;

export const CircleImage = styled.Image`
    width: 125px;
    height: 125px;
    right: 5px;
    position: absolute;
`;

export const PokemonImage = styled.Image`
    width: 125px;
    height: 125px;
`;

export const Content = styled.View`
    margin-top: 50px;
    margin-left: 40px;
`;

export const PokemonID = styled.Text`
    ${({theme}) => css`
        font-size: 16px;
        line-height: 19px;
        font-weight: bold;
        font-style: normal;
        color: ${theme.colors.light_text};
        margin-left: 5px;
    `}
`;

export const PokemonName = styled.Text`
    ${({theme}) => css`
        font-size: 26px;
        line-height: 30px;
        font-weight: bold;
        font-style: normal;
        color: ${theme.colors.text_white};
        text-transform: capitalize;
        margin-left: 5px;
    `}
`;

export const PokemonTypeContainer = styled.View`
    flex-direction: row;
`;

export const PokemonType = styled.View<PropsType>`
    ${({ theme, type }) => css`
        background: ${theme.colors.boxType[type]};
        width: 90px;
        height: 25px;
        border-radius: 3px;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
        margin-top: 10px;
    `}
`;

export const PokemonTypeText = styled.Text`
    ${({theme}) => css`
        font-size: 12px;
        line-height: 14px;
        font-weight: 500;
        font-style: normal;
        color: ${theme.colors.text_white};
        text-transform: uppercase;
    `}
`;

export const DotsImage = styled.Image`
    width: 100px;
    height: 10px;
    postion: absolute;
    margin-left: 10px;
    right: 50%;
    top: 85px;
`;

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        padding-top: 30px;
        padding-left: 20px;
        background-color: ${theme.colors.background};
        border-top-right-radius: 40px;
        border-top-left-radius: 40px;
        margin-top: -40px;
    `}
`;

export const Title = styled.Text<PropsType>`
    ${({theme, type}) => css`
        font-size: 25px;
        line-height: 40px;
        font-weight: bold;
        font-style: normal;
        padding-left: 20px;
        padding-top: 20px;
        color: ${theme.colors.boxType[type]};
        text-transform: capitalize;
    `}
`;

export const StatusBar = styled.View`
    width: 100%;
    padding-right: 30px;
    padding-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

export const Attributes = styled.Text`
    ${({theme}) => css`
        font-size: 12px;
        line-height: 14px;
        font-weight: 500;
        font-style: normal;
        color: ${theme.colors.light_text};
        text-transform: uppercase;

        width: 65px;
        text-align: right;
    `}
`;

export const AttributeValue = styled.Text`
    ${({theme}) => css`
        font-size: 12px;
        line-height: 14px;
        font-weight: 500;
        font-style: normal;
        color: ${theme.colors.detail};
        text-align: center;
        margin-left: 20px;
        width: 40px;
    `}
`;

export const ContentBar = styled.View`
    margin-left: 20px;
`;

export const ProgressBar = styled(Progress.Bar)<PropsType>`
    ${({theme, type}) => css`
        border-width: 2px;
        border-radius: 10px;
        border-color: ${theme.colors.backgroundCard[type]}
    `}
`;

export const TotalStats = styled.Text`
    ${({theme}) => css`
        font-size: 12px;
        line-height: 19px;
        font-weight: 500;
        font-style: normal;
        color: ${theme.colors.light_text};
        text-transform: uppercase;
        
        margin-top: 20px;
        width: 90%;
        text-align: center;
    `}
`;

export const Ability = styled.Text`
    ${({theme}) => css`
        font-size: 16px;
        line-height: 14px;
        font-weight: normal;
        font-style: normal;
        color: ${theme.colors.detail};
        padding: 10px  50px;
        text-transform: capitalize;
    `}
`;