import React from 'react'

const Button = (props) => {
  const{type = "button",classname,children="button", onClick = () => {}} = props
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname}`} type={type}
    onClick={onClick}>
      {children}
    </button>
  )
}

export default Button