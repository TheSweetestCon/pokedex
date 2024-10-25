import styled, {css} from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    ${({theme}) => css`
        width: 100%;
        height: 50%;
        background-color: ${theme.colors.types.fire};
        border-radius: 50px;

        justify-content: center;
        align-items: center;
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 20px;
        color: ${theme.colors.text_white};
        text-transform: uppercase;
        font-weight: bold;
    `}
`;