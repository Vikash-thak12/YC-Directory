import { startupCardType } from '@/Types'
import Image from 'next/image'
import React from 'react'

const StartupCard = ({ post }: {post: startupCardType}) => {
  return (
    <li className='startup-card group'>
        <span>{post.title}</span>
        <Image
        src={post.image}
        alt='Post Image'
        width={120}
        height={30}
         />
    </li>
  )
}

export default StartupCard
