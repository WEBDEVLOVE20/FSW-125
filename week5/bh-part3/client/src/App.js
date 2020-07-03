import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounties from './components/Bounties.js'
import AddMovieForm from './components/AddMovieForm.js'

function App() {
    const [movies, setMovies] = useState([])


    getMovies(() => {
        axios.get("/movies")
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
            //.then(res => console.log(res))
    })

    addMovie((newMovie) => {
        axios.post("/movies", newMovie)
            .then(res => {
                setMovies(prevMovies => [...prevMovies, res.data])
            })
            .catch(err => console.log(err))
    })

    deleteMovie((movieId) => {
        axios.delete(`/movies/${movieId}`)
            .then(res => {
                setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
            })
            .catch(err => console.log(err))
    })

    editMovie((updates, movieId) => {
        axios.put(`/movies/${movieId}`, updates)
            .then(res => {
                setMovies(prevMovies => prevMovies.map (movie => movie._id !== movieId ? movie : res.data))
            })
            .catch(err => console.log(err))
    })

    
    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>
        <AddMovieForm 
            submit={addMovie}
            btnText="Add Movie"
        />
        { 
          movies.map(movie => 
            <Movie 
            {...movie} 
            key={movie.title}
            deleteMovie={deleteMovie}
            editMovie={editMovie}
            />) 
        } //key should usually be ID
        </div>
    )
}

export default App;