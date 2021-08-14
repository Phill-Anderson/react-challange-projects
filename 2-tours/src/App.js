import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import axios from 'axios'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://jsonplaceholder.typicode.com/posts'
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const getTours = async () => {
    setLoading(true)
    await axios.get(url).then((result) => {
      setTours(result.data)
      setLoading(false)
    }).catch(err => {
      setLoading(false);
      console.log(`error`, err)
    });
  }
  useEffect(() => {
    getTours();
  }, [])
  if (loading) {
    return <main><Loading /></main>
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'><h2>Массив хоосон байна</h2></div>
        <button className="btn" onClick={() => getTours()}>refresh</button>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
