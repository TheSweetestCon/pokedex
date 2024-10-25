import styled from 'styled-components/native'
import { css } from 'styled-components/native';

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.backgroundFire};
    `}
`;
    
export const Content = styled.View`
    justify-content: center;
    align-items: center;
    height: 70%;
`;

export const WrapperAnimation = styled.View`
    ${({theme}) => css`
        border-radius: 100px;
        height: 320px;
        width: 200px;
        background-color: ${theme.colors.types.fire};
        justify-content: center;
        align-items: center;
        transform: rotate(30deg);
    `}
`;

export const WrapperImage = styled.View`
    transform: rotate(-30deg);
`;

export const Footer = styled.View`
    ${({theme}) => css`
        justify-content: center;
        align-items: center;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        height: 30%;
        background-color: ${theme.colors.background};
        padding: 60px;
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 40px;
        font-weight: bold;
        color: ${theme.colors.text_white};
        margin-top: 20px;
    `}
`;
export const Subtitle = styled.Text`
    ${({theme}) => css`
        font-size: 14px;
        margin-top: 5px;
        color: ${theme.colors.text_white};
    `}
`;