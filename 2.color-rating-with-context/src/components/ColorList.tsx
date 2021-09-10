import React from 'react'
import { useColors } from '../Provider/ColorProvider'
import { Colors } from '../types'
import Color from './Color'

const ColorList = () => {
  const { initialColors: colors } = useColors()

  if (colors.length === 0) return <div>표시할 색이 없습니다.</div>

  return (
    <div>
      {colors.map((color) =>
        <Color
          key={color.id}
          {...color}
        />
      )}
    </div>
  )
}

export default ColorList
