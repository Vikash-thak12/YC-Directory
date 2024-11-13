import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { startup_View_Query } from '@/lib/queries'
import { unstable_after as after } from 'next/server';
import { writeClient } from '@/sanity/lib/writeClient';

const View = async ({ id }: {id: string}) => {
    const { views: totalViews} = await client.withConfig({ useCdn: false}).fetch(startup_View_Query, { id })

    // after function to delay the execution of the code until the page has been rendered to the user. This helps ensure that the view count only updates after the page is successfully displayed.
    after(async () => {
        writeClient
          .patch(id)
          .set({ views: totalViews + 1})
          .commit()
    })
  return (
    <div className='view-container'>
      <div className='absolute -top-2 -right-2'>
        <Ping />
      </div>

      <p className='view-text'>
        <span className='font-black'>{totalViews} {totalViews > 1 ? "Views" : "View"}</span>
      </p>
    </div>
  )
}

export default View
