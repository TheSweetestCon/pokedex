import React, { useEffect, useState } from 'react';
import {FlatList, Text} from 'react-native'
import * as S from './styles'
import api from '../../service/api';
import { Card, Pokemon, PokemonType } from '../../components/card';
import pokeballHeader from '../../assets/img/pokeball.png'
import { useNavigation } from '@react-navigation/native';


type Request = {
    id: number,
    types: PokemonType[]
}

export function Home(){

    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    const {navigate} = useNavigation()
    function handleNavigation(pokemonID: number){
        navigate('About', {
            pokemonID,
        })
    }

    useEffect(() => {
        async function getAllPokemon() {
            const response = await api.get('pokemon')
            const {results} = response.data

            const payloadPokemon = await Promise.all(
                results.map(async (pokemon: Pokemon) => {
                    const {id, types} = await getMoreInfo(pokemon.url)
                    console.log(pokemon.name, id, types)
                    return {
                        name: pokemon.name,
                        id,
                        types
                    }
                })
            )
            //console.log(payloadPokemon)
            setPokemons(payloadPokemon)
        }
        getAllPokemon()
    },[])

    async function getMoreInfo(url: string): Promise<Request> {
        const response = await api.get(url)
        
        const {id, types} = response.data

        return {id, types}
    }

    return <S.Container>
       <FlatList
            ListHeaderComponent={
                <>
                    <S.Header source={pokeballHeader} />
                    <S.Title>Pokédex</S.Title>
                
                </>

            }
            contentContainerStyle = {{
                paddingHorizontal: 20
            }}
            data={pokemons}
            keyExtractor={pokemon => pokemon.id.toString()}
            renderItem={({item: pokemon}) =>

                    <Card data={pokemon} onPress={() => {
                        handleNavigation(pokemon.id)
                    }} />

            }
       />
    </S.Container>

}