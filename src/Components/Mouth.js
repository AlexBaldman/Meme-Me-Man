import React from 'react'
// import GrabMeme from './GrabMeme'

export default function Mouth(props) {
    let meme = props.meme

    return (
        <div className="mouth">
          <div className="meme"><img src={meme.url} alt="random-meme"/></div>
        </div>
    );
}