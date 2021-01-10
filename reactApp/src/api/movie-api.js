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
     '/api/movie/'+{id},{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};


export const getGenres = () => {
  return fetch(
     '/api/genres',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json())
   .then(json => json.results);
};

export const getMovieReviews = id => {
  return fetch(
     '/api/movie/' + {id} + 'reviews',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json())
   .then(json => json.results);
};

export const getUpcomingMovies = () => {
  return fetch(
     '/api/upcoming',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json())
   .then(json => json.results);
};

  export const getPopularMovies = () =>{
    return fetch(
      '/api/popular',{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
   }
   ).then(res => res.json())
      .then(json => json.results);
  };


  export const getTopRated = () =>{
    return fetch(
      '/api/top_rated',{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
   }
   ).then(res => res.json())
      .then(json => json.results);
  };

  export const getSimilarMovies = id =>{
    return fetch(
      '/api/movie/'+{id} + '/similar',{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
   }
   )
    .then(res => res.json())
    .then(json => json.results);
  };