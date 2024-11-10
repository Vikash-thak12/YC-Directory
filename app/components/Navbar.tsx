import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
    const session = await auth();
    return (
        <header className='px-10 py-5 bg-white'>
            <nav className='flex items-center justify-between text-black'>
                <Link href={"/"}>
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={130}
                        height={30}
                    />
                </Link>
                {session && session?.user ? (
                    <>
                        <div className='flex items-center gap-5'>
                            <Link href={"/startup/create"}>
                                <span>Create</span>
                            </Link>

                            <form action={async () => {
                                "use server"
                                await signOut()
                            }}>
                                <button type='submit'>Signout</button>
                            </form>

                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </div>
                    </>
                ) : (
                    <form action={async () => {
                        "use server"
                        await signIn("github")
                    }}>
                        <button type='submit'>
                            Sign In
                        </button>
                    </form>
                )}
            </nav>
        </header>
    )
}

export default Navbar
