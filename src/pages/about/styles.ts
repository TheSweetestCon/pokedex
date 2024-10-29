import styled from 'styled-components/native'
import { css } from 'styled-components/native';


type PropsType = {
    type:
      | 'grass'
      | 'fire'
      | 'water'
      | 'poison'
      | 'normal'
      | 'bug'
      | 'flying'
      | 'eletric'
      | 'ground';
  };

  export const Header = styled.View<PropsType>`
    ${({ theme, type }) => css`
        background: ${theme.colors.backgroundCard[type]};
        height: 340px;
        padding: 20px;

        flex-direction: row;
        align-items: center;

        position: relative;
    `}
`;
export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 70px;
    left: 40px;
`;

export const ContentImage = styled.View``;

export const CircleImage = styled.Image``;

export const PokemonImage = styled.Image``;


