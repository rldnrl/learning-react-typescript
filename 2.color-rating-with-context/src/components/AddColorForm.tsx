import React, { FormEvent } from 'react'
import { useInput } from '../hooks/useInput'
import { useColors } from '../Provider/ColorProvider'

const AddColorForm = () => {
  const { addColor } = useColors()

  const {
    value: title,
    onChange: onTitleChange,
    reset: resetTitle
  } = useInput('')

  const {
    value: color,
    onChange: onColorChange,
    reset: resetColor
  } = useInput('#000000')

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addColor(title, color)
    resetTitle()
    resetColor()
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={title}
        onChange={onTitleChange}
        required
      />
      <input
        type="color"
        value={color}
        onChange={onColorChange}
        required
      />
      <button type="submit">컬러 추가하기</button>
    </form>
  )
}

export default AddColorForm
