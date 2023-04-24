import React from 'react'
import './infoBlocks.css'

function InformationBlock({
  // eslint-disable-next-line react/prop-types
  img,
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  text,
  // eslint-disable-next-line react/prop-types
  link,
  // eslint-disable-next-line react/prop-types
  text2,
}) {
  return (
    <div className="info_Blocks">
      <img src={img} height="75px" alt="InfoBlocks" />
      <h3>{title}</h3>
      <p>
        {text}
        <a href={link}> {text2}</a>
      </p>
    </div>
  )
}

export default InformationBlock
