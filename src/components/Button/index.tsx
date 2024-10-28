import React from 'react';
import * as S from './style'
import { TouchableOpacityProps } from 'react-native';

type Props = {
    title: string;
} & TouchableOpacityProps

export function Button({title, ...rest}: Props){
    return <S.Container {...rest}>
        <S.Title>{title}</S.Title>
    </S.Container>
}