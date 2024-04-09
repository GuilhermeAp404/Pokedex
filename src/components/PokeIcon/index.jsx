import React from 'react';
import IconContainer from './styles';

function PokeIcon({
  variant, pokeIcon, pokeName, onClick,
}) {
  return (
    <IconContainer variant={variant} onClick={onClick}>
      <img src={pokeIcon} alt={pokeName} />
    </IconContainer>
  );
}

export default PokeIcon;
