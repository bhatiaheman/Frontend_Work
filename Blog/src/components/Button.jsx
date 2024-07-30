/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const Button = ({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${className}`}
        {...props} 
    >
        {children}
    </button>
  )
}

export default Button