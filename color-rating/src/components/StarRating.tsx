import React from 'react'
import Star from './Star'
import { createArray } from '../utils/createArray'

type Props = Readonly<{
  selectedStars: number
  onRate: (rating: number) => void
}>

const totalStars = 5

const StarRating = ({
  selectedStars,
  onRate
}: Props) => {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>{selectedStars} / {totalStars}</p>
    </>
  )
}

export default StarRating
