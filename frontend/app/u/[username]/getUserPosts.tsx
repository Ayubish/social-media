import Post from "@/app/components/Post";
import axios from "axios";

export async function UserPosts({userId}){
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${userId}/posts`);
    const posts = res.data;
    return(
        posts.map(post=>{
            return <Post post={post} />
        })
    )
}