import { startupCardType } from "@/Types";
import SearchForm from "../../components/SearchForm"
import React from 'react'
import StartupCard from "@/components/StartupCard";

const HomePage = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Vikash"
      },
      _id: 1,
      description: "This is description",
      image: "https://images.unsplash.com/photo-1593349480506-8433634cdcbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots"
    }
  ]


  return (
    <>
      <section className='pink_container'>
        <h1 className='heading mx-auto'>Pitch your Starups, <br /> Connect with Entrepreneurs</h1>
        <p className='sub-heading'>Submit Ideas, vote in pitches, and get noticed in virtual Competition</p>
        <SearchForm query={query} />
      </section>
      <section className="mt-5 section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ? (
              posts.map((post: startupCardType) => (
                <StartupCard post={post} key={post?._id} />
              )
              )
            ) : (
              <span className="no-results">No Startup Found</span>
            )
          }
        </ul>
      </section>
    </>
  )
}

export default HomePage
