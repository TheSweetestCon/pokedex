import React from "react";
import * as S from './style'
import dotsImage from '../../assets/img/dots.png'
import pokeball from '../../assets/img/pokeballCard.png'
import { TouchableOpacityProps } from "react-native";
import { FadeAnimation } from "../FadeAnimation";

export type PokemonType = {
    type: {
        name: string;
    }
}

export type Pokemon = {
    name: string,
    url: string,
    id: number,
    types: PokemonType[]
}

type Props = {
    data: Pokemon;
} & TouchableOpacityProps

export function Card({data, ...rest}: Props){
    return (
        <S.PokemonCard type={data.types[0].type.name} {...rest}>
            <S.LeftSide>
                <S.PokemonID>#{data.id}</S.PokemonID>
                <S.PokemonName>{data.name}</S.PokemonName>
                <S.ImageCardDetailLeftSide source={dotsImage} />
                <S.PokemonContentType>
                    {data.types.map(pokemonType => 
                        <S.PokemonType type={pokemonType.type.name} key={`${data.id}-${pokemonType.type.name}`}>
                            <S.PokemonTypeText key={pokemonType.type.name}>{pokemonType.type.name}</S.PokemonTypeText>
                        </S.PokemonType>
                    )}
                    
                </S.PokemonContentType>
            </S.LeftSide>

            <S.RightSide>
                <S.PokeballDetail source={pokeball}/>
                <FadeAnimation>
                    <S.PokemonImage source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                        }}
                    />
                </FadeAnimation>
            </S.RightSide>
        </S.PokemonCard>
    )
}