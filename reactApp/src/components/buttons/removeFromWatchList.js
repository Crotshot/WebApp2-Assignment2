import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { Button, Icon } from 'semantic-ui-react'

const RemoveFromWatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromWatchList = e => {
    e.preventDefault();
    context.removeFromWatchList(movie.id);
  };
  return (
    <Button animated onClick={handleRemoveFromWatchList}color = 'green' fluid>
      <Button.Content visible>Remove from Watch List</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow left' />
      </Button.Content>
    </Button>
  );
};

export default RemoveFromWatchListButton;