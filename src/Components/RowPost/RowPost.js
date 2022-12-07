import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../axios'
import { imageUrl } from '../../Constants/Constants'

function RowPost(props) {
    const [movies, setmovies] = useState([])
    useEffect(() => {
        axios.get(props.urls).then((response) => {
            console.log(response.data);
            setmovies(response.data.results)
        })

    }, [])
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) =>
                    <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
                )}
            </div>
        </div>
    )
}

export default RowPost