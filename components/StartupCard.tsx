import { formateDate } from '@/lib/utils'
import { startupCardType } from '@/Types'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const StartupCard = ({ post }: { post: startupCardType }) => {
  return (
    <li className='startup-card'>
      <div className='flex-between'>
        <p className='startup_card-_date'>
          {formateDate(post?._createdAt)}
        </p>
        <div className='flex gap-5'>
          <EyeIcon />
          <span className='font-bold'>{post.views}</span>
        </div>
      </div>


      <div className='flex-between mt-5 gap-5'>
        <div className='flex-1'>
          <Link href={`/author/${post.author?._id}`}>
            <p className='text-16-medium line-clamp-1'>{post.author?.name}</p>
          </Link>
          <Link href={`/startup/${post._id}`}>
            <h3 className='text-26-semibold line-clamp-1'>{post.title}</h3>
          </Link>
        </div>
        <Link href={`/author/${post.author?._id}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="Placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${post._id}`}>
        <p className='startup_card_desc my-2 line-clamp-1'>{post.description}</p>
        <Image
          src={post.image}
          alt='Main Image'
          width={500}
          height={100}
          className='rounded-md object-contain'
        />
      </Link>
      <div className='flex-between gap-5 mt-5'>
        <Link href={`/?query=${post.category.toLowerCase()}`}>
        <p>{post.category}</p>
        </Link>
        <Button className='bg-black text-white hover:bg-black' asChild>
          <Link href={`/startup/${post._id}`}>
          Details
          </Link>
        </Button>
      </div>
    </li>
  )
}

export default StartupCard
