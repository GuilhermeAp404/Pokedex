import React, { useEffect, useState } from 'react';

// Container
import { Container, IconColumn, Wrapper } from './styles';
// Components
import PokeIcon from './components/PokeIcon';
import PokemonCard from './components/PokemonCard';
// GetPokemon
import usePoke from './utils/usePoke';

function App() {
  const [pokes] = useState([
    { name: 'pikachu', type: 'electric' },
    { name: 'charizard', type: 'fire' },
    { name: 'blastoise', type: 'water' },
    { name: 'venusaur', type: 'grass' },
  ]);
  const [currentPoke, setCurrentPoke] = useState(null);

  useEffect(() => {
    async function awaitPokemon() {
      const poke = await usePoke('pikachu');
      setCurrentPoke({
        name: poke.name,
        weight: poke.weight,
        height: poke.height,
        type: poke.types,
      });
    }

    awaitPokemon();
  }, []);

  const handleClick = async (e) => {
    const poke = await usePoke(e.target.alt);
    setCurrentPoke({
      name: poke.name,
      weight: poke.weight,
      height: poke.height,
      type: poke.types,
    });
  };

  return (
    <Container>
      <Wrapper>
        <IconColumn>
          {pokes.map((poke) => (
            <PokeIcon
              variant={poke.type}
              pokeIcon={`${import.meta.env.VITE_BASE_URL}${poke.name}Icon.png`}
              pokeName={poke.name}
              key={poke.name}
              onClick={handleClick}
            />
          ))}
        </IconColumn>
        {currentPoke !== null && (
          <PokemonCard
            pokeImg={`${import.meta.env.VITE_BASE_URL}${currentPoke.name}.png`}
            variant={currentPoke.type[0].type.name}
            pokemon={{ ...currentPoke }}
          />
        )}
      </Wrapper>
    </Container>
  );
}

export default App;
