import React from 'react'
import SearchForm from '../components/SearchForm'

const HomePage = async ({ searchParams}: {searchParams: Promise<{ query?: string}>}) => {
  const query = (await searchParams).query;
  return (
    <>
      <section className='pink_container'>
        <h1 className='heading mx-auto'>Pitch your Starups, <br /> Connect with Entrepreneurs</h1>
        <p className='sub-heading'>Submit Ideas, vote in pitches, and get noticed in virtual Competition</p>
        <SearchForm query={query} />
      </section>
    </>
  )
}

export default HomePage
