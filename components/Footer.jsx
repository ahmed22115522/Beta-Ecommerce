import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiOutlineGithub, AiFillFacebook } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>E-commerce NEXT.js All rights reserverd ⓒ 2022</p>
      <div className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
        <AiOutlineGithub />
      </div>
    </div>
  )
}

export default Footer