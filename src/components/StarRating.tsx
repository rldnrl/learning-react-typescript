import React from 'react'
import { createArray } from '../utils/createArray'
import Star from './Star'

type Props = Readonly<{
  totalStars?: number
  selectedStars: number
}>

const StarRating = ({ totalStars = 5, selectedStars }: Props) => {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
        />
      ))}
      <p>{selectedStars} / {totalStars}</p>
    </>
  )
}

export default StarRating
