import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { Button, Icon } from 'semantic-ui-react'

const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
  };
  return (
    <center>
      <Button animated onClick={handleAddToFavorite} color = 'red' fluid>
        <Button.Content visible>Add to Favorites</Button.Content>
         <Button.Content hidden>
           <Icon name='arrow up' />
       </Button.Content>
     </Button>
    </center>
  );
};

export default AddToFavoriteButton;