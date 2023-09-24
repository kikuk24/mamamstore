import React, { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  const {type, placeholder, name, value, onChange} = props
  return (
    <div>
      <input type={type} className="text-sm border-rounded w-full py-2 px-3 placeholder:opacity-50 mb-5" placeholder={placeholder} name={name} id={name} value={value} ref={ref} onChange={onChange} />
    </div>
  )
})

export default Input