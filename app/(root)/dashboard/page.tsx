import React from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import { ProductsList } from '@/components/ProductsList/ProductsList'
import Link from 'next/link'


const DashboardPage = () => {
  return (
    <main>

      <h1>Dashboard</h1>

      <div className='text-right'>
        <Link className='btn btn-primary' href={"/addProduct"} >
          Add Product
        </Link>

      </div>

      <ProductsList/>


    </main>
  )
}

export default DashboardPage