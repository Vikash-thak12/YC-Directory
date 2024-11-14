import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
    const session = await auth();
    return (
        <header className='px-2 py-4 md:px-10 md:py-5 bg-gray-400 shadow-lg shadow-gray-500'>
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
                        <div className='flex items-center gap-2 md:gap-5'>
                            <Link href={"/startup/create"}>
                                <span className='font-bold md:text-xl hover:bg-gray-300 md:p-2 rounded-3xl'>Create</span>
                            </Link>

                            <form action={async () => {
                                "use server"
                                await signOut({ redirectTo: "/" })
                            }}>
                                <button type='submit' className='font-bold md:text-xl hover:bg-gray-300 md:p-2 rounded-3xl'>Signout</button>
                            </form>

                            <Link href={`/user/${session?.id}`}>
                                <Image
                                    src={session?.user?.image}
                                    alt={session?.user?.name}
                                    width={48}
                                    height={32}
                                    className='rounded-full object-contain'
                                />
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
