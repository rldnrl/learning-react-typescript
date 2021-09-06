import React from 'react'
import StarRating from './StarRating'

type Props = Readonly<{
  title: string
  color: string
  rating: number
}>

const Color = ({ title, color, rating }: Props) => {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} />
    </section>
  )
}

export default Color
