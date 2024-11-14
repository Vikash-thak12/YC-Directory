import { startupCardType } from "@/Types";
import SearchForm from "../../components/SearchForm"
import React from 'react'
import StartupCard from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";
import { startup_Query } from "@/sanity/lib/queries";

const HomePage = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {
  const query = (await searchParams).query;
  const params = { search: query || null}

  const session = await auth();
  console.log("the session", session?.id)

  // const posts = await client.fetch(startup_Query)
  const { data: posts} = await sanityFetch({ query: startup_Query, params})


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
      <SanityLive />
    </>
  )
}

export default HomePage
