import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { Button, Icon } from 'semantic-ui-react'

const AddToWatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchList = e => {
    e.preventDefault();
    context.addToWatchList(movie.id);
  };
  return (
    <center>
      <Button animated onClick={handleAddToWatchList} color = 'green' fluid>
        <Button.Content visible>Add to Watch List</Button.Content>
         <Button.Content hidden>
           <Icon name='arrow right' />
       </Button.Content>
     </Button>
    </center>
  );
};

export default AddToWatchListButton;