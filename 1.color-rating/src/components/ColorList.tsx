import React from 'react'
import { Colors } from '../types'
import Color from './Color'

type Props = Readonly<{
  colors: Colors
  onRemoveColor: (id: string) => void
  onRateColor: (id: string, rating: number) => void
}>

const ColorList = ({
  colors = [],
  onRemoveColor,
  onRateColor 
}: Props) => {
  if (colors.length === 0) return <div>표시할 색이 없습니다.</div>

  return (
    <div>
      {colors.map((color) =>
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      )}
    </div>
  )
}

export default ColorList
