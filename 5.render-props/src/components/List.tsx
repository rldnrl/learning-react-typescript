import React, { ReactElement } from 'react'
import { BigList } from '../data'

interface Props {
  data: BigList
  renderEmpty: ReactElement
  renderItem: (item: BigList[0]) => ReactElement
}

const List = ({ data, renderEmpty, renderItem }: Props) => {
  if (data.length === 0) return renderEmpty

  return (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

export default List
