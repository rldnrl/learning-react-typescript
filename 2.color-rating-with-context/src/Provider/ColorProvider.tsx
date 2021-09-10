import React, { createContext, useContext, useState } from 'react'
import { v4 } from 'uuid'
import { colors } from '../data/color.json'
import { Colors } from '../types'

type ColorContextType = {
  initialColors: Colors
  addColor: (title: string, color: string) => void
  rateColor: (id: string, rating: number) => void
  removeColor: (id: string) => void
} | null

const ColorContext = createContext<ColorContextType>(null)

export const useColors = () => {
  const colors = useContext(ColorContext)
  if (!colors) throw new Error('Cannot find ColorProvider')
  return colors
}

type Props = Readonly<{
  children: React.ReactNode
}>

const ColorProvider = ({ children }: Props) => {
  const [initialColors, setInitialColors] = useState(colors)

  const addColor = (title: string, color: string) => {
    setInitialColors([
      ...initialColors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      }
    ])
  }

  const rateColor = (id: string, rating: number) => {
    setInitialColors(colors.map(color => (color.id === id) ? { ...color, rating } : color))
  }

  const removeColor = (id: string) => setInitialColors(colors.filter(color => color.id !== id))

  return (
    <ColorContext.Provider value={{ initialColors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  )
}

export default ColorProvider
