import { client } from '@/sanity/lib/client'
import { startup_By_Author_Query } from '@/sanity/lib/queries'
import { startupCardType } from '@/Types'
import React from 'react'
import StartupCard from './StartupCard'

const UserStartups = async ({ id }: { id: string }) => {
    const startups = await client.fetch(startup_By_Author_Query, { id })
    return (
        <>
        {
            startups?.length > 0 ? (
                startups.map((startup: startupCardType) => (
                    <StartupCard key={startup._id} post={startup} />
                ))
            ) : (
                <p className='no-result'>No Startups Yet</p>
            )
        }
        </>
    )
}

export default UserStartups
