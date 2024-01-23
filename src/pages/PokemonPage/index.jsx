import { useEffect } from "react";
import { useState } from "react";
import CardPokemon from "../../components/CardPokemon";
import axios from "axios";
import "./styles.css";


const PokemonPage = () => {
        const [referenciasPokemons, setReferenciasPokemon] =  useState([]);
        const [listaPokemons, setListaPokemons] = useState([]);
        const pegar100Pokemons = async () => {
            try {
                const resposta = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
                setReferenciasPokemon(resposta.data.results);

            } catch (error) {
                console.error("Erro ao buscar os pokemons", error);
            }
        };

        useEffect(() => {
            pegar100Pokemons();
        }, []);

        const pegarListaDePokemons = async () => {
            const listaTemporaria = [];
            
            for(const referencia of referenciasPokemons) {
                try{
                    const resposta = await axios.get(referencia.url);
                    listaTemporaria.push(resposta.data);

                } catch (error) {
                    console.log("Erro ao buscar o pokemon", error);

                }
            }

            setListaPokemons(listaTemporaria);
        };

        useEffect(() => {
            pegarListaDePokemons();
        }, [referenciasPokemons]);

        return (
            <div className="pokemon-container"> 
                {listaPokemons.map((pokemon) => (
                <CardPokemon 
                nome={pokemon.name} 
                foto={pokemon.sprites.front_default}
                id={pokemon.id}
                url={pokemon.forms[0].url} />
            ))}
            </div>
            

        ); 

        
};

export default PokemonPage;