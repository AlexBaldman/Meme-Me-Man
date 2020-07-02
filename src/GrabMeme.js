import { useState, useEffect } from 'react'
import axios from 'axios'

const GrabMeme = () => {

    const [meme, setMeme] = useState([])

    useEffect(() => {
        const randomMeme = async () => {
            const { data: memeList } = await 
            axios.get(`https://api.imgflip.com/get_memes`);
            const randomIndex = Math.floor(Math.random() * memeList.data.memes.length)
            setMeme(memeList.data.memes[randomIndex])
        }

        randomMeme()
    }, [])

    return meme 

}

export default GrabMeme