import React from 'react'
import { FaStar } from 'react-icons/fa'

type Props = Readonly<{
  selected: boolean
  onSelect: () => void
}>

const Star = ({ selected, onSelect }: Props) => {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
}

export default Star
