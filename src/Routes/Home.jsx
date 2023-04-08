import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentists, setDentists] = useState([])

  const getDentists = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
    setDentists(data)
  }

  useEffect(() => {
    getDentists()
  }, [])
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map((dentist)=>{
          return (<Card key={dentist.id} name={dentist.name} id={dentist.id} username={dentist.username}/>)
        })}      
      </div>
    </main>
  )
}

export default Home