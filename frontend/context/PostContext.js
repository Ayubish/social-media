'use client'
import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const PostContext = createContext();

export const PostProvider = ({children})=> {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`)
          .then(res => setPosts(res.data))
          .catch(err => console.error(err));
      }, []);

      return(
      <PostContext.Provider value={{posts, setPosts}}>
        {children}
    </PostContext.Provider>
    )
}