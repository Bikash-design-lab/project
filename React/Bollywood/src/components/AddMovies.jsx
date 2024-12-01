import React, { useState } from 'react'
import axios from 'axios'

const AddMovies = () => {
    const [movie, setMovie] = useState({title:"", description:"", year:""})

    function handleChange(e){
        const {name,value} = e.target;
        setMovie({...movie, [name]:value})
    }
    async function handleAdd(){
        try {
            await axios.post('https://proj-fe96e-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',movie)
            setMovie()
            alert("Added sucessfully 😃")
            setMovie({title:"",description:"",year:""})
        } catch (error) {
            alert("Plese fill all input boxes 😟")
        }
    }
  return (
    <div>
      <h1>Add Movies</h1>
      <input type="text" placeholder='Enter Title' name="title" value={movie.title} onChange={handleChange} required />
      <input type="text" placeholder='Enter Description' name="description" value={movie.description} onChange={handleChange} required />
      <input type="text" placeholder='Enter Year' name="year" value={movie.year} onChange={handleChange} required />
      <button onClick={handleAdd}>Add Movie</button>
    </div>
  )
}

export default AddMovies
