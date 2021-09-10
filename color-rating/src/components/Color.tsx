import React from 'react'
import { FaTrash } from 'react-icons/fa'
import StarRating from './StarRating'

type Props = Readonly<{
  id: string
  title: string
  color: string
  rating: number
  onRate: (id: string, rating: number) => void
  onRemove: (id: string) => void
}>

const Color = ({
  id,
  title,
  color,
  rating,
  onRate,
  onRemove
}: Props) => {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </section>
  )
}

export default Color
