import React from 'react'
import './Components/Partials/_app.scss'
import Header from './Components/Header/Header'
import Discover from './Components/Discover/Discover'
import Statistics from './Components/Statistics/Statistics'
const App = () => {
  return (
    <div className='appContainer'>
      <Header/>
      <Discover/>
      {/* <Statistics/> */}
    </div>
  )
}

export default App
