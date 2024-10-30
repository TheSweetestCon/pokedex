import React, { useEffect, useState } from 'react';
import {Button, FlatList, Text} from 'react-native'
import * as S from './styles'
import api from '../../service/api';
import { Card, Pokemon, PokemonType } from '../../components/card';
import pokeballHeader from '../../assets/img/pokeball.png'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/app.routes'


type Request = {
    id: number,
    types: PokemonType[]
};

export function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [offset, setOffset] = useState(0);

    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    function handleNavigation(pokemonID: number) {
        navigate('About', {
            pokemonID,
        });
    }

    async function getAllPokemon(offset: number) {
        const response = await api.get(`/pokemon?offset=${offset}&limit=20`);
        const { results } = response.data;

        const payloadPokemons = await Promise.all(
            results.map(async (pokemon: Pokemon) => {
                const { id, types } = await getMoreInfo(pokemon.url);

                return {
                    name: pokemon.name,
                    id,
                    types
                };
            })
        );

        setPokemons(payloadPokemons);
    }

    async function getMoreInfo(url: string): Promise<Request> {
        const response = await api.get(url);
        const { id, types } = response.data;

        return {
            id, types
        };
    }

    useEffect(() => {
        getAllPokemon(offset);
    }, [offset]);

    function handleLoadMore() {
        setOffset(offset + 20);
    }

    return (
        <S.Container>
            <FlatList
                ListHeaderComponent={
                    <>
                        <S.Header source={pokeballHeader} />
                        <S.Title>Pokédex</S.Title>
                    </>
                }
                contentContainerStyle={{
                    paddingHorizontal: 20
                }}
                data={pokemons}
                keyExtractor={pokemon => pokemon.id.toString()}
                renderItem={({ item: pokemon }) => (
                    <Card data={pokemon} onPress={() => {
                        handleNavigation(pokemon.id)
                    }} />
                )}
            />
            
            <Button title="Carregar mais" onPress={handleLoadMore} />
        </S.Container>
        
    );
}