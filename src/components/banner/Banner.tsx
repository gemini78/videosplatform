import React, { useEffect, useState } from 'react'
import './Banner.scss';
import { GrPlayFill, GrCircleQuestion } from "react-icons/gr";
import requests from '../../config/Requests';
import axios from "axios";
import { IMovie } from '../../models/movie';
import { IBannerStyle } from '../../models/bannerStyle';
import { QuickView } from '../quickview/QuickView';
const Banner = () => {

  const [movie, setMovie] = useState<IMovie>();
  const [popup, setPopup] = useState<boolean>(false)

  const handleClickPopup = () => {
    popup ? setPopup(false): setPopup(true);
  }

  useEffect(()=>{
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)])
    }
    fetchData();
  }, [])
  

  function truncateText(text: string, n: number) {
    return text?.length > n ? text.substring(0, n - 1) + "..." : "No description"
  }

  const bannerStyle: IBannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }

  console.log(popup);

  return (
    <header className='banner' style={bannerStyle}>
        <div className="banner__content">
            <h1 className="banner__title">{movie?.name || movie?.title || movie?.original_title}</h1>
            <p className="banner__description">{movie && truncateText(movie.overview, 100)}</p>
            <div className="banner__buttons">
                <button className="banner__button banner__button--play"><GrPlayFill size={20}/> Lecture</button>
                <button className="banner__button" onClick={handleClickPopup}><GrCircleQuestion size={20}/>Plus d'info</button>
            </div>
        </div>
      <QuickView bannerStyle={bannerStyle} handlePopup={handleClickPopup} popupStatut={popup} movie={movie} />
    </header>
  )
}

export default Banner