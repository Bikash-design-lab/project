import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const MovieList = () => {
    const [movies, setMovies] = useState([])
    async function getMovies(){
        let res = await axios.get('https://proj-fe96e-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json')
        let arr=[];
        for(let key in res.data){
            arr.push({id:key, ...res.data[key]})
        }
        setMovies([...arr])    
    }

    async function handleDelete(id){
        await axios.delete(`https://proj-fe96e-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`)
        getMovies()
    }

    useEffect(()=>{
        getMovies()
    },[])    
  return (
    <div>
      <h1>Movie List</h1>
        {movies.map((movie)=>(
            <div key={movie.id}>
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <p>{movie.year}</p>
                <Link to={`/edit/${movie.id}`}>Edit 🖊️</Link>
                <button onClick={()=>handleDelete(movie.id)}>Delete 🗑️</button>
            </div>
        ))}
    </div>
  )
}

export default MovieList
