import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectCustomProps {
  placeholder?: string
  items : {
    value: string
    label: string
  }[]
  onSelect: (value: string) => void
}

const SelectCustom = ( { placeholder, items, onSelect }: SelectCustomProps) => {

  

  return (
    <Select onValueChange={onSelect}>
    <SelectTrigger className="w-[275px]">
      <SelectValue placeholder={placeholder}/>
    </SelectTrigger>
    <SelectContent>
   {items.map((item)=> (
   <SelectItem key={item.value} value={item.value}  > {item.label}  </SelectItem>
   ))}
    </SelectContent>
  </Select>
  )
}

export default SelectCustom