import { auth } from '@/auth';
import { client } from '@/sanity/lib/client';
import { author_By_Id_Query } from '@/sanity/lib/queries';
import React from 'react'

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const session = await auth();

    const user = await client.fetch(author_By_Id_Query, { id })
    console.log("The user is:", user)
    return (
        <>
        page
            {/* <section className='profile_container'>
                <div className='profile_card'>
                    <div className='profile_title'>
                        <h3>
                            {user.name}
                        </h3>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default UserPage
