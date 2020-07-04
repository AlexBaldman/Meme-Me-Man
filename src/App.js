import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import Button from './Components/Button'
import Eye from './Components/Eye'
import Mouth from './Components/Mouth'
import Footer from './Components/Footer'
import axios from 'axios'
import './App.css';


function App() {
  
  const [meme, setMeme] = useState([])

  const randomMeme = async () => {
    const { data: data } = await 
    axios.get(`https://api.imgflip.com/get_memes`);
    const randomIndex = Math.floor(Math.random() * data.data.memes.length)
    setMeme(data.data.memes[randomIndex])
}

  useEffect(() => {
      

      randomMeme()
  }, [])

  return (
    <div className="App">
      <div className="header">
      <Header />
      </div>
      <div className="eyes">
        <Eye />
        <Eye />
      </div>
      <div className="nose">
        <Button handleClick={randomMeme}/>
      </div>
      <div className="mouth-container">
        <Mouth meme={meme}/>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}


export default App;