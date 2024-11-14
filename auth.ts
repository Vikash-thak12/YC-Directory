import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { client } from "./sanity/lib/client"
import { writeClient } from "./sanity/lib/writeClient"
import { author_By_Github_Id_Query } from "./sanity/lib/queries"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({user: {name, email, image}, profile}){
      const id = profile?.id;
      const login = profile?.login;
      const bio = profile?.bio;
      const existingUser = await client.withConfig({ useCdn: false}).fetch(author_By_Github_Id_Query, { id })

      if(!existingUser){
        await writeClient.create({
          _type: "author",
          id, 
          name, 
          username: login, 
          email, 
          image, 
          bio: bio || "",
        })
      }

      return true;
    },

    // this function for connecting the github id to the sanity author id 
    async jwt({ token, account, profile}){
      if (account && profile){
        const user = await client.withConfig({ useCdn: false}).fetch(author_By_Github_Id_Query, { id: profile?.id})
        token.id = user?._id;
      }
      return token;
    }, 

    async session({session, token}){
      Object.assign(session, { id: token.id})
      return session; 
    }
  }
})