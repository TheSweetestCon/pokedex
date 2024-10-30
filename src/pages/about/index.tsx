import React, { useEffect, useState } from "react";
import {useRoute, useNavigation} from '@react-navigation/native'
import { Alert, ScrollView, Text } from "react-native";
import api from "../../service/api";
import { useTheme } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import circle from '../../assets/img/circle.png'
import dots from '../../assets/img/dots.png'
import * as S from './styles'
import { FadeAnimation } from "../../components/FadeAnimation";

interface IAttributes {
    base_stat: number;
    stat: {
      name: string;
    };
  }


type RouteParams = {
    pokemonID: number;
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
        | 'electric'
        | 'ground';
    };
  };

type PokemonProps = {
    id: number;
    name: string;
    stats: IAttributes[];
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
    const { goBack } = useNavigation();
    const { colors } = useTheme();
    
    const { pokemonID } = route.params as RouteParams;
    
    const [pokemon, setPokemon] = useState(initialPokemonState);
    const [load, setLoad] = useState<boolean>(true);
    const [progress, setProgress] = useState(0); // Estado para o progresso

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

            // Animação do progresso ao montar o componente
            setProgress(0); // Começa do 0
            const timer = setTimeout(() => {
                setProgress(calculateTotalBaseStats(pokemon.stats) / 255); // Atualiza o progresso
            }, 100);

            return () => clearTimeout(timer); // Limpa o timer ao desmontar
        }
    }, [pokemon]);

    useEffect(() => {
        if (pokemon.id) {
            console.log('Pokemon data set:', pokemon);
        }
    }, [pokemon]);

    
    function handleGoBack(){
        goBack();
    }
    
    function abrev(stat: string) {
        const abbreviations: { [key: string]: string } = {
            'SPECIAL-ATTACK': 'SP. ATK',
            'SPECIAL-DEFENSE': 'SP. DEF'
        };
    
        return abbreviations[stat.toUpperCase()] || stat;
    }

    function calculateTotalBaseStats(stats: IAttributes[]): number {
        return stats
            .map(({ base_stat }) => base_stat)
            .reduce((acc, stat) => acc + stat, 0);
    }

    

    return <>
        {load ? 
            <>
                <Text style={{marginTop: 200}}>Carregando...</Text>
            </> 
        :
            <ScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
                <S.Header type={pokemon.types[0]?.type?.name}>
                    <S.BackButton onPress={handleGoBack}>
                        <Feather name='chevron-left' size={24} color='#FFFFFF' />
                    </S.BackButton>
                    
                    <S.ContentImage>
                        
                        <S.CircleImage source={circle} />
                        <FadeAnimation>
                            <S.PokemonImage source={{
                                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
                            }} />
                        </FadeAnimation>
                    </S.ContentImage>  
                    <S.Content>
                            <S.PokemonID>#{pokemon.id}</S.PokemonID>
                            <S.PokemonName>{pokemon.name}</S.PokemonName>
                            <S.PokemonTypeContainer>
                                
                                {pokemon.types?.map(({type}) =>
                                    <S.PokemonType type={type.name} key={type.name}>
                                        <S.PokemonTypeText>{type.name}</S.PokemonTypeText>
                                    </S.PokemonType>
  
                                )}
                                
                            </S.PokemonTypeContainer>
                    </S.Content>
                    <S.DotsImage source={dots}/> 
                </S.Header>
                <S.Container >
                <S.Title type={pokemon.types[0].type.name}>Base Stats</S.Title>
                    {pokemon.stats.map(({ stat, base_stat }) => (
                        <S.StatusBar key={`${pokemon.id}-${stat.name}`}>
                            <S.Attributes>{abrev(stat.name)}</S.Attributes>
                            <S.AttributeValue>{base_stat}</S.AttributeValue>
                            <S.ContentBar>
                                <S.ProgressBar
                                    type={pokemon.types[0].type.name}
                                    progress={base_stat / 255}
                                    width={160}
                                    color={pokemon.color}  
                                    animated={true}
                                />
                            </S.ContentBar>
                        </S.StatusBar>
                    ))}

                <S.TotalStats>Total Stats: {calculateTotalBaseStats(pokemon.stats)}</S.TotalStats>

                <S.Title type={pokemon.types[0].type.name}>Abilitites</S.Title>
                {pokemon.abilities.map(currentAbility => (
                    <S.Ability key={`${pokemon.id}-${currentAbility.ability.name}`}>
                        - {currentAbility.ability.name}
                    </S.Ability>
                ))}
                </S.Container>
            </ScrollView>
        }
    </>
    
    
}