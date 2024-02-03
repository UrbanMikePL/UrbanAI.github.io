import React from 'react'

import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import { LinearGradient } from 'react-text-gradients'
import { Article } from '../../components'

const Blog = () => {
  return (
    <div className='urbangpt__blog'>
      <div className='urbangpt__blog-heading'>
        <h1>
          <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>A lot is happening, <br /> We are blogging about it</LinearGradient>
        </h1>
      </div>
      <div className='urbangpt__blog-container'>
          <div className='urbangpt__blog-container_first'>
             <Article imgUrl={blog01} text="UrbanGPT and Open  AI is the future. Let us exlore how it is?" />
          </div>
          <div className='urbangpt__blog-container_second'>
             <Article imgUrl={blog02} date="20th January" text="UrbanGPT and Open  AI is the future. Let us exlore how it is?" />
             <Article imgUrl={blog03} text="UrbanGPT and Open  AI is the future. Let us exlore how it is?" />
             <Article imgUrl={blog04} text="UrbanGPT and Open  AI is the future. Let us exlore how it is?" />
             <Article imgUrl={blog05} text="UrbanGPT and Open  AI is the future. Let us exlore how it is?" />

          </div>

      </div>
    </div>
  )
}

export default Blog