import React from 'react'
import { MdCancel } from "react-icons/md";
import { IMovie } from '../../models/movie';
import { IBannerStyle } from '../../models/bannerStyle';
import "./QuickView.scss";

interface IProps {
    bannerStyle: IBannerStyle;
    handlePopup: () => void;
    popupStatut: boolean;
    movie?: IMovie;
   /*  children?: React.ReactNode */
}
export const QuickView = ({bannerStyle, handlePopup, popupStatut, movie}: IProps) => {
  return (
    <div className={`quickView ${popupStatut && "open"}`}>
        <div className="quickView__banner" style={bannerStyle}>
            <div className="quickView__content">
                <h3 className="quickView__title">{movie?.name || movie?.title || movie?.original_title}</h3>
                <p>{movie?.overview}</p>
            </div>
            <button className="quickView__close" onClick={handlePopup} >
                <MdCancel size={30}/>
            </button>
        </div>
    </div>
  )
}
