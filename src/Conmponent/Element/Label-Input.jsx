import { forwardRef } from "react"
import Input from "./Input"
import Label from "./Label"

const InputForm = forwardRef((props, ref) => {
  const { title, name, type, placeholder, value } = props
  return (
    <div className="mb-6">
      <Label htmlfor={name}>{ title }</Label>
      <Input name={name} type={type} value={value} placeholder={placeholder} ref={ref} onChange={props.onChange}/>
    </div>
  )
})

export default InputForm