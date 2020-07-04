import { useState, useEffect } from 'react'
import axios from 'axios'

const GrabMeme = () => {

    const [meme, setMeme] = useState([])

    useEffect(() => {
        const randomMeme = async () => {
            const { data: data } = await 
            axios.get(`https://api.imgflip.com/get_memes`);
            const randomIndex = Math.floor(Math.random() * data.data.memes.length)
            setMeme(data.data.memes[randomIndex])
        }

        randomMeme()
    }, [])

  return meme
  
}


export default GrabMeme