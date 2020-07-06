import React from 'react'
import { Link, Route } from 'react-router-dom'

export default function Nav() {

  return (
    <h2>|     
    <Route path="/" exact><Link to="/">Home</Link></Route>     |     
    <Link to="./About">About</Link>    |     
    <Link to="./Contact">Contact</Link>     |
    </h2>
    )

}