import { useState, useEffect } from 'react'
import axios from 'axios'

const GrabMeme = () => {

    const [meme, setMeme] = useState([])
    
    const randomMeme = async() => {
        const { data: data } = await axios.get(`https://api.imgflip.com/get_memes`)
        
        const randomIndex = Math.floor(Math.random() * data.data.memes.length)
        setMeme(data.data.memes[randomIndex])
    }

    useEffect(() => { randomMeme() }, [])

    return meme
  
}

export default GrabMeme

//=======-----------
//  TO DO: 
    // - Move randomMeme function outside useEffect for global scope?

//  REFERENCE: 
    // - API CALL INSIDE OF componentDidMount() LIFECYCLE COMPONENT:
// ==============------------------

// componentDidMount= () => {
//   axios.get("https://api.imgflip.com/get_memes").then(res => {
//     const allMemeImgs = res.data.data.memes;

//     this.setState({ allMemeImgs }, () => {
//       console.log(this.state.allMemeImgs[0]);
//     });
//   });
// }