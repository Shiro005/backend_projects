import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get(`/api/jokes`)
    .then((response) => {
      setjokes(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
    <h3>This is Jokes app</h3>

    <h3>Jokes : {jokes.length}</h3>

    {
      jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h6>{joke.content}</h6>
        </div>
      ))
    }
    </>
  )
}

export default App