import React from 'react'
import GrabMeme from './GrabMeme'
import Header from './Header'
import './App.css';



function App() {
  const meme = GrabMeme(); 

//   return (
//     <div classname="App">
//       <div classname="header">
//         <Header />
//       </div>
//       <img src={meme.url} alt="random-meme"/>
//       <button>MEME-ME-MAN!</button>
//     </div>
//   )
// }
  return (
    <div className="App">
      
      <header className="header">
        <h2 className="title">Meme-Me-Man</h2>
      </header>

      <div className="eyes">
        <div className="eye">
          <div className="pupil"><h1>.</h1></div>
        </div>
        <p>  </p>
        <div className="eye">
          <div className="pupil"><h1>.</h1></div>
        </div>
      </div>

      <div className="nose">
        <button className="button"> Button </button>
      </div>



      <div className="mouth-container">
        
        <div className="mouth">
          <div className="meme"><img src={meme.url} alt="random-meme"/></div>
       </div>
       
      </div>

      <div className="space"></div> 
      
      <footer className="footer">
        <p className="footer"> Footer</p>
      </footer>
    
    </div>
  )
}


export default App;



// WORKING WITH LAYOUT FOR FACE - CSS needs editing towards reactivity, to have everything fit to mobile, tablet, and desktop
// need to add @media queries
  
//   return (
//     <div className="App">
      
//       <header className="header">
//         <h2 className="title">Meme-Me-Man</h2>
//       </header>

//       <div className="eyes">
//         <div className="eye">
//           <div className="pupil"><h1>O</h1></div>
//         </div>
//         <p>  </p>
//         <div className="eye">
//           <div className="pupil"><h1>O</h1></div>
//       </div>
//       </div>

//       <div className="nose">
//         <button className="button"> Button </button>
//       </div>

//       <div className="space"></div>


//       <div className="mouth-container">
        
//         <div className="mouth">
//           <div className="meme"><img src={meme.url} alt="random-meme"/></div>
//        </div>
       
//       </div>

//       <div className="space"></div> 
      
//       <footer className="footer">
//         <p className="footer"> Footer</p>
//       </footer>
    
//     </div>
//   )
// }