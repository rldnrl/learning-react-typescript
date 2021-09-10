import React from 'react'

type Props = {
  name: string
  meow: (name: string) => void
}

const Cat = ({ name, meow }: Props) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>
}

export default React.memo(Cat, (prevProps, nextProps) => prevProps.name === nextProps.name)
