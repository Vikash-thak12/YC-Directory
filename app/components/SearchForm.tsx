import React from 'react'
import Form from 'next/form'
import SearchReset from './SearchReset'

const SearchForm = ({ query }: {query?: string}) => {
    console.log("Query", query)
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

         <button type='submit' className='search-btn text-white'>
            S 
         </button>
         </div>
    </Form>
  )
}

export default SearchForm
