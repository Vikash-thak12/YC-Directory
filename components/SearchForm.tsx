import React from 'react'
import Form from 'next/form'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SearchReset from './SearchReset'

const SearchForm = ({ query }: {query?: string}) => {
  return (
    <Form action="/" scroll={false} className='search-form'>
        <input 
        name='query'   // important when you don't give it will be undefined
        defaultValue={query}
        placeholder='Enter startups'
        className='search-input'
         />
         <div className='flex gap-2'>
         {
            query && <SearchReset />
         }

         <Button type='submit' className='search-btn text-white'>
            <Search />
         </Button>
         </div>
    </Form>
  )
}

export default SearchForm
