import React from 'react'

import { Footer, Header, Features, Blog, Possibility, WhatUrbanGPT } from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css';


const App = () => {
  return (

    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        
      </div>
       <WhatUrbanGPT />
       <Possibility />
       <Features />
       <CTA />
       <Blog />
       <Footer />
       <Brand />
    </div>
  )
}

export default App
