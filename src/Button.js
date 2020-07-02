import React, { useState, useEffect } from 'react';
import GrabMeme from './GrabMeme';


export default function Button () {
    let buttonAction = () => {
        GrabMeme();
    }


    }

    return (
        <div class="button-div">
            <button onclick={buttonAction}>Meme-Me-Man!</button>
        </div>
    )

