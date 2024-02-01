import React from 'react'
import './article.css'

const Article = ({imgUrl, date, text}) => {
  return (
    <div className='urbangpt__blog-container_article'>
       <div className='urbangpt__blog-container_article-img'>
          <img src={imgUrl} alt="blog image" />
       </div>
      
      <div className='urbangpt__blog-container_article-texts'>
        <div>
        <p>{date}</p>
        <h3>{text}</h3>
        </div>
        <p>Read Article</p>
      </div>
    </div>
  )
}

export default Article
