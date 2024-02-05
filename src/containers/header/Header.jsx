import React from 'react'

import './header.css'

import { LinearGradient } from 'react-text-gradients'
import { TypeAnimation } from 'react-type-animation'
import people from '../../assets/people.png'
import UrbanLogo from '../../assets/URBANHEADER.png'

  
const Header = () => {
  return (
    <div className='urbangpt__header ' id="home">
      <div className='urbangpt__header-content'>
        <div className='urbangpt__header-content-text'>
      <h1 className='gradient_text'>
      <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>Let's build something amazing with <TypeAnimation
      sequence={[
         'UrbanAI',
        3000, 
        'UrbanGPT',
        3000,
        'OpenAI',
        3000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    /></LinearGradient>
       </h1>
       <p className=''>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
           <div className='urbangpt__header-content__input'>
               <input type='email' placeholder='Your Email Address'/>
             <button type='button'>Get Started!</button>
            </div>

            <div className='urbangpt__header-content_people'>
             <img src={people} alt="people" />
             <p>*10 people requested access in the last week</p>
             </div>
             </div>
             <div className='urbangpt__header-image'>
              <img src={UrbanLogo} alt="U LOGO" />
             </div>
      </div>
    </div>
  )
}


export default Header