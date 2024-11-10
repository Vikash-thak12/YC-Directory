import { formateDate } from '@/lib/utils'
import { startupCardType } from '@/Types'
import React from 'react'

const StartupCard = ({ post }: {post: startupCardType}) => {
  return (
    <li className='startup-card'>
         <div className='flex-between'>
          <p className='startup_card-_date'>
            {formateDate(post?._createdAt)}
          </p>
         </div>
    </li>
  )
}

export default StartupCard
