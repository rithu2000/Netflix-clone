import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../axios'
import { imageUrl, API_KEY } from '../../Constants/Constants'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [movies, setmovies] = useState([])
    const [UrlId, setUrlId] = useState('')
    
    useEffect(() => {
        axios.get(props.urls).then((response) => {
            // console.log(response.data);
            setmovies(response.data.results)
        })

    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const HandleMovie = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then(response => {
            // console.log(response.data);
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            } else {
                console.log('array empty');
            }

        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) =>
                    <img onClick={() => HandleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="Poster" />
                )}
            </div>
            {UrlId && <Youtube opts={opts} videoId={UrlId.key} />}
        </div>
    )
}

export default RowPost