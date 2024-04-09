import React from 'react';

import {
  Wrapper, BgType, PokeImg, PokeStatsContainer, PokeStats,
} from './styles';

function PokemonCard({ pokeImg, pokemon }) {
  return (
    <Wrapper>
      <BgType variant={pokemon.type[0].type.name}>
        <h2>{pokemon.name}</h2>
        <PokeImg src={pokeImg} />
      </BgType>
      <PokeStatsContainer>
        <PokeStats>
          <span><strong>Tipo:</strong></span>
          <span>
            {pokemon.type.map((type, index) => (index > 0 ? (`, ${type.type.name}`) : (type.type.name)))}
          </span>
        </PokeStats>
        <PokeStats>
          <span><strong>Peso:</strong></span>
          <span>
            {`${pokemon.weight / 10} `}
            Kg
          </span>
        </PokeStats>
        <PokeStats>
          <span><strong>Altura:</strong></span>
          <span>
            {`${pokemon.height * 10} `}
            cm
          </span>
        </PokeStats>
      </PokeStatsContainer>
    </Wrapper>
  );
}

export default PokemonCard;
