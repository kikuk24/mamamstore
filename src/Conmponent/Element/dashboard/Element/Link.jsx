import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const Link = (props) => {
  const {children } = props
  return (
    <div className=" pt-[15px] border-b-[1px] border-custom-text">
        {children}
        
      </div>
  )
}
const Title = (props) => {
  const { title } = props
  return (
    <p className="text-[10px] leading-[16px] font-bold text-custom-text/70 uppercase">{title}</p>
   
  )
}
const Menu = (props) => {
  const { icon, text } = props
  return (
    <div className="flex items-center gap-[10px] py-[15px] cursor-pointer">
        <div className="flex items-center gap-[10px]">
          {icon}
        <p className="text-[15px] leading-[20px] font-bold text-custom-text" onClick={props.onClick}>{text}</p>
          <FaChevronRight className="text-custom-text"/>
        </div>
        </div>
  )
}
Link.Menu = Menu
Link.Title = Title
export default Link