import React from "react";
import { Link } from "react-router-dom";

const ReviewButton = ({ movie }) => {
  return (
    /*
    <center>
      <Button animated onClick={handleAddToFavorite}>
        <Button.Content visible>Add to Favorites</Button.Content>
         <Button.Content hidden>
           <Icon name='arrow up' />
       </Button.Content>
     </Button>
    </center>
    */
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/reviews/form`,
        state: {
          movie: movie
        }
      }}
    >
      Write a Review
    </Link>
  );
};

export default ReviewButton;