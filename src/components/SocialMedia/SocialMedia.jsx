import React, { useState } from 'react'
import './SocialMedia.css'

function SocialMedia() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="social-media">
      <button className="socialButton" type="submit" onClick={toggleDropdown}>
        <img src="src/assets/loudspeaker.png" className="horn" alt="Loudspeaker" />
        <img src="src/assets/flechaAbajo.png" className="horn" alt="Abajo" />
      </button>
      {isDropdownOpen && (
        <div className="social-media-dropdown">
          <ul className="social-media-list">
            <li>
              <img src="src/assets/Twitter.png" className="imageList" alt="Twitter" />
              Twitter
            </li>
            <li>
              <img src="src/assets/reddit.png" className="imageList" alt="Reddit" />
              Reddit
            </li>
            <li>
              <img src="src/assets/blog.png" className="imageList" alt="Blog" />
              Blog
            </li>
            <li>
              <img src="src/assets/newsletter.png" className="imageList" alt="Newsletter" />
              Newsletter
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SocialMedia
