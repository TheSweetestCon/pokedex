import React, { useEffect, useState } from "react";
import {useRoute, useNavigation} from '@react-navigation/native'
import { Alert, ScrollView, Text } from "react-native";
import api from "../../service/api";
import { useTheme } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import circle from '../../assets/img/circle.png'
import * as S from './styles'



type RouteParams = {
    pokemonID: number;
}

type Stats = {
    base_stat: number;
    stat: {
        name: string;
    }
}

type Ability = {
    ability: {
        name: string;
    }
}

type PokemonTypes = {
    type: {
      name:
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
  };

type PokemonProps = {
    id: number;
    name: string;
    stats: Stats[];
    abilities: Ability[];
    color: string;
    types: PokemonTypes[];
}

const initialPokemonState: PokemonProps = {
    id: 0,
    name: '',
    stats: [],
    abilities: [],
    color: '',
    types: []
};


export function About() {
    const route = useRoute();
    const { colors } = useTheme();
    
    const { pokemonID } = route.params as RouteParams;
    
    const [pokemon, setPokemon] = useState(initialPokemonState);
    const [load, setLoad] = useState<boolean>(true);

    useEffect(() => {
        async function getPokemonDetail(): Promise<void> {
            try {
                const response = await api.get(`pokemon/${pokemonID}`)
                const {id, name, stats, abilities, types} = response.data;

                

                const currentType = types[0].type.name;
                const color = colors.backgroundCard[currentType];

                setPokemon({
                    id, name, stats, abilities, color, types
                });

                

                console.log(pokemon.id + ' AQUI')

            } catch (error) {
                Alert.alert('Deu erro!')
                
            } finally {
                setLoad(false)
            }
        }

        getPokemonDetail();
    }, [pokemonID]);

    useEffect(() => {
        if (pokemon.id) {
            console.log('Pokemon data set:', pokemon);
        }
    }, [pokemon]);

    

    


    return <>
        {load ? 
            <>
                <Text style={{marginTop: 200}}>Carregando...</Text>
            </> 
        :
            <ScrollView style={{flex: 1}}>
                <S.Header type={pokemon.types[0]?.type?.name}>
                    <S.BackButton>
                        <Feather name='chevron-left' size={24} color='#FFFFFF' />
                    </S.BackButton>
                    
                    <S.ContentImage>
                        
                        <S.CircleImage source={circle} />
                        <S.PokemonImage source={{
                            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
                        }} />
                    </S.ContentImage>  
                </S.Header>
            </ScrollView>
        }
    </>
    
    
}