'use client'
import { X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const SearchReset = () => {
    const handleReset = async () => {
        const form = document.querySelector(".search-form") as HTMLFormElement;
        if (form) form.reset();
    }
    return (
        <button
            onClick={handleReset}
            type='reset'
            className='text-white'
            >
            <Link href={"/"} className='search-btn text-white'>
                <X className='' />
            </Link>
        </button>
    )
}

export default SearchReset
