import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import Button from './Components/Button'
import Eye from './Components/Eye'
import Mouth from './Components/Mouth'
import Footer from './Components/Footer'
import axios from 'axios'
import './App.css';


function App() {
  // set meme, setMeme to useState with an empty array:
  const [meme, setMeme] = useState([])

  // create randomMeme function to grab a random meme using JS Math methods
  // setMeme function call inside randomMeme will be triggered when randomMeme is called by user interaction
  // via useEffect:
  const randomMeme = async () => {
    const { data: data } = await axios.get(`https://api.imgflip.com/get_memes`)
    const randomIndex = Math.floor(Math.random() * data.data.memes.length)
    setMeme(data.data.memes[randomIndex])
  }

  // randomMeme function call in useEffect, with an empty array as second argument 
  // to keep useEffect from continuous loop, only refreshing on user interaction:
  useEffect(() => {
      randomMeme()
  }, [])

// return the basic structure of the App, with final layout to be determined by the CSS
// basic idea is to display the elements of the face - two eyes, a nose, and a mouth - bordered 
// by a header and footer:
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
        <Button handleClick={ randomMeme }/>
      </div>

      <div className="mouth-container">
        <Mouth meme={ meme }/>
      </div>

      <div className="footer">
        <Footer />
      </div>

    </div>
  )
}

export default App;

// currently, the nose is a button with a handleClick function giving it the functionality
// of calling the randomMeme function to change the meme that is displayed in the mouth driver
// more elements with various functions can also be integrated into the app.

// some ideas including:
//