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