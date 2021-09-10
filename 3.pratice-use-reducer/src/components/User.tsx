import React, { useReducer, useState } from 'react'

const firstUser = {
  id: '1',
  firstName: 'David',
  lastName: 'Thomas',
  city: 'Missoula',
  state: 'Montana',
  email: 'example@test.com',
  admin: false
}

type UserType = typeof firstUser
type UserKey = keyof UserType
type NewDetails = {
  [K in UserKey]?: UserType[K]
}

const reducer = (user: UserType, newDetails: NewDetails) => ({ ...user, ...newDetails })

const User = () => {
  // const [user, setUser] = useState(firstUser)
  const [user, setUser] = useReducer(reducer, firstUser)

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.admin ? "Admin" : "User"}
      </h1>
      <p>{user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button onClick={() => setUser({ admin: true })}>Make Admin</button>
    </div>
  )
}

export default User
