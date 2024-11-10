'use client'
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
            >
            <Link href={"/"} className='search-btn text-white-100'>
                X
            </Link>
        </button>
    )
}

export default SearchReset
