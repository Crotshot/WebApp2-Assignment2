import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { Button, Icon } from 'semantic-ui-react'

const RemoveFromFavoritesButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromFavorites = e => {
    e.preventDefault();
    context.removeFromFavorites(movie.id);
  };
  return (
    <Button animated onClick={handleRemoveFromFavorites} color = 'red' fluid>
      <Button.Content visible>Remove from Favorites</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow down' />
      </Button.Content>
    </Button>
  );
};

export default RemoveFromFavoritesButton;