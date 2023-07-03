import React from 'react'
// const axios = require('axios');

export const useAPI = () => {
    const [trendingMV, setTrendingMv] = React.useState([]);

    async function getTrending(){
        try{
            const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=es-US", {
                    method: 'GET',
                    headers: {
                        accept: "application/json",
                        Authorization: import.meta.env.VITE_API_KEY,
                }
            });
            const data = await response.json();
            setTrendingMv([...data.results].map(e=>({backdrop_path: e.backdrop_path,
                id: e.id, 
                title: e.title,
                overview: e.overview,
                poster_path: e.poster_path,
                release_date: e.release_date,
                genre_ids: e.genre_ids,
            })));
            console.log(trendingMV);
        }catch(error){
            console.log("Hubo un error");
        }
    }

    React.useEffect(()=>{
        console.log("Si entra a esta parte")
        getTrending();
    },[]);

  return {
    trendingMV
  }
}
