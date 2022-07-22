import React from 'react';

const Button = ({ color, bgColor, text, borderRadius, size }) => {
  return (
    <div
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius  }}
      className={`text-${size} p-3 hover:drop-shadow-xl w-fit text-center `}
      >
        {text}
      </div>
  )
}

export default Button