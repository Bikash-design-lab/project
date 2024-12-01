import { useState } from 'react'
import './App.css'
import AddMovies from './components/AddMovies'
import { Routes,Route,Link } from 'react-router-dom'
import MovieList from './components/MovieList'
import EditMovies from './components/EditMovies'
import {PrivateRoute} from './components/PrivateRoute'
import NotAdmin from './components/not-admin'

function App() {

  return (
    <>
      <div style={{border:"2px solid red", display:"flex", justifyContent:"space-evenly", padding:"5px", backgroundColor:"lightblue", width:"100%" }}>
        <Link to="/" style={{border:"2px solid blue", backgroundColor:"blue", color:"white", borderRadius:"5px",
         padding:"5px 10px"
        }}>
        Movie List</Link>
        <Link to="/add" style={{border:"2px solid blue", backgroundColor:"blue", color:"white", borderRadius:"5px",
         padding:"5px 10px"
        }}>Add Movie</Link>
      </div>
      <h1>Bollywood Movies</h1>
      <Routes>
        <Route path="/add" element={<AddMovies/>} />
        <Route path="/" element={<MovieList/>} />
        <Route path="/edit/:id" element={
          <PrivateRoute>
            <EditMovies/>
          </PrivateRoute>
          } />
        <Route path="/not-admin" element={<NotAdmin/>} />
      </Routes>
    </>
  )
}

export default App
