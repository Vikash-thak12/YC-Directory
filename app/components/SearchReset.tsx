'use client'
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const SearchReset = () => {
    const handleReset = async () => {
        const form = document.querySelector(".search-form") as HTMLFormElement;
        if (form) form.reset();
    }
    return (
        <Button
            onClick={handleReset}
            type='reset'
            >
            <Link href={"/"} className='search-btn text-white-100'>
                <X className='size-8' />
            </Link>
        </Button>
    )
}

export default SearchReset
