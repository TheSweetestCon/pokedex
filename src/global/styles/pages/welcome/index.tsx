import React from 'react';
import * as S from './styles'
import pokeballAnimation from './pokeball.json'
import LottieView from 'lottie-react-native'
import { Button } from '../../../../components/Button';

export function Welcome(){
    return <S.Container>
        <S.Content>
            <S.WrapperAnimation>
                <S.WrapperImage>
                    <LottieView autoPlay source={pokeballAnimation} loop style={{flex: 1, width: 150, height: 150}} speed={2.0} />
                </S.WrapperImage>
            </S.WrapperAnimation>
            <S.Title>
                Bem-vindo!
            </S.Title>
            <S.Subtitle>
                Comece a explorar o mundo Pokémon!
            </S.Subtitle>
        </S.Content>
        
        <S.Footer>
            <Button title='Iniciar'></Button>
        </S.Footer>
    </S.Container>

}