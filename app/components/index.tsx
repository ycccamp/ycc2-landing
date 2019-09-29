import React from 'react'

const AppComponent: React.FC = props => {
  const {children} = props

  return (
    <>{children}</>
  )
}

export default AppComponent
