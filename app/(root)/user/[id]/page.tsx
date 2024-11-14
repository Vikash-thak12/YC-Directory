import { auth } from '@/auth';
import UserStartups from '@/components/UserStartups';
import { client } from '@/sanity/lib/client';
import { author_By_Id_Query } from '@/sanity/lib/queries';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react'

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const session = await auth();

    const user = await client.fetch(author_By_Id_Query, { id })
    const { name, image, bio, username} = user;

    console.log("User id", user.id)
    console.log("Normal id", id)

    if(!user) return notFound();
    return (
        <>
            <section className='profile_container'>
                <div className='profile_card !bg-gray-400'>
                    <div className='profile_title'>
                        <h3 className='text-24-black uppercase line-clamp-1 text-center'>
                            {name}
                        </h3>
                    </div>
                    <Image
                        src={image}
                        alt={name}
                        width={220}
                        height={220}
                        className='profile_image'
                    />
                    <p className="text-30-extrabold mt-7 text-center">
                        @{username}
                    </p>
                    <p className="mt-1 text-center text-14-normal">{bio}</p>
                </div>
                <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
                    <p className="text-30-bold">
                        {session?.id === id ? "Your" : "All"} Startups
                    </p>
                    <ul className="card_grid-sm">
                        <Suspense>
                            <UserStartups id={id} />
                        </Suspense>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default UserPage
