import React, { useEffect, useState } from 'react';
import './Row.scss';
import axios from 'axios';
import { IMovie } from '../../models/movie';
//import requests from '../../config/Requests';

interface IProps {
    title: string;
    fetchUrl: string;
    isPoster?: boolean
   /*  children?: React.ReactNode */
}

const Row = ({title, fetchUrl, isPoster}:IProps) => {

    const [movies, setMovies] = useState<IMovie[]>([])
    useEffect(()=>{
        async function fetchData() {
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results)
        }
        fetchData();
      })
    

    return (
    <div className='row'>
        <h2 className="row__title">{title}</h2>
        <div className="row__images">
            {movies.map((movie)=>(
                <div key={movie.id}>
                    {isPoster ? 
                        <img src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} 
                        className='row__image' 
                        alt={movie?.name || movie?.title || movie?.original_title} />
                    : <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                    className='row__image' 
                    alt={movie?.name || movie?.title || movie?.original_title} />
                    }
                    
                </div>
            ))}
        </div>
    </div>
    )
}

export default Row