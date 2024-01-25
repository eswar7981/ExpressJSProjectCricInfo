import React, { useEffect } from 'react'
import Navigation from '../navigation/Navigation'
const HomePage = () => {
  

  useEffect(()=>{
    fetch('http://localhost:5000/playerstats').then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data)
    })
  },[])

  return (
    <div>
     
    </div>
  )
}

export default HomePage
