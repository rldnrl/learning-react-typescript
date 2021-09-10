import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useColors } from '../Provider/ColorProvider'
import StarRating from './StarRating'

type Props = Readonly<{
  id: string
  title: string
  color: string
  rating: number
}>

const Color = ({
  id,
  title,
  color,
  rating,
}: Props) => {
  const { rateColor, removeColor } = useColors()

  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <StarRating
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  )
}

export default Color
