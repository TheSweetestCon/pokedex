import styled, { css } from "styled-components/native";

type PokemonType = {
    type: string
}

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
    ${({theme, type}) => css`
        background-color: ${theme.colors.backgroundCard[type]};
        border-radius: 30px;
        margin-top: 30px;
        flex-direction: row;
        padding-top: 15px;
        padding-bottom: 5px;
        padding-left: 20px;
        padding-right: 20px;
    `}
`;

export const LeftSide = styled.View`
    width: 60%;
    position: relative;
`;

export const PokemonID = styled.Text`
    ${({theme}) => css`
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        margin-left: 5px;
        color: ${theme.colors.light_text}
    `}
`;

export const PokemonName = styled.Text`
    ${({theme}) => css`
        font-weight: bold;
        font-size: 25px;
        line-height: 31px;
        margin-top: 5px;
        margin-left: 5px;
        text-transform: capitalize;
        color: ${theme.colors.text_white}
    `}
`;

export const ImageCardDetailLeftSide = styled.Image`
    position: absolute;
    width: 74px;
    height: 32px;
    left: 80px;
    top: -5px;
`;

export const PokemonContentType = styled.View`
    flex-direction: row;
`;

export const PokemonType = styled.View<PokemonType>`
    ${({theme, type}) => css`
        background-color: ${theme.colors.boxType[type]};
        padding: 5px;
        width: 65px;
        height: 25px;
        border-radius: 3px;
        margin-left: 5px;
        margin-top: 5px;
        justify-content: center;
        align-items: center;
    `}
`;

export const PokemonTypeText = styled.Text`
    ${({theme}) => css`
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;
        color: ${theme.colors.text_white}
    `}
`;

export const RightSide = styled.View`
    justify-content: center;
    align-items: center;
    width: 40%;
    position: relative;
`;

export const PokemonImage = styled.Image`
    margin-top: -40px;
    width: 130px;
    height: 130px;
`;

export const PokeballDetail = styled.Image`
    position: absolute;
    right: -20px;
    top: -15px;
`;
