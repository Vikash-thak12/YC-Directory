import { defineQuery } from "next-sanity";

export const startup_Query = defineQuery(`*[_type == 'startup' && defined(slug.current) && !defined($search) || category match $search || title match $search || author ->name match $search] | order(_createdAt desc){
    _id, 
    title,
    slug,
    _createdAt,
    author ->{
      _id, name, image, bio
    },
    views, 
    description,
    category,
    image
}`)

export const startup_By_Id_Queries = defineQuery(`*[_type == 'startup' && _id == $id][0]{
    _id, 
    title,
    slug,
    _createdAt,
    author ->{
      _id, name, username, image, bio
    },
    views, 
    description,
    category,
    image,
    pitch
}`)

export const startup_View_Query = defineQuery(`
  *[_type == "startup" && _id == $id][0]{ _id, views}
  `)

export const author_By_Github_Id_Query = defineQuery(`
  *[_type == "author" && id == $id][0]{ _id, id, name, email, username, image, bio}
  `)

export const author_By_Id_Query = defineQuery(`*[_type == "author" && _id == $id][0]{_id, id, name, username, email, image, bio}`)