import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`m-auto ${className}`}>{children}</div>
  )
}

export default Container