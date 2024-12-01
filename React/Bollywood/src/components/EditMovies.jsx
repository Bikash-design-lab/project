import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const EditMovies = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({title:"", description:"", year:""})
    async function getMovies(){
        let res = await axios.get(`https://proj-fe96e-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`)
        setMovie(res.data)
    }
    function handleChange(e){
        // console.log(e)
        const {name,value} = e.target;
        setMovie({...movie, [name]:value})
    }
    async function handleUpdate(){
        if(!movie.title || !movie.description || !movie.year){
            alert("Please fill the changes you want !")
            return;
        }
        try {
            await axios.put(`https://proj-fe96e-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`,movie)
            alert("Movie Updated sucessfully 😃")
            setMovie({title:"", description:"",year:""})
        } catch (error) {
            alert("Failed to update! 😔")
        }
    }
    useEffect(()=>{
        getMovies()
    },[id])
  return (
    <div>
        <h1>Edit Movies</h1>
        <input type="text" placeholder='Enter Title' name="title" value={movie.title} onChange={handleChange} />
        <input type="text" placeholder='Enter Description' name="description" value={movie.description} onChange={handleChange} />
        <input type="text" placeholder='Enter Year' name="year" value={movie.year} onChange={handleChange} />
        <button onClick={handleUpdate}>Update Movie 👍</button>
    </div>
  )
}

export default EditMovies

// we should get id here -> we make get request -> fill input boxes with fetched data -> make some changes and update -> repost(update data)