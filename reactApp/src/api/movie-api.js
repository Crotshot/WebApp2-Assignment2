export const login = (username, password) => {
  return fetch('/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const signup = (username, password) => {
  return fetch('/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const postFavourites = (username, movie, id) => {
  return fetch(
    `/api/user/${username}/favourites`, { headers: {
      'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ movie: movie, username: username, id: id })
  }  ).then(res => res.json());
};

export const getFavourites = userName => {
  return fetch(
    `/api/user/${userName}/favourites`, { headers: {
      'Authorization': window.localStorage.getItem('token')
    }}
  ).then(res => res.json());
};

export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};
  
export const getMovie = id => {
  return fetch(
     `/api/movies/${id}`,{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getMovieReviews = id => {
  return fetch(
     `/api/movies/${id}/reviews`,{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json())
   //.then(json => json.results);
};

export const getSimilarMovies = id =>{
  return fetch(
    `/api/similar/${id}`,{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json())
// .then(json => json.results);
};

export const getGenres = () => {
  return fetch(
     '/api/genres',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json())
};

export const getUpcomingMovies = () => {
  return fetch(
     '/api/upcoming',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json())
};

  export const getPopularMovies = () =>{
    return fetch(
      '/api/popular',{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
   }
   ).then(res => res.json())
  };


  export const getTopRated = () =>{
    return fetch(
      '/api/topRated',{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
   }
   ).then(res => res.json())
  };