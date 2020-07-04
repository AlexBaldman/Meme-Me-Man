import React from 'react'
// import GrabMeme from './GrabMeme'

export default function Button(props) {
    return (
      <button className="button" onClick={props.handleClick}> Button </button>
    )
    
}