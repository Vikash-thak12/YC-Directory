import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { startup_View_Query } from '@/lib/queries'

const View = async ({ id }: {id: string}) => {
    const { views: totalViews} = await client.withConfig({ useCdn: false}).fetch(startup_View_Query, { id })
  return (
    <div className='view-container'>
      <div className='absolute -top-2 -right-2'>
        <Ping />
      </div>

      <p className='view-text'>
        <span className='font-black'>{totalViews} Views</span>
      </p>
    </div>
  )
}

export default View
