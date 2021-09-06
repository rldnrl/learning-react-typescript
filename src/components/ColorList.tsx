import React from 'react'
import { Colors } from '../types'
import Color from './Color'

type Props = Readonly<{
  colors: Colors
}>

const ColorList = ({ colors = [] }: Props) => {
  if (colors.length === 0) return <div>표시할 색이 없습니다.</div>

  return (
    <div>
      {colors.map(color => <Color key={color.id} {...color} />)}
    </div>
  )
}

export default ColorList
