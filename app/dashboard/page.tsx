import React from 'react'
import { UserButton, useUser } from '@clerk/nextjs'

const DashboardPage = () => {
  return (
    <div>

      <h1>Dashboard</h1>
      <UserButton/>


    </div>
  )
}

export default DashboardPage